// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({12:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],6:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":12}],3:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":6}],7:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./bg.gif":[["58dfb2a9af2b3eb2b52c660e7edd0a32.gif",10],10],"./face1.gif":[["21b0cb6085475e5011c8a372e0976fbe.gif",14],14],"./face2.gif":[["f40d57fe86e3d6a1c677ef6613fab3e2.gif",13],13],"./face3.gif":[["01c87e9f6fe1279e0d5d2ab6377a3dd6.gif",11],11],"_css_loader":6}],8:[function(require,module,exports) {
module.exports = {
	"data":[
		{
  		"tip":"我是第一条啦啦啦",
  		"face":"face1"
  	},
  	{
  		"tip":"我是第二条啦啦啦",
  		"face":"face2"
  	},
  	{
  		"tip":"我是第三条啦啦啦",
  		"face":"face3"
  	}
  ]
};
},{}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var HTML = '\n\t\t<div class="call">\u53EC\u5524\u6625\u83DC</div>\n\t';
	document.querySelector('body').innerHTML += HTML;
	document.querySelector('.close').onclick = function () {
		document.querySelector('.ukagaka').style.display = 'none';
		document.querySelector('.call').style.display = 'block';
		console.log('点击了');
	};
	document.querySelector('.call').onclick = function () {
		document.querySelector('.ukagaka').style.display = '';
		document.querySelector('.call').style.display = 'none';
	};
};
},{}],4:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _style = require('../static/style.css');

var _style2 = _interopRequireDefault(_style);

var _data = require('../static/data.json');

var _data2 = _interopRequireDefault(_data);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
		var max = _data2.default.data.length - 1;
		var index = Math.round(Math.random() * max);
		var HTML = '<div class="tips">' + _data2.default.data[index].tip + '<i class="menu">menu</i></div>\n\t\t\t\t<i class="icon"></i>\n\t\t\t\t<div class="face ' + _data2.default.data[index].face + '"></div>\n\t\t\t\t<i class="close">\xD7</i>';

		document.querySelector('.ukagaka').innerHTML = HTML;
		(0, _close2.default)();
};
},{"../static/style.css":7,"../static/data.json":8,"./close":9}],5:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var offsetX = 0;
	var offsetY = 0;

	var isdrag = false;

	// 鼠标按下事件
	document.querySelector('.face').addEventListener('mousedown', function (e) {
		offsetX = e.pageX - document.querySelector('.ukagaka').offsetLeft;
		offsetY = e.pageY - document.querySelector('.ukagaka').offsetTop;
		isdrag = true;
	});

	// 鼠标移动事件
	document.onmousemove = function (e) {
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		var moveX = 0;
		var moveY = 0;

		if (isdrag === true) {
			moveX = mouseX - offsetX;
			moveY = mouseY - offsetY;

			var pageWidth = document.body.clientWidth;
			var pageHeight = document.documentElement.clientHeight;

			var ukaWidth = document.querySelector('.ukagaka').offsetWidth;
			var ukaHeight = document.querySelector('.ukagaka').offsetHeight;

			var maxX = pageWidth - ukaWidth;
			var maxY = pageHeight - ukaHeight;

			moveX = Math.min(maxX - 10, Math.max(10, moveX));
			moveY = Math.min(maxY - 10, Math.max(10, moveY));

			document.querySelector('.ukagaka').style.left = moveX + 'px';
			document.querySelector('.ukagaka').style.top = moveY + 'px';
		}
	};

	// 鼠标松开事件
	document.onmouseup = function () {
		isdrag = false;
	};
};
},{}],2:[function(require,module,exports) {
'use strict';

var _reset = require('./static/reset.css');

var _reset2 = _interopRequireDefault(_reset);

var _main = require('./component/main');

var _main2 = _interopRequireDefault(_main);

var _drag = require('./component/drag');

var _drag2 = _interopRequireDefault(_drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _main2.default)();
(0, _drag2.default)();
},{"./static/reset.css":3,"./component/main":4,"./component/drag":5}],15:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '62696' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[15,2])
//# sourceMappingURL=/dist/ukagaka.map