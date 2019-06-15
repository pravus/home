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
    'live-now':        true,
    'red':             true,
    'verified-artist': true,
    'ypc':             true,
  },
  'channels': {
    '4k eye': true,
    '7clouds': true,
    '92y plus': true,
    'aborn79': true,
    'absolute science': true,
    'academind': true,
    'acb': true,
    'adult swim': true,
    'al jazeera english': true,
    'alsidre': true,
    'alexander bus': true,
    'alysha friedly': true,
    'adapt 2030': true,
    'amazing tech facts': true,
    'anton petrov': true,
    'at&t tech channel': true,
    'autoexpert tv': true,
    'autoportal': true,
    'ave': true,
    'bbc': true,
    'big island video news': true,
    'bill burr': true,
    'bill gates': true,
    'billie eilish': true,
    'bright side': true,
    'bryan lunduke': true,
    'bushradical': true,
    'butters the bean': true,
    'cesar millan': true,
    'capitan black': true,
    'cardi b': true,
    'cars guide': true,
    'caseyneistat': true,
    'cbc news': true,
    'cbc this morning': true,
    'central perk': true,
    'chrisbrowntv': true,
    'chariotsolutions': true,
    'christopher frost photography': true,
    'cinecom.net': true,
    'cinemassacre': true,
    'cody\'slab': true,
    'collegehumor': true,
    'country cast': true,
    'crashcourse': true,
    'creative channel': true,
    'ctrl shift face': true,
    'daily mail': true,
    'daily tuition': true,
    'dave volsky': true,
    'david windestal': true,
    'dang bao thuy': true,
    'debunkified': true,
    'depeche mode': true,
    'devmedia': true,
    'don giller': true,
    'dpreview': true,
    'draw with jazza': true,
    'dymondsflawless': true,
    'ed sheeran': true,
    'eevblog': true,
    'every tech in one': true,
    'fail university': true,
    'falconmasters': true,
    'fbe': true,
    'flutter': true,
    'food wishes': true,
    'frankie tech': true,
    'freecodecamp.org': true,
    'frontline pbs | official': true,
    'gabriel iglesias': true,
    'game design hqx': true,
    'gamespot': true,
    'gordon ramsay': true,
    'graves gatekeepr': true,
    'good morning america': true,
    'haltomapush': true,
    'hollywood undead': true,
    'icc': true,
    'i build it - diy tips and tricks': true,
    'impulse': true,
    'jacob + katie schwarz': true,
    'jabrils': true,
    'james bay': true,
    'james quigley': true,
    'jerry skinner': true,
    'jimmy kimmel live': true,
    'johnny cortes & los twins': true,
    'joe scott': true,
    'jon olsson': true,
    'johnvarty': true,
    'joseph carter the mink man': true,
    'jre clips': true,
    'jujimufu': true,
    'ken tamplin vocal academy': true,
    'kelley blue book': true,
    'kids animal family': true,
    'king movies': true,
    'kippetjetok007': true,
    'lastweektonight': true,
    'lana rhoades': true,
    'la machines': true,
    'late night with seth meyers': true,
    'lol network': true,
    'lil nas x': true,
    'laura sánchez': true,
    'lex fridman': true,
    'linux scoop': true,
    'linux tex': true,
    'lost wax': true,
    'lumnah acres': true,
    'maluma': true,
    'mayuko': true,
    'motionless in white': true,
    'mysterious middle east': true,
    'majster pirzu.': true,
    'marques brownlee': true,
    'masterstudy': true,
    'mayim bialik': true,
    'mark wiens': true,
    'matthew lacroix': true,
    'mega disasters': true,
    'michael jamison': true,
    'milo': true,
    'mrctv': true,
    'naked science': true,
    'nbc sports': true,
    'nilered': true,
    'nintendo': true,
    'next of ken': true,
    'onemoreplease': true,
    'oneplus': true,
    'out of the woods': true,
    'overcast': true,
    'overtime': true,
    'paluluman': true,
    'parker walbeck': true,
    'paul beckwith': true,
    'pbs eons': true,
    'pbs newshour': true,
    'pdrivetv': true,
    'pewdiepie': true,
    'pickup truck plus suv talk': true,
    'planeta tierra': true,
    'plini': true,
    'powerful message': true,
    'priyanka chopra': true,
    'raptor': true,
    'redline reviews': true,
    'reffin erdhiana': true,
    'rumble viral': true,
    'russell brand': true,
    'russia insight': true,
    'ryuzoarts': true,
    'saturday night live': true,
    'seso': true,
    'shawstrength': true,
    'sketchup': true,
    'slipknot': true,
    'smartereveryday': true,
    'south china morning post': true,
    'startyourenginesx': true,
    'talks at google': true,
    'tech spurt': true,
    'tech with brett': true,
    'techlead': true,
    'techquickie': true,
    'techzg': true,
    'ted-ed': true,
    'the coding train': true,
    'the fast lane car': true,
    'the fighter and the kid': true,
    'the late show with stephen colbert': true,
    'the mapogos': true,
    'the slow mo guys': true,
    'the why': true,
    'thoisoi2 - chemical experiments!': true,
    'thoughty2': true,
    'theellenshow': true,
    'therealnews': true,
    'throwbackstudioz': true,
    'today': true,
    'today i found out': true,
    'tracks': true,
    'tran an kts': true,
    'traversy media': true,
    'tv promos': true,
    'unbox therapy': true,
    'unchartedx': true,
    'unexplained mysteries': true,
    'wicked sounds': true,
    'wings of pegasus': true,
    'uamn tv': true,
    'vice news': true,
    'volbeat': true,
    'vsauce': true,
    'web dev simplified': true,
    'wildlife aid': true,
    'youtube movies': true,
    'zeg tv hidden from the public': true,
  },
  'exclude': [
   'Cornell Lab Bird Cams',
   'DW Documentary',
   'Sea-EagleCAM4',
   'Timeline - World History Documentaries',
  ],
  'words': [
    new RegExp(/\b3d\s*print(er|ing)?\b/i),
    new RegExp(/\bandroid\b/i),
    new RegExp(/\basmr\b/i),
    new RegExp(/\baqua\s*man\b/i),
    new RegExp(/\bbaseball\b/i),
    new RegExp(/\bbasketball\b/i),
    new RegExp(/\bblacksmith(ing)?\b/i),
    new RegExp(/\bbloopers\b/i),
    new RegExp(/\bbeginner(s|z)?\b/i),
    new RegExp(/\bbest\b/i),
    new RegExp(/\bbmw\b/i),
    new RegExp(/\bbutterbean\b/i),
    new RegExp(/\bcall\s*of\s*duty\b/i),
    new RegExp(/\bcamera\b/i),
    new RegExp(/\bchallenge\b/i),
    new RegExp(/\bchildren\b/i),
    new RegExp(/\bcricket\b/i),
    new RegExp(/\bcss\b/i),
    new RegExp(/\bcute\b/i),
    new RegExp(/\bdeadpool\b/i),
    new RegExp(/\bdj\b/i),
    new RegExp(/\bextreme\b/i),
    new RegExp(/\bfootball\b/i),
    new RegExp(/\bferal\b/i),
    new RegExp(/\bfifa\b/i),
    new RegExp(/\bgame(boy|r|rs|rz|s|z)?\b/i),
    new RegExp(/\bghost\b/i),
    new RegExp(/\bgopro\b/i),
    new RegExp(/\bgungwu\b/i),
    new RegExp(/\bhomoerotic\b/i),
    new RegExp(/\bhonda\b/i),
    new RegExp(/\bhtml\b/i),
    new RegExp(/\bhurstwic\b/i),
    new RegExp(/\bjason scott\b/i),
    new RegExp(/\bjava\b/i),
    new RegExp(/\bkaku\b/i),
    new RegExp(/\bkitten(s|z)?\b/i),
    new RegExp(/\blanding\b/i),
    new RegExp(/\blinus torvalds\b/i),
    new RegExp(/\blive\b/i),
    new RegExp(/\bmlb\b/i),
    new RegExp(/\bmonster\b/i),
    new RegExp(/\bmortal kombat\b/i),
    new RegExp(/\bmotorola\b/i),
    new RegExp(/\bmovie(s|z)?\b/i),
    new RegExp(/\bmust have\b/i),
    new RegExp(/\bnba\b/i),
    new RegExp(/\bnfl\b/i),
    new RegExp(/\bnoam chomsky\b/i),
    new RegExp(/\bpok.mon\b/i),
    new RegExp(/\brambo\b/i),
    new RegExp(/\brare(st)?\b/i),
    new RegExp(/\brc\b/i),
    new RegExp(/\brelaxation\b/i),
    new RegExp(/\bsamsung\b/i),
    new RegExp(/\bsecrets\b/i),
    new RegExp(/\bshiba\b/i),
    new RegExp(/\bshinobi\b/i),
    new RegExp(/\bshrek\b/i),
    new RegExp(/\bsnowman\b/i),
    new RegExp(/\bsoccer\b/i),
    new RegExp(/\bsong(s|z)?\b/i),
    new RegExp(/\bsonic?\b/i),
    new RegExp(/\bsuper\s*bowl\b/i),
    new RegExp(/\bsurvive the jive\b/i),
    new RegExp(/\btech\b/i),
    new RegExp(/\btalent\b/i),
    new RegExp(/\bterminator\b/i),
    new RegExp(/\btimothy snyder\b/i),
    new RegExp(/\btop\s*(10|ten)\b/i),
    new RegExp(/\btitanic\b/i),
    new RegExp(/\btoyota\b/i),
    new RegExp(/\bultimate\b/i),
    new RegExp(/\bviral\b/i),
    new RegExp(/\bviral\b/i),
    new RegExp(/\bwarhammer\b/i),
    new RegExp(/\bworld\s*series\b/i),
    new RegExp(/\bxbox\b/i),
    new RegExp(/\byanis varoufakis\b/i),
  ],
};

function _hide(node) {
  let root = (function () {
    if(window.location.toString().endsWith('/feed/recommended')) {
      return node.parentNode.parentNode.parentNode.parentNode;
    }
    //console.log('_hide', window.location, node);
    return node;
  })();

  root.style.visibility = 'hidden';
  root.style.position   = 'absolute';
  root.style.left       = '0px';
  root.style.top        = '0px';
  root.style.right      = '0px';
  root.style.bottom     = '0px';
//  node.parentNode.removeChild(node);

  //console.log('hide', root);
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
    console.log('badge: '+ type, root)
    var selector = 'div.badge.badge-style-type-'+ type;
    return root.querySelector(selector) === null ? false : true;
  }

  var channel = _text(node, [
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

  var title = _text(node, [
    'h3 a#video-title',
    'h3 span#video-title',
  ]);
  if(_matches(title)) {
    _hide(node);
    return;
  }

  Object.entries(rules.badges).forEach(function (rule) {
    if(rule[1] && _badge(node, rule[0])) {
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
