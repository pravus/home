filetype plugin off

set backspace=indent,eol,start
set formatoptions=tcq
set hlsearch
set ruler
set nofoldenable
set shiftwidth=2
set tabstop=2
set softtabstop=0
set t_vb=
set vb

set nobackup
set nocp
set noeb nowb
set expandtab
set nowrap

set ic

"let loaded_matchparen=1
"set pastetoggle=<F12>

augroup gentoo
  au!
augroup END

augroup filetypedetect
  au BufNewFile,BufRead extensions.conf setf asterisk
  au BufNewFile,BufRead *.pc            setf c
  au BufNewFile,BufRead *.psgi          setf perl
  au BufNewFile,BufRead *.p6sgi         setf perl6
augroup END

au FileChangedRO * set noreadonly

syntax on
"colorscheme turbo
colorscheme muon

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

if version >= 700
  au VimEnter *      NoMatchParen
  au VimEnter *.scm  DoMatchParen
  au VimEnter *.lisp DoMatchParen
endif

mapclear
nnoremap <F1>  <NOP>
nnoremap <F9>  :syntax sync fromstart<CR>
nnoremap <F12> :set autoindent!<CR>
inoremap <F12> <ESC>:set autoindent!<CR>i
nnoremap <CR>  :noh<CR>
