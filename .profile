case "$SHELL" in
  */bin/bash)
    test -r $HOME/.bashrc && . $HOME/.bashrc
  ;;

  *sh)
    for dir in /bin /usr/bin /usr/local/bin; do
      test -x $dir/bash && SHELL=$dir/bash && exec $dir/bash
    done
  ;;

esac
