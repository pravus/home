package main

type NullLogger struct {
}

func NewNullLogger() *NullLogger {
  return &NullLogger{
  }
}

func (logger NullLogger) Trace(args ...interface{}) {
}

func (logger NullLogger) Tracef(format string, args ...interface{}) {
}

func (logger NullLogger) Debug(args ...interface{}) {
}

func (logger NullLogger) Debugf(format string, args ...interface{}) {
}

func (logger NullLogger) Info(args ...interface{}) {
}

func (logger NullLogger) Infof(format string, args ...interface{}) {
}

func (logger NullLogger) Warn(args ...interface{}) {
}

func (logger NullLogger) Warnf(format string, args ...interface{}) {
}

func (logger NullLogger) Error(args ...interface{}) {
}

func (logger NullLogger) Errorf(format string, args ...interface{}) {
}

func (logger NullLogger) Fatal(args ...interface{}) {
}

func (logger NullLogger) Fatalf(format string, args ...interface{}) {
}

func (logger NullLogger) Panic(args ...interface{}) {
}

func (logger NullLogger) Panicf(format string, args ...interface{}) {
}

func (logger NullLogger) WithError(err error) Logger {
  return logger
}

func (logger NullLogger) WithFields(fields Fields) Logger {
  return logger
}
