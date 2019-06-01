'use strict';

var socks = [
  'ytd-section-list-renderer#primary div#contents',
  'ytd-item-section-renderer div#contents',
  'ytd-watch-next-secondary-results-renderer div#items',
  'ytd-watch-next-secondary-results-renderer div#items ytd-compact-autoplay-renderer',
];

var units = [
  'ytd-video-renderer',
  'ytd-grid-video-renderer',
  'ytd-compact-video-renderer',
];

var rules = {
  'badges': {
    'live-now': true,
    'red':      true,
  },
  'channels': {
    '7clouds': true,
    '92y plus': true,
    'acb': true,
    'amazing tech facts': true,
    'at&t tech channel': true,
    'autoexpert tv': true,
    'autoportal': true,
    'bryan lunduke': true,
    'butters the bean': true,
    'cardi b': true,
    'cbc news': true,
    'chrisbrowntv': true,
    'chariotsolutions': true,
    'dave volsky': true,
    'depeche mode': true,
    'ed sheeran': true,
    'fall university': true,
    'freecodecamp.org': true,
    'gabriel iglesias': true,
    'game design hqx': true,
    'impulse': true,
    'jerry skinner': true,
    'jimmy kimmel live': true,
    'joe scott': true,
    'ken tamplin vocal academy': true,
    'kids animal family': true,
    'maluma': true,
    'lastweektonight': true,
    'lol network': true,
    'lil nas x': true,
    'linux tex': true,
    'marques brownlee': true,
    'mayim bialik': true,
    'milo': true,
    'next of ken': true,
    'overtime': true,
    'pbs eons': true,
    'priyanka chopra': true,
    'russell brand': true,
    'seso': true,
    'slipknot': true,
    'talks at google': true,
    'techlead': true,
    'therealnews': true,
    'tracks': true,
    'the fast lane car': true,
    'the late show with stephen colbert': true,
    'the slow mo guys': true,
    'traversy media': true,
    'unbox therapy': true,
    'wings of pegasus': true,
    'uamn tv': true,
    'volbeat': true,
    'web dev simplified': true,
  },
  'exclude': [
   'Sea-EagleCAM4',
  ],
  'words': [
    new RegExp(/\bbaseball\b/i),
    new RegExp(/\bbasketball\b/i),
    new RegExp(/\bfootball\b/i),
    new RegExp(/\bgungwu\b/i),
    new RegExp(/\bhomoerotic\b/i),
    new RegExp(/\bhurstwic\b/i),
    new RegExp(/\bjason scott\b/i),
    new RegExp(/\bkaku\b/i),
    new RegExp(/\bmba\b/i),
    new RegExp(/\bnba\b/i),
    new RegExp(/\bnfl\b/i),
    new RegExp(/\bnoam chomsky\b/i),
    new RegExp(/\bsoccer\b/i),
    new RegExp(/\bsurvive the jive\b/i),
    new RegExp(/\btimothy snyder\b/i),
    new RegExp(/\byanis varoufakis\b/i),
  ],
};

function _hide(node) {
  let root = (function () {
    if(window.location.toString().endsWith('/feed/recommended')) {
      return node.parentNode.parentNode.parentNode.parentNode;
    }
    console.log('_hide', window.location, node);
    return node;
  })();

  root.style.visibility = 'hidden';
  root.style.position   = 'absolute';
  root.style.left       = '0px';
  root.style.top        = '0px';
  root.style.right      = '0px';
  root.style.bottom     = '0px';
//  node.parentNode.removeChild(node);

  console.log('hide', root);
}

function _exclude(name) {
  for(var i = 0, l = rules.exclude.length; i < l; i++) {
    if(name === rules.exclude[i]) {
      return true;
    }
  }
  return false;
}

function _channel(name) {
  var test = name.toLowerCase();
  var bool = rules.channels[test];
  return typeof bool === 'undefined' ? false : bool;
}

function _matches(text) {
  for(var i = 0, l = rules.words.length; i < l; i++) {
    var matches = text.match(rules.words[i]);
    if(matches) {
      return true;
    }
  }
  return false;
}

function inspect(node) {
  function _text(root, queries) {
    for(var i = 0, l = queries.length; i < l; i++) {
      var node = root.querySelector(queries[i]);
      if(node !== null) {
        return node.innerText;
      }
    }

    return '<unknown>';
  }

  function _badge(root, type) {
    //console.log('badge: '+ type, root)
    var selector = 'div.badge.badge-style-type-'+ type;
    return root.querySelector(selector) === null ? false : true;
  }

  var channel  = _text(node, [
    'div#byline-container a',
    'div#byline-container yt-formatted-string',
  ]);
  if(_exclude(channel)) {
    return;
  }
  if(_channel(channel)) {
    _hide(node);
    return;
  }
  if(_matches(channel)) {
    _hide(node);
    return;
  }

  var title    = _text(node, [
    'h3 a#video-title',
    'h3 span#video-title',
  ]);
  if(_matches(title)) {
    _hide(node);
    return;
  }

  Object.entries(rules.badges).forEach(function (rule) {
    if(rule[1] && _badge(node, 'live-now')) {
      _hide(node);
      return;
    }
  });
}

function clean(root) {
  var tag = root.tagName.toLowerCase();
  units.forEach(function(key) {
    var nodes = tag === key ? [root] : root.querySelectorAll(key);
    for(var i = 0, l = nodes.length; i < l; i++) {
      inspect(nodes[i]);
    }
  });
}

function lace_up() {
  socks.forEach(function (sock) {
    var root = document.querySelector(sock);
    if(root !== null) {
      (function() {
        var c = root.children;
        for(var i = 0, l = c.length; i < l; i++) {
          //console.log('child: '+ c[i].tagName.toLowerCase());
        }
      })();
      new MutationObserver(function(recs) {
        recs.forEach(function(mu) {
          mu.addedNodes.forEach(function(node) {
            //console.log('mutate', node);
            clean(node);
          });
        });
      }).observe(root, {childList: true});
      clean(root);
    }
    else {
      //console.log('missing sock: '+ sock);
    }
  })
}

window.setTimeout(lace_up, 500);
//lace_up();

clean(document.body);
