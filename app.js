import Game from "./Game.js";

const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;

const gameObject = new Game(canv.width, canv.height);

function gameLoop() { // every line of code in here runs 60x/second
    gameObject.update();
    gameObject.draw(ctx);
}

// Executes the gameLoop function every 17 milliseconds
setInterval(gameLoop, 17);