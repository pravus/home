function open_tab(id) {
  console.log('opening tab: '+ id);
  var node = document.getElementById(id);
  if(node === null) {
    console.log('mytube: error: unknown tab: '+ id);
    return;
  }

  // close current tab
  (function() {
    var ul   = document.querySelector('nav ul');
    var open = ul.querySelectorAll('li.open');
    for(var i = 0, l = open.length; i < l; i++) {
      open[i].className = "";
    }
  })();

  node.className = "open";

  // FIXME: todo
  // copy content
}

function on_tab_click(e) {
  open_tab(this.id);
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  var tabs = document.querySelectorAll('nav ul li');
  for(var i = 0, l = tabs.length; i < l; i++) {
    tabs[i].addEventListener('click', on_tab_click);
  }
});

console.log('we are in main()');
