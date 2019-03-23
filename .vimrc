" !(@) vimrc

" turn filetype detection off
filetype plugin off

" check for a local resources directory
if isdirectory('/usr/share/vim/local')
  set runtimepath^=/usr/share/vim/local
endif

" $UHOME is set when we are running as another user
if exists('$UHOME') && isdirectory($UHOME. '/.vim')
  set runtimepath^=$UHOME/.vim
endif

" standard preferences
set backspace=indent,eol,start
set expandtab
set formatoptions=tcq
set hlsearch
set ic
set nobackup
set nocp
set noeb
set nofoldenable
set nowb
set nowrap
set ruler
set shiftwidth=2
set softtabstop=0
set t_vb=
set tabstop=2
set vb

" only enable when i'm feeling lispy
"let loaded_matchparen=1

" gentoo's settings are horrible.  all of them.
augroup gentoo
  au!
augroup END

" removes annoying errors when writing a read-only file
augroup set_ro
  au!
  au FileChangedRO * set noreadonly
augroup END

" filetype detection hints
augroup set_filetype
  au!
  au BufNewFile,BufRead *.pc    setf c
  au BufNewFile,BufRead *.psgi  setf perl
  au BufNewFile,BufRead *.p6sgi setf perl6
augroup END

augroup fluentstream
  au!
  au BufNewFile,BufRead asterisk.conf                        setf asterisk
  au BufNewFile,BufRead extconfig.conf                       setf asterisk
  au BufNewFile,BufRead extensions.conf                      setf asterisk
  au BufNewFile,BufRead fc_feature_codes.conf                setf asterisk
  au BufNewFile,BufRead fc_globals.conf                      setf asterisk
  au BufNewFile,BufRead fluentcloud_infrastructure_aors.conf setf asterisk
  au BufNewFile,BufRead fluentcloud_infrastructure.conf      setf asterisk
  au BufNewFile,BufRead func_odbc.conf                       setf asterisk
  au BufNewFile,BufRead manager.conf                         setf asterisk
  au BufNewFile,BufRead modules.conf                         setf asterisk
  au BufNewFile,BufRead musiconhold.conf                     setf asterisk
  au BufNewFile,BufRead pjsip.conf                           setf asterisk
  au BufNewFile,BufRead pjsip_notify.conf                    setf asterisk
  au BufNewFile,BufRead res_odbc.conf                        setf asterisk
  au BufNewFile,BufRead rtp.conf                             setf asterisk
  au BufNewFile,BufRead sorcery.conf                         setf asterisk
  au BufNewFile,BufRead voicemail.conf                       setf asterisk
  au BufNewFile,BufRead C-[0-9a-f]*                          setf asterisk
  au BufNewFile,BufRead *.fs                                 setf php
augroup END

" filetype options
augroup set_fileopts
  au!
  "au FileType c      set noautoindent cindent
  "au FileType cpp    set noautoindent cindent
  au FileType list   set lisp
  au FileType make   set noexpandtab
  au FileType perl   let perl_extended_vars=1
  au FileType python let python_highlight_all=1
  au FileType scheme set lisp
  "au FileType sql    set filetype=plsql
  "au FileType proc   set filetype=c
  au FileType *      set autoindent
augroup END

" match parens
if version >= 700
  augroup set_matchparens
    au!
    au VimEnter *      NoMatchParen
    au VimEnter *.scm  DoMatchParen
    au VimEnter *.lisp DoMatchParen
  augroup END
endif

" disable E173 with multiple buffers
if argc() > 1
  silent blast
  silent bfirst
endif

" syntax highlighting
syntax on
"silent! colorscheme turbo
silent! colorscheme muon

" keybindings
mapclear
nnoremap <F1>  <NOP>
inoremap <F1>  <NOP>
nnoremap <F9>  :syntax sync fromstart<CR>
nnoremap <F10> :set expandtab!<CR>
nnoremap <F11> :set ignorecase!<CR>
inoremap <F11> <ESC>:set ignorecase!<CR>i
nnoremap <F12> :set autoindent!<CR>
inoremap <F12> <ESC>:set autoindent!<CR>i
nnoremap <CR>  :noh<CR>
map      q:    <NOP>
map      <C-N> :bnext<CR>
map      <C-P> :bprevious<CR>
