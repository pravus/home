package main

import (
  "io"
  "log"
)

type WrappedLogger struct {
  log *log.Logger
}

func WrapLog(out io.Writer, prefix string, flag int) *WrappedLogger {
  return &WrappedLogger{log: log.New(out, prefix, flag)}
}

func (logger WrappedLogger) Printf(format, args ...interface{}) {
}

func (logger WrappedLogger) Trace(args ...interface{}) {
  logger.log.Print(args...)
}

func (logger WrappedLogger) Tracef(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}

func (logger WrappedLogger) Debug(args ...interface{}) {
  logger.log.Print(args)
}

func (logger WrappedLogger) Debugf(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}

func (logger WrappedLogger) Info(args ...interface{}) {
  logger.log.Print(args...)
}

func (logger WrappedLogger) Infof(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}

func (logger WrappedLogger) Warn(args ...interface{}) {
  logger.log.Print(args...)
}

func (logger WrappedLogger) Warnf(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}

func (logger WrappedLogger) Error(args ...interface{}) {
  logger.log.Print(args...)
}

func (logger WrappedLogger) Errorf(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}

func (logger WrappedLogger) Fatal(args ...interface{}) {
  logger.log.Print(args...)
}

func (logger WrappedLogger) Fatalf(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}

func (logger WrappedLogger) Panic(args ...interface{}) {
  logger.log.Print(args...)
}

func (logger WrappedLogger) Panicf(format string, args ...interface{}) {
  logger.log.Printf(format, args...)
}
