'use strict';

var needles = {
  "amazon.com": amazon,
  "ebay.com":   ebay,
};

function amazon() {
}

function ebay() {
  (function () {
    var dialogs = document.querySelectorAll('div.wnd');
    for(var idx = 0, len = dialogs.length; idx < len; idx++) {
      var dialog = dialogs[idx];
      dialog.style.visibility = 'hidden';
      console.log('popper: ebay: hiding dialog', dialog);
    }
  })();
}

var host = window.location.host.split('.');
while(host.length > 0) {
  var domain = host.join('.');
  var needle = needles[domain];

  if(typeof needle !== 'undefined') {
    console.log('popper end ('+ domain+ ')');
    needle();
    break;
  }

  host.shift();
}
