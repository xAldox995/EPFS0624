// Funzione per stampare il timer

const formartTime = function (seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}: ${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

/*const updateTimer = function () {
    const startTime = sessionStorage.getItem('startTime');
    if (startTime) {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);
        document.getElementById("timerDisplay").innerText = elapsedTime;
    }
}

sessionStorage.setItem('starTime', Date.now());

setInterval(updateTimer, 1000);

updateTimer();*/

const updateTimerDisplay = function() {
    const startTime = parseInt(sessionStorage.getItem('startTime'), 10);
    const currentTime = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTime - startTime;
    document.getElementById('timerDislay').innerText = formartTime(elapsedTime);
}

const resetTimer = function () {
    const startTime = Math.floor(Date.now() / 1000);
    sessionStorage.setItem('startTime', startTime);
    updateTimerDisplay();
}

if (!sessionStorage.getItem('startTime')) {
    resetTimer();
}

setInterval(updateTimerDisplay, 1000);

window.addEventListener('load', resetTimer);