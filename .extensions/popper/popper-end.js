'use strict';

{
  let e_needles = {
    "ebay.com":   ebay,
  };

  function ebay() {
    (function () {
      let dialogs = document.querySelectorAll('div.wnd');
      for(let i = 0, l = dialogs.length; i < l; i++) {
        let dialog = dialogs[i];
        dialog.style.visibility = 'hidden';
        console.log('popper: ebay: hiding dialog', dialog);
      }
    })();
  }

  var host = window.location.host.split('.');
  while(host.length > 0) {
    var domain = host.join('.');
    var needle = e_needles[domain];

    if(typeof needle !== 'undefined') {
      console.log('popper end ('+ domain+ ')');
      needle();
      break;
    }

    host.shift();
  }
}
