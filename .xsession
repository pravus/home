#!/bin/bash

#
# clear .xsession-errors
#
test -r $HOME/.xsession-errors && > $HOME/.xsession-errors

#
# start ssh-agent
#
env which ssh-agent &>/dev/null && eval $(ssh-agent -s)

#
# start systemd shit
#
test -x /etc/X11/xinit/xinitrc.d/50-systemd-user.sh && /etc/X11/xinit/xinitrc.d/50-systemd-user.sh

#
# load profile
#
test -r $HOME/.bashrc && . $HOME/.bashrc

#
# load application resources
#
test -r $HOME/.Xresources && xrdb $HOME/.Xresources

#
# initialize input devices
#
test -x $HOME/bin/x-session-keyboard && $HOME/bin/x-session-keyboard
test -x $HOME/bin/x-session-mouse    && $HOME/bin/x-session-mouse

#
# screen settings
#
test -x $HOME/bin/x-session-screen   && $HOME/bin/x-session-screen

#
# set background wallpaper
#
test -x $HOME/bin/x-session-wallpaper && $HOME/bin/x-session-wallpaper

#
# launch background programs
#
test -x $HOME/bin/x-session-exec && $HOME/bin/x-session-exec

#
# set up ssh agent
#
test -x $HOME/bin/x-session-ssh && $HOME/bin/x-session-ssh

#
# window manager
#
exec openbox
