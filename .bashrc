########################################################################
# site global settings
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

path-prepend /site/perl/bin /site/perl6/share/perl6/site/bin /site/perl6/bin /site/python/bin /site/python3/bin /site/ruby/bin /site/node/bin /site/java/bin $UHOME/.local/bin $UHOME/bin
export PATH

test "$USER" == "vagrant" && {
  path-prepend /home/vagrant/.nvm/versions/node/v8.1.2/bin
}


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
      GOPATH=$UHOME/src/go
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

    env which perldoc &>/dev/null && {
      PERLDOC='-MPod::Text::Color::Delight'
      export PERLDOC
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

    ####################################################################
    # ssh-agent
    #

    test -z "${TTY_HOME}" && \
      "$HOME/bin/wrap-ssh-agent" && \
        . "$HOME/.ssh/ssh-agent.env"


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

    alias gre='/bin/grep --color=auto -EI'
    alias grep='/bin/grep --color=auto'
    alias l='/bin/ls -Al'
    alias ls='/bin/ls'

    env which diff      &>/dev/null && alias diff='diff --color=auto'
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
