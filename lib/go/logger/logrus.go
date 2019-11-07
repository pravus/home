package main

import (
  "github.com/sirupsen/logrus"
)

type LogrusLoggerAdapter struct {
  log *logrus.Logger
}

func NewLogrusLoggerAdapter(log *logrus.Logger) *LogrusLoggerAdapter {
  return &LogrusLoggerAdapter{
    log: log,
  }
}

func (adapter LogrusLoggerAdapter) Trace(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Tracef(format string, args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Debug(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Debugf(format string, args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Info(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Infof(format string, args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Warn(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Warnf(format string, args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Error(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Errorf(format string, args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Fatal(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Fatalf(format string, args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Panic(args ...interface{}) {
}

func (adapter LogrusLoggerAdapter) Panicf(format string, args ...interface{}) {
}

/*
func (adapter LogrusLoggerAdapter) WithFields(fields Fields) Logger {
  return adapter
}
*/

func (adapter LogrusLoggerAdapter) WithError(err error) Logger {
  return NewLogrusEntryAdapter(adapter.log.WithError(err))
}



type LogrusEntryAdapter struct {
  entry *logrus.Entry
}

func NewLogrusEntryAdapter(entry *logrus.Entry) *LogrusEntryAdapter {
  return &LogrusEntryAdapter{
    entry: entry,
  }
}

func (adapter LogrusEntryAdapter) Trace(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Tracef(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Debug(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Debugf(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Info(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Infof(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Warn(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Warnf(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Error(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Errorf(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Fatal(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Fatalf(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Panic(args ...interface{}) {
}

func (adapter LogrusEntryAdapter) Panicf(format string, args ...interface{}) {
}

func (adapter LogrusEntryAdapter) WithError(err error) Logger {
  return NewLogrusEntryAdapter(adapter.entry.WithError(err))
}
