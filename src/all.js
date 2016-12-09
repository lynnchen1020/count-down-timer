
  //倒數5分鐘
  let timeout = 5 * 60 * 1000;

  let temp = timeout;

  let btn_start = document.getElementById('btn_start');

  let btn_stop = document.getElementById('btn_stop');

  let btn_reset = document.getElementById('btn_reset');

  let el = document.getElementById('timer');

  let timer;

  // 顯示秒數
  function updateText () {
      el.innerHTML = msToTime();
      temp = temp - 1000;
  }

  // 秒數轉換時間格式
  function msToTime() {
    let milliseconds = parseInt((temp%1000)/1000)
    let seconds = parseInt((temp/1000)%60)
    let minutes = parseInt((temp/(1000*60))%60)
    let hours = parseInt((temp/(1000*60*60))%24)

    hours = (hours < 10) ? `0${hours}`: `${hours}`;
    minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    let a = `${hours}:${minutes}:${seconds}`;
    return a;
  }

  // 按鈕事件
  btn_start.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(updateText, 1000);
  })

  btn_stop.addEventListener('click', () => {
    if(timer){
      clearInterval(timer);
    }
  })

  btn_reset.addEventListener('click', () => {
    temp = timeout;
    clearInterval(timer);
    updateText();
  })

  // 呼叫顯示秒數
  updateText();
