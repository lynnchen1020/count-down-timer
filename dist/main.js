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

	//倒數5分鐘
	var timeout = 5 * 60 * 1000;

	var temp = timeout;

	var btn_start = document.getElementById('btn_start');

	var btn_stop = document.getElementById('btn_stop');

	var btn_reset = document.getElementById('btn_reset');

	var el = document.getElementById('timer');

	var timer = void 0;

	// 顯示秒數
	function updateText() {
	  el.innerHTML = msToTime();
	  temp = temp - 1000;
	}

	// 秒數轉換時間格式
	function msToTime() {
	  var milliseconds = parseInt(temp % 1000 / 1000);
	  var seconds = parseInt(temp / 1000 % 60);
	  var minutes = parseInt(temp / (1000 * 60) % 60);
	  var hours = parseInt(temp / (1000 * 60 * 60) % 24);

	  hours = hours < 10 ? '0' + hours : '' + hours;
	  minutes = minutes < 10 ? '0' + minutes : '' + minutes;
	  seconds = seconds < 10 ? '0' + seconds : '' + seconds;

	  var a = hours + ':' + minutes + ':' + seconds;
	  return a;
	}

	// 按鈕事件
	btn_start.addEventListener('click', function () {
	  clearInterval(timer);
	  timer = setInterval(updateText, 1000);
	});

	btn_stop.addEventListener('click', function () {
	  if (timer) {
	    clearInterval(timer);
	  }
	});

	btn_reset.addEventListener('click', function () {
	  temp = timeout;
	  clearInterval(timer);
	  updateText();
	});

	// 呼叫顯示秒數
	updateText();


/***/ }
/******/ ]);