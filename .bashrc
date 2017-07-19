########################################################################
# site global settings
#

test "$OSTYPE" = "linux" -a -r /etc/profile && . /etc/profile


########################################################################
# set UHOME
#

UHOME=${TTYHOME:-$HOME}


########################################################################
# functions
#

path-prepend() {
  local dir
  for dir in "$@"; do
    echo $PATH | grep "(^|:)$dir" >/dev/null 2>&1 || {
      test -d $dir && PATH=$dir${PATH:+:$PATH}
    }
  done
}

path-append() {
  local dir
  for dir in "$@"; do
    echo $PATH | grep "(^|:)$dir" >/dev/null 2>&1 || {
      test -d $dir && PATH=${PATH:+$PATH:}$dir
    }
  done
}


########################################################################
# path
#

path-prepend /site/perl/bin /site/perl6/share/perl6/site/bin /site/perl6/bin /site/python/bin /site/ruby/bin /site/node/bin /site/java/bin $HOME/.local/bin $HOME/bin
export PATH


########################################################################
# environment settings
#

EDITOR="vim -u $UHOME/.vimrc"
VISUAL="vim -u $UHOME/.vimrc"
export EDITOR VISUAL

GIT_PAGER=
export GIT_PAGER

HISTCONTROL=ignoredups
HISTFILE=
HISTFILESIZE=0
HISTSIZE=9999
export HISTCONTROL HISTFILE HISTFILESIZE HISTSIZE

test -r $UHOME/.inputrc && {
  INPUTRC=$UHOME/.inputrc
  export INPUTRC
}

test -z "$LC_ALL" && LC_ALL=en_US.UTF-8
export LC_ALL

LESS="$LESS -fRQ"
export LESS

PAGER=less
export PAGER

PERLDOC='-MPod::Text::Color::Delight'
export PERLDOC

test -r $UHOME/.screenrc && {
  SCREENRC=$UHOME/.screenrc
  export SCREENRC
}

test -d "$UHOME/.terminfo" && {
  TERMINFO="$UHOME/.terminfo"
  export TERMINFO
}


########################################################################
# shell-specific settings
#

case "$SHELL" in
  */bin/ksh)
    HOSTNAME=`hostname | sed 's/\..*//'`
    export HOSTNAME

    PS1='$LOGNAME@$HOSTNAME:$PWD\$ '
    export PS1
    ;;

  */bin/bash)
    PS1='\u@\h:\w\$ '
    export PS1
    ;;
esac


########################################################################
# interactive mode settings
#

case "$-" in
  *i*)
    ####################################################################
    # aliases
    #

    alias l='/bin/ls -Al'
    alias ls='/bin/ls'

    type -p vim &>/dev/null && {
      alias vi="vim -u $UHOME/.vimrc"
      alias vim="vim -u $UHOME/.vimrc"
    }

    type -p rdesktop  &>/dev/null && alias rdesktop='rdesktop -a 24 -g 1024x768' -r sound:local
    type -p x11vnc    &>/dev/null && alias x11vnc='x11vnc -noxrecord -rfbauth ~/.vnc/passwd'
    type -p systemctl &>/dev/null && export SYSTEMD_PAGER=

    alias cp &>/dev/null && unalias cp
    alias mv &>/dev/null && unalias mv
    alias rm &>/dev/null && unalias rm

    ####################################################################
    # options
    #

    # turn of bash-completion because it fucking sucks
    complete -r

    # of the gods
    set -o vi
  ;;
esac


########################################################################
# miscellaneous
#

# get rid of annoying command-not-found handling
unset command_not_found_handle
