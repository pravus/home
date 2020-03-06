package main

import (
  "log"
  "net"
)

func main() {
  socket, err := net.Listen("tcp", ":5000")
  if err != nil {
    log.Fatalf("listen: error=%v", err)
  }

  for {
    conn, err := socket.Accept()
    if err != nil {
      log.Fatalf("accept: error=%v", err)
    }
    go chuck(conn)
  }
}

func chuck(conn net.Conn) {
  conn.Write([]byte("FUCK\n"))
  conn.Close()
}
