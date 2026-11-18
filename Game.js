import Player from "./Player.js";
import Enemy from "./Enemy.js";

export default class Game {
    constructor(width, height) { // function that runs once when a Game object is created
        this.G_WIDTH = width;
        this.G_HEIGHT = height;

        this.player1 = new Player(this);

        this.enemy_list = [];
        this.bullet_list = [];
        this.spawnWave();
    }
    // logical updates - movement, interactions, etc
    update() {
        this.player1.update();
        // update all enemies here
        for (let i = 0; i < this.enemy_list.length; i++) {
            this.enemy_list[i].update();
        }
        for (let i = 0; i < this.bullet_list.length; i++) {
            this.bullet_list[i].update();
        }
    }
    // anything related to graphics/drawing
    draw(ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, this.G_WIDTH, this.G_HEIGHT);

        this.player1.draw(ctx);
        // draw all enemies here
        for (let i = 0; i < this.enemy_list.length; i++) {
            this.enemy_list[i].draw(ctx);
        }
        for (let i = 0; i < this.bullet_list.length; i++) {
            this.bullet_list[i].draw(ctx);
        }

    }
    spawnWave() {
        for (let i = 0; i < 100; i++) {
            let xr = Math.random() * 500;
            let yr = Math.random() * 500;
            let e1 = new Enemy(this, xr, yr);
            this.enemy_list.push(e1);
        }
    }
}