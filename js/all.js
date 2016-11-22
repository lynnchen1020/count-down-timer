(function () {

  //倒數5分鐘
  var timeout = 5 * 60 * 1000;

  var temp = timeout;

  var btn_start = document.getElementById('btn_start');

  var btn_stop = document.getElementById('btn_stop');

  var btn_reset = document.getElementById('btn_reset');

  // 顯示秒數
  function updateText () {
      el = document.getElementById('timer');
      el.innerHTML = msToTime();
      temp = temp - 1000;
  }

  // 秒數轉換時間格式
  function msToTime() {
    var milliseconds = parseInt((temp%1000)/1000)
        , seconds = parseInt((temp/1000)%60)
        , minutes = parseInt((temp/(1000*60))%60)
        , hours = parseInt((temp/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var a = hours + ":" + minutes + ":" + seconds;
    return a;
  }

  // 按鈕事件
  btn_start.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval(updateText, 1000);
  })

  btn_stop.addEventListener('click', function () {
    if(timer){
      clearInterval(timer);
    }
  })

  btn_reset.addEventListener('click', function () {
    temp = timeout;
    clearInterval(timer);
    updateText();
  })
  
  // 呼叫顯示秒數
  updateText();
})();
