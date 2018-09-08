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
    'milo': true,
    'therealnews': true,
    'talks at google': true,
  },
  'exclude': [
   'Sea-EagleCAM4',
  ],
  'words': [
    new RegExp(/\bhomoerotic\b/i),
    new RegExp(/\bhurstwic\b/i),
    new RegExp(/\bkaku\b/i),
    new RegExp(/\bsurvive the jive\b/i),
    new RegExp(/\bjason scott\b/i),
    new RegExp(/\bgungwu\b/i),
    new RegExp(/\btimothy snyder\b/i),
    new RegExp(/\bnoam chomsky\b/i),
    new RegExp(/\byanis varoufakis\b/i),
  ],
};

function _hide(node) {
  node.style.visibility = 'hidden';
  node.style.position   = 'absolute';
  node.style.left       = '0px';
  node.style.top        = '0px';
  node.style.right      = '0px';
  node.style.bottom     = '0px';
  //node.parentNode.removeChild(node);
}

function _exclude(name) {
  for(var i = 0, l = rules.exclude.length; i < l; i++) {
    if(channel === rules.exclude[i]) {
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
    if(text.match(rules.words[i])) {
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
    console.log('badge: '+ type, root)
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
          console.log('child: '+ c[i].tagName.toLowerCase());
        }
      })();
      new MutationObserver(function(recs) {
        recs.forEach(function(mu) {
          mu.addedNodes.forEach(function(node) {
            console.log('mutate', node);
            clean(node);
          });
        });
      }).observe(root, {childList: true});
      clean(root);
    }
    else {
      console.log('missing sock: '+ sock);
    }
  })
}

window.setTimeout(lace_up, 500);
//lace_up();

clean(document.body);
