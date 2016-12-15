/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// 秒數轉換為時間格式
	function ttt(s, n) {
	  var t = '' + s;
	  while (t.length < n) {
	    t = '0' + t;
	  }
	  return t;
	}

	// 秒數轉換時間格式
	function secToTime(sec) {
	  var seconds = Math.floor(sec % 60).toString();
	  var minutes = Math.floor(sec / 60 % 60).toString();
	  var hours = parseInt(sec / 3600, 10).toString();
	  var showTime = ttt(hours, 2) + ':' + ttt(minutes, 2) + ':' + ttt(seconds, 2);
	  return showTime;
	}

	var btnStart = document.getElementById('btn_start');

	var btnStop = document.getElementById('btn_stop');

	var btnReset = document.getElementById('btn_reset');

	var el = document.getElementById('timer');

	var timer = void 0;

	// 倒數秒數
	var timeout = 300;

	var count = timeout;

	// 顯示秒數
	function updateText() {
	  el.innerHTML = secToTime(count);
	}

	// 按鈕事件
	btnStart.addEventListener('click', function () {
	  clearInterval(timer);
	  timer = setInterval(function () {
	    count--;
	    updateText();
	  }, 1000);
	});

	btnStop.addEventListener('click', function () {
	  if (timer) {
	    clearInterval(timer);
	  }
	});

	btnReset.addEventListener('click', function () {
	  // clearInterval(timer);
	  count = timeout;
	  updateText();
	});

	// 顯示初始秒數
	updateText();

/***/ }
/******/ ]);