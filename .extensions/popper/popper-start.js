'use strict';

var needles = {
  "amazon.com": amazon,
  "medium.com": medium,
};

function amazon() {
  (function () {
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
    console.log('medium: installing mutator watch for <body>');
    let root = document.body;
    new MutationObserver(function(recs) {
      recs.forEach(function(mu) {
        mu.addedNodes.forEach(function(node) {
          console.log('mutate.add', node);
        });
      });
    }).observe(root, {childList: true});
  })();
}

var host = window.location.host.split('.');
while(host.length > 0) {
  var domain = host.join('.');
  var needle = needles[domain];

  if(typeof needle !== 'undefined') {
    console.log('popper start ('+ domain+ ')');
    needle();
    break;
  }

  host.shift();
}
