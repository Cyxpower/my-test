(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),
/* 2 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__655A50B",
    appName: "陈彦欣的第一个自主应用",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.95",
    uniRuntimeVersion: "3.95",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__655A50B",
      appName: "陈彦欣的第一个自主应用",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"陈彦欣的第一个自主应用","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 23 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"陈彦欣的第一个自主应用","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"陈彦欣的第一个自主应用","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"陈彦欣的第一个自主应用","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"陈彦欣的第一个自主应用","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 26 */
/*!******************************************************************!*\
  !*** C:/Users/FX86FE/Desktop/代码文件/uni-app-test/demo1/pages.json ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/*!******************************************************************************!*\
  !*** C:/Users/FX86FE/Desktop/代码文件/uni-app-test/demo1/static/images/pic1.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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QciAgICAgICAgICAgICAgILMYXuwOJQd2GIRNwOJ7Sg5EBAQEBAQanQEBAQEBAQSBkoOQDAwFXqCsCAgICCQMoLICAgICCwGEEoCAggngggDKCyAgICCpOUEgYQSgIKk5QQgICAgqTlBGcKvUV5qwkcAghAQRkIJVcgkQO7arW+5TYHixN98/wDh8asMxp6eOlhbFE3dY3sQciAgICAgICAgICAgICAgILMYXuwOJQd2GIRNxzJ5lByICAgICAgINToCAgICAgAZQcjW7oVBKtAKQQEBBIGUFkBAQEBBZowglAQEBBUcSgtyQEBAQQThAaEEoCCpOUEICAgIKk5QQThVgVVgHD40BAQQThAAwqBkKYHdtVrkuc2BlsTffP8A4KwzKmpo6SFsUTd1jUHIgICAgICAgICAgICAgICCzGF7sDiUHdhhETccz2lByICAgICAgICDU6AgICAgIORrd0elUEq0QCkEBAQSBlBYDCAgICAgloQWQEBAQQfIgAYQSgICAgq0dqCyAggnCCqAgICCpOUEE4VeoqrAgICCpOUBoQSThUHctVqkuc2B4sTffv8A4fGpiBmdNTR0kLYom7rG9isORAQEBAQEBAQEBAQEBAQEFmML3YHEoO7DEIm4HE9pQciAgICAgICAgINToCAgICC7G44quRZTEApBAQEBBcDCAgICAgkDKCyAgICAgICAgICCMZ+JBKAgIKICAgIIJwgqqCquCAgIKk5QGhAJyqDu2m1SXObA8WJvvn/w+NTEDM6amjpIWxRN3WN7FYciAgICAgICAgICAgICAgILMYXuwOJQd2GIRNxzJ5lByICAgICAgICAgINToCAgILsb2lRkWSIBSCAgICCwGEEoCAgIJAygsgICAgICAgICAgICAgIKk5QQgnkPSghBBOAgqqCpKtAKQQEFScoAGUAnKoO7abVJc5sDxYm++f8Aw+NTAzOmpo6SFsUTd1jexWHIgICAgICAgICAgICAgICCzGF7sDiUHehiETcDie0oLoCAgICAgICAgICDUpkaObgPyoI66P7sIJErDycPzoORg3uPYguqwCsCAgICCzRgIJQEBAQAMoLAYQSgICAgICAgICAgICAggnAQVQSBgZQQgIK5KiRUlIEKQQEFScoIAygneVB3bTapLnNgeLE0+M/+A9KmIGZ01NHSQtiibusb2Kw5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"

/***/ }),
/* 40 */
/*!******************************************************************************!*\
  !*** C:/Users/FX86FE/Desktop/代码文件/uni-app-test/demo1/static/images/pic2.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/pic2.jpg";

/***/ }),
/* 41 */
/*!******************************************************************************!*\
  !*** C:/Users/FX86FE/Desktop/代码文件/uni-app-test/demo1/static/images/pic3.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 42 */
/*!******************************************************************************!*\
  !*** C:/Users/FX86FE/Desktop/代码文件/uni-app-test/demo1/static/images/pic4.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map