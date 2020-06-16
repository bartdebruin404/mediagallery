// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
(function () {
  // Constructor
  this.Gallery = function () {
    this.mediaGallery = document.getElementById('mediaGallery');
    this.gallery = this.mediaGallery.getElementsByClassName("gallery")[0];
    this.galleryItems = globalGalleryItems;
    this.titleCounter = document.getElementById('mediaGalleryCount');
    this.display = 6;
    this.currentDisplayed = 0;
    this.nrOfCards = Object.keys(this.galleryItems).length;
    this.init();
  };

  Gallery.prototype.init = function () {
    this.createGallery();
    this.handleEvents();
    this.loadCards(this.display);
  };

  Gallery.prototype.createGallery = function () {
    this.loadButton = document.createElement('button');
    this.loadButton.className = 'gallery__load-more button';
    this.loadButton.innerHTML = 'Meer media';
    this.mediaGallery.appendChild(this.loadButton);
    this.titleCounter.innerHTML = Object.keys(this.galleryItems).length;
  };

  Gallery.prototype.handleEvents = function () {
    this.loadButton.addEventListener('click', this.onLoadMoreClick.bind(this));
  };

  Gallery.prototype.onLoadMoreClick = function () {
    this.loadCards(this.display);
  };

  Gallery.prototype.addCard = function (item) {
    this.card = document.createElement('article');
    this.card.className = 'card gallery__item';
    this.card.innerHTML = "\n                    <div class=\"card__media\">\n                      <a\n                        href=\"".concat(item.mediaOriginalFile, "\"\n                        title=\"").concat(item.mediaCaption, "\"\n                        target=\"_blank\"\n                        modal=\"").concat(item.mediaType, "\"\n                      >\n                        <img\n                          alt=\"").concat(item.mediaAlt, "\"\n                          src=\"").concat(item.mediaTabletFile, "\"\n                          srcset=\"").concat(item.mediaMobileFile, " 640w, ").concat(item.mediaTabletFile, " 916w\"\n                          sizes=\" \n                            (min-width: 1366px) 916px, \n                            (min-width: 1536px) 1030px\n                          \"\n                          class=\"img-responsive gallery__image\"\n                        />\n                      </a>\n                    </div>\n                    <div class=\"card__body\">\n                    <p>").concat(item.mediaCaption, "</p>\n                    ").concat(item.mediaData ? "<p>" + item.mediaData + "</p>" : "", "\n                    </div>\n                    <div class=\"card__footer\">\n                      <a href=\"").concat(item.mediaOriginalFile, "\" download=\"groot\" class=\"button-link\" target=\"_blank\"\n                        >").concat(item.linkCaption, "</a\n                      >\n                    </div>\n        ");
    var link = this.card.children[2].children[0];
    link.addEventListener('mouseenter', shootLines);

    function shootLines(e) {
      var itemDim = this.getBoundingClientRect(),
          itemSize = {
        x: itemDim.right - itemDim.left,
        y: itemDim.bottom - itemDim.top
      },
          shapes = ['line', 'zigzag'],
          colors = ['#2FB5F3', '#FF0A47', '#FF0AC2', '#47FF0A'];
      var chosenC = Math.floor(Math.random() * colors.length),
          chosenS = Math.floor(Math.random() * shapes.length); // create shape

      var burst = new mojs.Burst({
        left: itemDim.left + itemSize.x / 2,
        top: itemDim.top + itemSize.y / 2,
        radiusX: itemSize.x,
        radiusY: itemSize.y,
        count: 8,
        children: {
          shape: shapes[chosenS],
          radius: 10,
          scale: {
            0.8: 1
          },
          fill: 'none',
          points: 7,
          stroke: colors[chosenC],
          strokeDasharray: '100%',
          strokeDashoffset: {
            '-100%': '100%'
          },
          duration: 350,
          delay: 100,
          easing: 'quad.out',
          isShowEnd: false
        }
      });
      burst.play();
    }

    this.gallery.appendChild(this.card);
  };

  Gallery.prototype.loadCards = function (nr) {
    if (this.currentDisplayed < this.nrOfCards) {
      var count = this.currentDisplayed + nr;

      for (var display = this.currentDisplayed; display < count; display++) {
        this.currentDisplayed++;
        this.addCard(this.galleryItems[display]);

        if (this.currentDisplayed >= this.nrOfCards) {
          addClass(this.loadButton, 'disabled');
        }
      }
    }
  };
})();

function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

var MediaTypeEnum = {
  IMAGE: 1,
  VIDEO: 2,
  YOUTUBE: 3
};

function hassClass(el, className) {
  return el.classList.contains(className);
  ;
}

function addClass(el, className) {
  el.classList.add(className);
}

function removeClass(el, className) {
  el.classList.remove(className);
}

ready(function () {
  var gallery = new Gallery();
  var modal = new Modal();
});
var globalGalleryItems = [{
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "1. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.VIDEO,
  "mediaOriginalFile": "/img/mov_bbb.mp4",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "2. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "1m34 - 200MB",
  "linkCaption": "Download video"
}, {
  "mediaType": MediaTypeEnum.YOUTUBE,
  "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "3. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "8m56",
  "linkCaption": "Ga naar youtube"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "4. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "5. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.VIDEO,
  "mediaOriginalFile": "/img/mov_bbb.mp4",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "6. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "1m34 - 200MB",
  "linkCaption": "Download video"
}, {
  "mediaType": MediaTypeEnum.YOUTUBE,
  "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "7. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "8m56",
  "linkCaption": "Ga naar youtube"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "8. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "9. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.VIDEO,
  "mediaOriginalFile": "/img/mov_bbb.mp4",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "10. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "1m34 - 200MB",
  "linkCaption": "Download video"
}, {
  "mediaType": MediaTypeEnum.YOUTUBE,
  "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "11. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "8m56",
  "linkCaption": "Ga naar youtube"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "12. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "13. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.VIDEO,
  "mediaOriginalFile": "/img/mov_bbb.mp4",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "14. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "1m34 - 200MB",
  "linkCaption": "Download video"
}, {
  "mediaType": MediaTypeEnum.YOUTUBE,
  "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "15. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "8m56",
  "linkCaption": "Ga naar youtube"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "16. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "17. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.VIDEO,
  "mediaOriginalFile": "/img/mov_bbb.mp4",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "18. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "1m34 - 200MB",
  "linkCaption": "Download video"
}, {
  "mediaType": MediaTypeEnum.YOUTUBE,
  "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "19. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "8m56",
  "linkCaption": "Ga naar youtube"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "20. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "21. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}, {
  "mediaType": MediaTypeEnum.VIDEO,
  "mediaOriginalFile": "/img/mov_bbb.mp4",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "22. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "1m34 - 200MB",
  "linkCaption": "Download video"
}, {
  "mediaType": MediaTypeEnum.YOUTUBE,
  "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "23. Video caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": "8m56",
  "linkCaption": "Ga naar youtube"
}, {
  "mediaType": MediaTypeEnum.IMAGE,
  "mediaOriginalFile": "/img/1920x950.png",
  "mediaMobileFile": "/img/640x300.png",
  "mediaTabletFile": "/img/916x480.png",
  "mediaCaption": "24. Image caption - Lorem ipsum solor sit amet",
  "mediaAlt": "Uitsnede foto",
  "mediaData": undefined,
  "linkCaption": "Download afbeelding"
}];

(function () {
  // Constructor
  this.Modal = function () {
    this.docFrag = document.createDocumentFragment();
    this.triggers = document.querySelectorAll('[modal]');
    this.init();
  };

  Modal.prototype.init = function () {
    this.createModal();
    this.handleEvents();
  };

  Modal.prototype.createModal = function () {
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.content = document.createElement('div');
    this.content.className = 'modal__content';
    this.modal.appendChild(this.content);
    this.inner = document.createElement('div');
    this.inner.className = 'modal__content__inner';
    this.content.appendChild(this.inner);
    this.closeButton = document.createElement('button');
    this.closeButton.className = 'modal__close button';
    this.closeButton.innerHTML = '&times;';
    this.inner.appendChild(this.closeButton);
    this.media = document.createElement('div');
    this.media.className = 'modal__media';
    this.media.innerHTML = '';
    this.inner.appendChild(this.media);
    this.caption = document.createElement('div');
    this.caption.className = 'modal__caption';
    this.caption.innerHTML = '';
    this.inner.appendChild(this.caption);
    this.docFrag.appendChild(this.modal);
    document.body.appendChild(this.docFrag);
  };

  Modal.prototype.openModal = function (element) {
    addClass(document.body, 'modal-open');
    var type = parseInt(element.getAttribute('modal'));
    var url = element.getAttribute('href');
    var caption = element.getAttribute('title');
    var media;

    if (type === 1) {
      media = '<img src="' + url + '" alt="" class="img-responsive" />';
    } else if (type === 2) {
      media = '<div class="embed-container"><video width="400" controls autoplay><source src="' + url + '" type="video/mp4">Your browser does not support HTML video.</video></div>';
    } else if (type === 3) {
      media = '<div class="embed-container"><iframe width="1120" height="630" src="' + url + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    } else {
      //window.location = url;
      return false;
    }

    this.media.innerHTML = media;
    this.caption.innerHTML = caption;
  };

  Modal.prototype.closeModal = function () {
    removeClass(document.body, 'modal-open');
    this.media.innerHTML = "";
    this.caption.innerHTML = "";
  };

  Modal.prototype.handleEvents = function () {
    var base = this;
    document.addEventListener('click', function (e) {
      if (e.target && e.target.parentNode.hasAttribute('modal')) {
        e.preventDefault();
        base.onOpenModalClick(e.target.parentNode);
      }
    }, false);
    this.content.addEventListener('click', this.onContentModalClick.bind(this));
    this.closeButton.addEventListener('click', this.onCloseModalClick.bind(this));
  };

  Modal.prototype.onOpenModalClick = function (element) {
    this.openModal(element);
  };

  Modal.prototype.onCloseModalClick = function (event) {
    event.preventDefault();
    this.closeModal();
  };

  Modal.prototype.onContentModalClick = function (event) {
    event.preventDefault();
    if (this.content === event.target) this.closeModal();
  };
})();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57795" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
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
        parents.push(k);
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map