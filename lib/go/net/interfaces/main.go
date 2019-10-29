package main

import (
  "fmt"
  "net"
  "os"
  "strings"
)

func main() {
  nifs, err := net.Interfaces()
  if err != nil {
    fmt.Printf("net.Interfaces() error=%v\n", err)
    os.Exit(1)
  }

  for _, nif := range nifs {
    naddrs, err := nif.Addrs()
    if err != nil {
      fmt.Printf("%s: addresses: %v\n", nif.Name, err)
      continue
    }
    saddrs := []string{}
    for _, addr := range naddrs {
      saddrs = append(saddrs, addr.String())
    }
    fmt.Printf("%02d %-15s %17s mtu %-5d flags=%v addrs=%s\n",
      nif.Index, nif.Name, nif.HardwareAddr, nif.MTU, nif.Flags, strings.Join(saddrs, ", "))
  }
}
