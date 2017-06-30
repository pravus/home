case "$SHELL" in
  */bin/ksh)
    for dir in /bin /usr/bin /usr/local/bin; do
      test -x $dir/bash && SHELL=$dir/bash && exec $dir/bash
    done
  ;;

  */bin/bash)
    test -r $HOME/.bashrc && . $HOME/.bashrc
  ;;
esac
