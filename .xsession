#!/bin/bash

#
# clear .xsession-errors
#
test -r $HOME/.xsession-errors && > $HOME/.xsession-errors

#
# load profile
#
test -r $HOME/.bashrc && . $HOME/.bashrc

#
# start systemd shit
#
test -x /etc/X11/xinit/xinitrc.d/50-systemd-user.sh && /etc/X11/xinit/xinitrc.d/50-systemd-user.sh

#
# load application resources
#
test -r $HOME/.Xresources && xrdb $HOME/.Xresources

#
# initialize input devices
#
test -x $HOME/bin/x-session-keyboard && $HOME/bin/x-session-keyboard
test -x $HOME/bin/x-session-mouse    && $HOME/bin/x-session-mouse

# screen settings
test -x $HOME/bin/x-session-screen   && $HOME/bin/x-session-screen

#
# set background wallpaper
#
test -x $HOME/bin/x-session-wallpaper && $HOME/bin/x-session-wallpaper

#
# daemons
#
#docker &
pulseaudio --start
#xscreensaver -no-splash &
conky -d

eval $(ssh-agent -s)
test -x "/usr/bin/qt4-ssh-askpass" && export SSH_ASKPASS=/usr/bin/qt4-ssh-askpass
ssh-add

#
# window manager
#
exec openbox
