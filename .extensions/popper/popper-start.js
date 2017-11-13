'use strict';

var needles = {
  "amazon.com": amazon,
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
