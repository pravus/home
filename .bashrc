########################################################################
# global settings
#

test "$OSTYPE" = "linux" -a -r /etc/profile && . /etc/profile


########################################################################
# what is my real home?
#

UHOME=${TTY_HOME:-$HOME}
export UHOME

########################################################################
# functions
#

path-prepend() {
  local dir
  for dir in "$@"; do
    echo $PATH | grep -E "(^|:)$dir" >/dev/null 2>&1 || {
      test -d $dir && PATH=$dir${PATH:+:$PATH}
    }
  done
}

path-append() {
  local dir
  for dir in "$@"; do
    echo $PATH | grep -E "(^|:)$dir" >/dev/null 2>&1 || {
      test -d $dir && PATH=${PATH:+$PATH:}$dir
    }
  done
}


########################################################################
# path
#

path-prepend $UHOME/.local/bin $UHOME/bin
export PATH


########################################################################
# environment settings
#

HISTCONTROL=ignoredups
HISTFILE=
HISTFILESIZE=0
HISTSIZE=9999
export HISTCONTROL HISTFILE HISTFILESIZE HISTSIZE

test -z "$LC_ALL" && LC_ALL=en_US.UTF-8
export LC_ALL


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
    # interactive environment
    #

    env which git &>/dev/null && {
      GIT_PAGER=
      export GIT_PAGER
    }

    env which go &>/dev/null && {
      GOPATH=$UHOME/.local/lib/go
      export GOPATH
      path-prepend $GOPATH/bin
    }

    test -r $UHOME/.inputrc && {
      INPUTRC=$UHOME/.inputrc
      export INPUTRC
    }

    env which less &>/dev/null && {
      LESS="-fRQ"
      export LESS

      PAGER=less
      export PAGER
    }

    test -r $UHOME/.screenrc && {
      SCREENRC=$UHOME/.screenrc
      export SCREENRC
    }

    env which systemctl &>/dev/null && {
      SYSTEMD_PAGER=
      export SYSTEMD_PAGER
    }

    test -d "$UHOME/.terminfo" && {
      TERMINFO="$UHOME/.terminfo"
      export TERMINFO
    }

    SSH_AUTH_SOCK=$XDG_RUNTIME_DIR/ssh-agent.socket
    export SSH_AUTH_SOCK

    ####################################################################
    # diff
    #
    env which diff &>/dev/null && {
      [[ "$(diff -v | awk '/diffutils/ {print $4}')" > "3.6" ]] && {
        alias diff='diff --color=auto'
      }
    }

    ####################################################################
    # vim
    #

    env which vim &>/dev/null && {
      EDITOR="vim -u $UHOME/.vimrc"
      VISUAL="vim -u $UHOME/.vimrc"
      export EDITOR VISUAL

      alias vi="vim -u $UHOME/.vimrc"
      alias vim="vim -u $UHOME/.vimrc"
    }


    ####################################################################
    # aliases
    #

    alias grep='/bin/grep --color=auto'
    alias l='/bin/ls -Al'
    alias ls='/bin/ls'

    env which mysql     &>/dev/null && {
      alias mysql='mysql -A -b'
    }
    env which rdesktop  &>/dev/null && alias rdesktop='rdesktop -a 24 -g 1024x768 -r sound:local'
    env which x11vnc    &>/dev/null && alias x11vnc='x11vnc -noxrecord -rfbauth ~/.vnc/passwd'

    alias cp &>/dev/null && unalias cp
    alias mv &>/dev/null && unalias mv
    alias rm &>/dev/null && unalias rm


    ####################################################################
    # options
    #

    # turn off bash-completion because it fucking sucks
    complete -r

    # of the gods
    set -o vi


    ####################################################################
    # local
    #

    test -n "$(ls -A $UHOME/.local/profile.d 2>/dev/null)" && {
      for source in $UHOME/.local/profile.d/*; do
        . $source
      done
    }
  ;;
esac


########################################################################
# miscellaneous
#

# get rid of annoying command-not-found handling
unset command_not_found_handle
