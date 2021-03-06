'use strict';

var s_needles = {
  "amazon.com": amazon,
  "medium.com": medium,
};

function amazon() {
  (function () {
    if(window.location.host.match(/aws\.amazon\.com$/)) {
      return;
    }
    if(window.location.origin !== 'https://smile.amazon.com') {
      window.location.href = 
         'https://smile.amazon.com'
        + window.location.href.substr(window.location.origin.length)
        ;
    }
  })();
}

function medium() {
  (function () {
    console.log('medium: installing mutation observers');
    let root = document;
    new MutationObserver(function(recs) {
      recs.forEach(function(mu) {
        mu.addedNodes.forEach(function(node) {
          if(node.tagName === 'IFRAME') {
            console.log('medium: removing iframe', node);
            node.parentNode.removeChild(node);
            return;
          }
          if(node instanceof Text && node.textContent == "window.main();") {
            console.log('medium: window.nope()');
            node.parentNode.removeChild(node);
            return;
          }
          if(node.tagName === 'DIV' && node.parentNode.tagName === 'BODY' && node.id === '' && node.className === '' && node.children.length === 1 && node.children[0].tagName === 'DIV') {
            console.log('medium: removing pop-up', node, node.parentNode);
            node.parentNode.removeChild(node);
            return;
          }
        });
      });
    }).observe(root, {childList: true, subtree: true});
  })();
}

var host = window.location.host.split('.');
while(host.length > 0) {
  var domain = host.join('.');
  var needle = s_needles[domain];

  if(typeof needle !== 'undefined') {
    console.log('popper start ('+ domain+ ')');
    needle();
    break;
  }

  host.shift();
}
