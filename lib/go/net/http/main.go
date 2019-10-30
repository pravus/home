package main

import (
  "log"
  "math/rand"
  "net/http"
  "os"
  "os/signal"
  "strconv"
  "sync"
  "time"
)

type Service struct {
  name string
  bind string
  wait time.Duration
}

func main() {
  stop := make(chan struct{})
  quit := make(chan os.Signal, 1)

  signal.Notify(quit, os.Interrupt)

  rns := rand.NewSource(time.Now().UnixNano())
  rng := rand.New(rns)
  swg := sync.WaitGroup{}
  for index, label := range []string{"A", "B", "C"} {
    service := Service{
      name: "HTTP-" + label,
      bind: ":" + strconv.Itoa(8000 + index),
      wait: time.Duration(rng.Int() % 10) * time.Second,
    }

    wait := make(chan struct{})

    go func() {
      <- wait
      swg.Done()
    }()

    go service.Run(stop, wait)

    swg.Add(1)
  }

  <- quit

  log.Printf("main sigint")
  close(stop)

  swg.Wait()

  log.Printf("main exit")
}

func (service *Service) Run(stop, done chan struct{}) {
  server := http.Server{
    Addr:    service.bind,
    Handler: http.HandlerFunc(func (w http.ResponseWriter, r *http.Request) {
      w.Write([]byte(service.name))
    }),
  }
  
  go func () {
    <- stop
    log.Printf("http %s stop", service.name)
    err := server.Shutdown(nil)
    if err != nil {
      log.Printf("http %s shutdown error=%v", service.name, err)
    }
  }()

  log.Printf("http %s up bind=%s", service.name, service.bind)
  err := server.ListenAndServe()
  if err != nil && err != http.ErrServerClosed {
    log.Printf("http %s down error=%v", service.name, err)
  }

  log.Printf("http %s wait=%s", service.name, service.wait)
  if service.wait > 0 {
    <- time.NewTimer(service.wait).C
  }

  log.Printf("http %s done", service.name)
  close(done)
}
