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

	var btnStart = document.getElementById('btn_start');

	var btnStop = document.getElementById('btn_stop');

	var btnReset = document.getElementById('btn_reset');

	var el = document.getElementById('timer');

	var timer = void 0;

	// 倒數秒數
	var timeout = 300;

	var temp = timeout;

	// 秒數轉換時間格式
	function msToTime() {

	  var seconds = Math.floor(temp % 60).toString();
	  var minutes = Math.floor(temp / 60 % 60).toString();
	  var hours = parseInt(temp / 3600).toString();

	  while (seconds.length < 2) {
	    seconds = '0' + seconds;
	  }
	  while (minutes.length < 2) {
	    minutes = '0' + minutes;
	  }
	  while (hours.length < 2) {
	    hours = '0' + hours;
	  }

	  var showTime = hours + ':' + minutes + ':' + seconds;
	  return showTime;
	}

	// 顯示秒數
	function updateText() {
	  el.innerHTML = msToTime();
	}

	// 按鈕事件
	btnStart.addEventListener('click', function () {
	  clearInterval(timer);
	  timer = setInterval(function () {
	    temp--;
	    updateText();
	  }, 1000);
	});
	btnStop.addEventListener('click', function () {
	  if (timer) {
	    clearInterval(timer);
	  }
	});

	btnReset.addEventListener('click', function () {
	  temp = timeout;
	  clearInterval(timer);
	  updateText();
	});

	// 呼叫顯示秒數
	updateText();

/***/ }
/******/ ]);