

  const btnStart = document.getElementById('btn_start');

  const btnStop = document.getElementById('btn_stop');

  const btnReset = document.getElementById('btn_reset');

  const el = document.getElementById('timer');

  let timer;

  // 倒數秒數
  const timeout = 300;

  let temp = timeout;

  // 秒數轉換時間格式
  function msToTime() {

    let seconds = Math.floor(temp % 60).toString();
    let minutes = Math.floor((temp / 60) % 60).toString();
    let hours = parseInt(temp / 3600).toString();

    while (seconds.length < 2) { seconds = `0${seconds}`; }
    while (minutes.length < 2) { minutes = `0${minutes}`; }
    while (hours.length < 2) { hours = `0${hours}`; }

    const showTime = `${hours}:${minutes}:${seconds}`;
    return showTime;
  }

  // 顯示秒數
  function updateText() {
    el.innerHTML = msToTime();
  }

  // 按鈕事件
  btnStart.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      temp--;
      updateText();
    }, 1000);
  });
  btnStop.addEventListener('click', () => {
    if (timer) {
      clearInterval(timer);
    }
  });

  btnReset.addEventListener('click', () => {
    temp = timeout;
    clearInterval(timer);
    updateText();
  });

  // 呼叫顯示秒數
  updateText();
