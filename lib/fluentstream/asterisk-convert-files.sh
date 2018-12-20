asterisk="/usr/sbin/asterisk"
ssh_host="den-media-8"

function asterisk_convert_files {
  extension=$1
  shift

  for ifile in "$@"; do
    ofile=$(basename "${ifile/.wav/.${extension}}")

    ssh_ifile="/tmp/$(basename "${ifile}")"
    ssh_ofile="/tmp/${ofile}"

    sox -twav "${ifile}" -twav -c1 -r8000 -b16 - | \
    ssh "${ssh_host}" "cat - > '${ssh_ifile}'" || {
      echo "$ifile: sox/scp failed" >&2
      continue
    }

    ssh "${ssh_host}" \
      "${asterisk} -rx 'file convert ${ssh_ifile} ${ssh_ofile}' >/dev/null" || {
      echo "$ifile: conversion failed" >&2
    }

    scp -q "${ssh_host}":"${ssh_ofile}" "${ofile}" || {
      echo "$ofile: scp failed" >&2
    }

    ssh "${ssh_host}" "sudo rm -f ${ssh_ifile} ${ssh_ofile}" || {
      echo "$ofile: rm failed" >&2
    }
  done
}
