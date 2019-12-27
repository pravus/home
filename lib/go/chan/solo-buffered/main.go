package main

import (
  "fmt"
  "time"
)

func main() {
  test(0)
  test(1)
  test(2)
}

func test(size int) {
  c := make(chan struct{}, size)

  fmt.Printf("+++ starting go-routine (size=%d)\n", size)
  go func() {
    fmt.Println(". sending")
    c <- struct{}{}
    fmt.Println(". sent")
    close(c)
  }()

  fmt.Println("delaying")
  <- time.NewTimer(1 * time.Second).C

  fmt.Println("waiting")
  select {
  case <- c:
    fmt.Println("received")
  case <- time.NewTimer(1 * time.Second).C:
    fmt.Println("timed-out")
  }

  <- c
}
