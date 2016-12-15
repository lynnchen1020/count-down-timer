
// 秒數轉換為時間格式
  function ttt(s, n) {
    let t = '' + s;
    while (t.length < n) {
      t = `0${t}`;
    }
    return t;
  }

  // 秒數轉換時間格式
  function secToTime(sec) {
    const seconds = Math.floor(sec % 60).toString();
    const minutes = Math.floor((sec / 60) % 60).toString();
    const hours = parseInt(sec / 3600, 10).toString();
    const showTime = `${ttt(hours, 2)}:${ttt(minutes, 2)}:${ttt(seconds, 2)}`;
    return showTime;
  }


  const btnStart = document.getElementById('btn_start');

  const btnStop = document.getElementById('btn_stop');

  const btnReset = document.getElementById('btn_reset');

  const el = document.getElementById('timer');

  let timer;

  // 倒數秒數
  const timeout = 300;

  let count = timeout;


  // 顯示秒數
  function updateText() {
    el.innerHTML = secToTime(count);
  }

  // 按鈕事件
  btnStart.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      count--;
      updateText();
    }, 1000);
  });

  btnStop.addEventListener('click', () => {
    if (timer) {
      clearInterval(timer);
    }
  });

  btnReset.addEventListener('click', () => {
    // clearInterval(timer);
    count = timeout;
    updateText();
  });

  // 顯示初始秒數
  updateText();
