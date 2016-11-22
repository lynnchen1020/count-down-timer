var startTime = 5*60000+1000;
var duration = startTime;

function Timer() {

    duration = duration - 1000;

    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;
}

// show start time
Timer();

// reset start time
function resetTimer() {
  duration = startTime;
  stopTimer();
  Timer();
};

// start count down
function startTimer() {
  stopTimer();
  timer = setInterval(Timer, 1000);
};

// pause count down
function stopTimer() {
  clearInterval(timer);
};
