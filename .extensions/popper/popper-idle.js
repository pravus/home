'use strict';

{
  let e_needles = {
  };

  var host = window.location.host.split('.');
  while(host.length > 0) {
    var domain = host.join('.');
    var needle = e_needles[domain];

    if(typeof needle !== 'undefined') {
      console.log('popper idle ('+ domain+ ')');
      needle();
      break;
    }

    host.shift();
  }
}
