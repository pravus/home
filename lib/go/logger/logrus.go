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
  adapter.log.Trace(args...)
}

func (adapter LogrusLoggerAdapter) Tracef(format string, args ...interface{}) {
  adapter.log.Tracef(format, args...)
}

func (adapter LogrusLoggerAdapter) Debug(args ...interface{}) {
  adapter.log.Debug(args...)
}

func (adapter LogrusLoggerAdapter) Debugf(format string, args ...interface{}) {
  adapter.log.Debugf(format, args...)
}

func (adapter LogrusLoggerAdapter) Info(args ...interface{}) {
  adapter.log.Info(args...)
}

func (adapter LogrusLoggerAdapter) Infof(format string, args ...interface{}) {
  adapter.log.Infof(format, args...)
}

func (adapter LogrusLoggerAdapter) Warn(args ...interface{}) {
  adapter.log.Warn(args...)
}

func (adapter LogrusLoggerAdapter) Warnf(format string, args ...interface{}) {
  adapter.log.Warnf(format, args...)
}

func (adapter LogrusLoggerAdapter) Error(args ...interface{}) {
  adapter.log.Error(args...)
}

func (adapter LogrusLoggerAdapter) Errorf(format string, args ...interface{}) {
  adapter.log.Errorf(format, args...)
}

func (adapter LogrusLoggerAdapter) Fatal(args ...interface{}) {
  adapter.log.Fatal(args...)
}

func (adapter LogrusLoggerAdapter) Fatalf(format string, args ...interface{}) {
  adapter.log.Fatalf(format, args...)
}

func (adapter LogrusLoggerAdapter) Panic(args ...interface{}) {
  adapter.log.Panic(args...)
}

func (adapter LogrusLoggerAdapter) Panicf(format string, args ...interface{}) {
  adapter.log.Panicf(format, args...)
}

func (adapter LogrusLoggerAdapter) WithError(err error) Logger {
  return NewLogrusEntryAdapter(adapter.log.WithError(err))
}

func (adapter LogrusLoggerAdapter) WithFields(fields Fields) Logger {
  return adapter.WithFields(fields)
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
  adapter.entry.Trace(args...)
}

func (adapter LogrusEntryAdapter) Tracef(format string, args ...interface{}) {
  adapter.entry.Tracef(format, args...)
}

func (adapter LogrusEntryAdapter) Debug(args ...interface{}) {
  adapter.entry.Debug(args...)
}

func (adapter LogrusEntryAdapter) Debugf(format string, args ...interface{}) {
  adapter.entry.Debugf(format, args...)
}

func (adapter LogrusEntryAdapter) Info(args ...interface{}) {
  adapter.entry.Info(args...)
}

func (adapter LogrusEntryAdapter) Infof(format string, args ...interface{}) {
  adapter.entry.Infof(format, args...)
}

func (adapter LogrusEntryAdapter) Warn(args ...interface{}) {
  adapter.entry.Warn(args...)
}

func (adapter LogrusEntryAdapter) Warnf(format string, args ...interface{}) {
  adapter.entry.Warnf(format, args...)
}

func (adapter LogrusEntryAdapter) Error(args ...interface{}) {
  adapter.entry.Error(args...)
}

func (adapter LogrusEntryAdapter) Errorf(format string, args ...interface{}) {
  adapter.entry.Errorf(format, args...)
}

func (adapter LogrusEntryAdapter) Fatal(args ...interface{}) {
  adapter.entry.Fatal(args...)
}

func (adapter LogrusEntryAdapter) Fatalf(format string, args ...interface{}) {
  adapter.entry.Fatalf(format, args...)
}

func (adapter LogrusEntryAdapter) Panic(args ...interface{}) {
  adapter.entry.Panic(args...)
}

func (adapter LogrusEntryAdapter) Panicf(format string, args ...interface{}) {
  adapter.entry.Panicf(format, args...)
}

func (adapter LogrusEntryAdapter) WithError(err error) Logger {
  return NewLogrusEntryAdapter(adapter.entry.WithError(err))
}

func (adapter LogrusEntryAdapter) WithFields(fields Fields) Logger {
  //return adapter.WithFields(logrus.Fields(fields))
  return adapter.WithFields(fields)
}
