package main

import (
//  "os"
  "github.com/sirupsen/logrus"
)

func main() {
  log := logrus.New()

  log.SetLevel(logrus.TraceLevel)

  examples := []struct{
    log  Logger
    text string
  }{
    {
      log:  NewLogrusLoggerAdapter(log),
      text: "logrus standard",
    },
    {
      log:  NewLogrusEntryAdapter(log.WithFields(logrus.Fields{"key": "value"})),
      text: "logrus entry with fields",
    },
/*
    {
      log:  WrapLog(os.Stdout, "", 0),
      text: "wrapped logger",
    },
*/
    {
      log:  NewNullLogger(),
      text: "null logger",
    },
  }

  for _, example := range examples {
    test(example.log, "example log message: %s", example.text)
  }
}

func test(log Logger, format string, args ...interface{}) {
  log.Tracef(format, args)
  log.Debugf(format, args)
  log.Infof (format, args)
  log.Warnf (format, args)
  log.Errorf(format, args)
//  log.Fatalf(format, args)
}
