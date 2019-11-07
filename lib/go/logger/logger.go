package main

import (
//  "github.com/sirupsen/logrus"
)

type Fields map[string] interface{}

type Logger interface {
  Trace(...interface{})
  Tracef(string, ...interface{})

  Debug(...interface{})
  Debugf(string, ...interface{})

  Info(...interface{})
  Infof(string, ...interface{})

  Warn(...interface{})
  Warnf(string, ...interface{})

  Error(...interface{})
  Errorf(string, ...interface{})

  Fatal(...interface{})
  Fatalf(string, ...interface{})

  Panic(...interface{})
  Panicf(string, ...interface{})

  WithError(error) Logger
  WithFields(Fields) Logger

  //WithFields(map[string] interface{}) Logger
  //WithFields(logrus.Fields) *logrus.Entry
}

/*
Tracef(map[string] interface{}, string, ...interface{})
*/
