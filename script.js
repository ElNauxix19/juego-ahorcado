function initGame(){
    
    const game = document.getElementById('game');
    const mainMenu = document.getElementById('mainMenu');

    mainMenu.style = "display: none;";
    game.style = "display: flex;";
    
    document.addEventListener('keydown', () => {
    if(ahorcadoEstado < "5"){
        const key = String.fromCharCode(event.keyCode);
        const word = ["T","E","S","T"];
        const isIn = word.includes(key);
        if(isIn == false){
        error();
        }else if (isIn == true){
            console.log('setensa');
        }
    }else if (ahorcadoEstado >= "5"){
        gameOver();
    }
});
    const $time = document.getElementById('time');
    var time = 0;
    time += 1;
    $time.innerHTML = time;
}

function gameOver(){
    const game = document.getElementById('game');
    const gameOver = document.getElementById('gameOver');
    const wordP = document.getElementById('thewordwas');
    const word = ["T","E","S","T"];

    wordP.innerHTML = "La palabra era: " + word;
    game.style = "display: none;";
    gameOver.style = "display: flex;";
}

// Obtener el canvas y el contexto de dibujo
const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');

// Inicializar el estado del ahorcado
let ahorcadoEstado = 0;

// Funciones para dibujar cada parte del cuerpo
function dibujarCabeza() {
    ctx.beginPath();
    ctx.arc(100, 40, 10, 0, Math.PI * 2);
    ctx.stroke();
}

function dibujarCuerpo() {
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(100, 100);
    ctx.stroke();
}

function dibujarBrazoIzquierdo() {
    ctx.beginPath();
    ctx.moveTo(100, 60);
    ctx.lineTo(80, 80);
    ctx.stroke();
}

function dibujarBrazoDerecho() {
    ctx.beginPath();
    ctx.moveTo(100, 60);
    ctx.lineTo(120, 80);
    ctx.stroke();
}

function dibujarPiernaIzquierda() {
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(80, 130);
    ctx.stroke();
}

function dibujarPiernaDerecha() {
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(120, 130);
    ctx.stroke();
}

// Función para dibujar el ahorcado según el estado
function dibujarAhorcado(estado) {
    if (estado >= 1) dibujarCabeza();
    if (estado >= 2) dibujarCuerpo();
    if (estado >= 3) dibujarBrazoIzquierdo();
    if (estado >= 4) dibujarBrazoDerecho();
    if (estado >= 5) dibujarPiernaIzquierda();
    if (estado >= 6) dibujarPiernaDerecha();
}

// Función que se llama cuando el jugador adivina incorrectamente
function error() {
    ahorcadoEstado += 1;
    dibujarAhorcado(ahorcadoEstado);
}