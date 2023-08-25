
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const millisecondsEl = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

//      Eventos

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);
// -------------------------------------------------------

//      Funções

function startTimer() {

    interval = setInterval(() => {
        // Isso vai funcionar como um loop
        if (!isPaused) {
            milliseconds += 10
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            // mais uma checagem 
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            minutesEl.textContent = formatTimer(minutes);
            secondsEl.textContent = formatTimer(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
}

//      Botões

// Nessa função o relogio pausa

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

// -----------------------------------------------

// Formatações dos numeros

// essa funão formata para que caso o numero for menor que 10 o zero apareça na esquerda dos minutos ou segundos
function formatTimer(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}