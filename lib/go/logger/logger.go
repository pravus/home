package main

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
}

/*
Tracef(map[string] interface{}, string, ...interface{})
*/
