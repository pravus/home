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
set list
"set listchars=tab:→ 
"set listchars=tab:‸ 
"set listchars=tab:ˍ 
"set listchars=tab:ˍˍ
"set listchars=tab:¬ 
"set listchars=tab:˽ 
set listchars=tab:˾ 
set nobackup
set nocp
set noeb
set nofoldenable
set nomodeline
set nowb
set nowrap
set ruler
set shiftwidth=2
set softtabstop=0
set t_Co=256
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
  au BufNewFile,BufRead *.pc      setf c
  au BufNewFile,BufRead *.psgi    setf perl
  au BufNewFile,BufRead *.p6sgi   setf perl6
  au BufNewFile,BufRead *.pgsql   setf pgsql
  au BufNewFile,BufRead *.plpgsql setf pgsql
augroup END

" filetype options
augroup set_fileopts
  au!

  "au FileType c      set noautoindent cindent
  "au FileType cpp    set noautoindent cindent
  au FileType go     set noexpandtab
  "au FileType go     map <M-F> :!go fmt %<CR>:echo 'go fmt ran'<CR>
  au FileType list   set lisp
  au FileType make   set noexpandtab
  au FileType perl   let perl_extended_vars=1
  au FileType python let python_highlight_all=1
  au FileType scheme set lisp
  au FileType text   syntax on
  "au FileType sql    set filetype=plsql
  "au FileType proc   set filetype=c
  au FileType *      set autoindent

  "au VimLeave *.go !go fmt %
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

"set background=light

" syntax highlighting
syntax on
silent! colorscheme muon
"silent! colorscheme pyte
"silent! colorscheme turbo

hi SpecialKey ctermfg=darkgray

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
map      K     <NOP>
map      q:    <NOP>
map      <C-N> :bnext<CR>
map      <C-P> :bprevious<CR>
