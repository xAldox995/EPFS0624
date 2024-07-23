// Funzione per ottenere il tempo trascorso dal sessionStorage
function getTime() {
    return parseInt(sessionStorage.getItem('time')) || 0;
}

// Funzione per salvare il tempo trascorso nel sessionStorage
function saveTime(time) {
    sessionStorage.setItem('time', time);
}

// Inizializzare il timer
let time = getTime();
document.getElementById('timer').innerText = time;

// Funzione per aggiornare il timer
function updateTimer() {
    time++;
    document.getElementById('timer').innerText = time;
    saveTime(time);
}

// Impostare l'interval per aggiornare il timer ogni secondo
setInterval(updateTimer, 1000);
