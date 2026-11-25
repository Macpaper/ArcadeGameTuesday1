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
        let temp_enemy_list = [];
        for (let e of this.enemy_list) {
            if (!e.dead) {
                temp_enemy_list.push(e);
            }
        }
        this.enemy_list = temp_enemy_list;

        this.player1.update();
        // update all enemies here
        for (let i = 0; i < this.enemy_list.length; i++) {
            this.enemy_list[i].update();
        }
        for (let i = 0; i < this.bullet_list.length; i++) {
            this.bullet_list[i].update();
        }

        // Collision between Enemy and Bullet
        for (let e of this.enemy_list) {
            for (let b of this.bullet_list) {
                if (this.circleRect(b.x, b.y, b.radius, e.x, e.y, e.width, e.height)) {
                    e.dead = true;
                }
            }
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
    // Return true if collision. False if none.
    circleRect(cx, cy, radius, rx, ry, rw, rh) {
        let testX = cx;
        let testY = cy;

        if (cx < rx) testX = rx;
        else if (cx > rx + rw) testX = rx + rw;
        if (cy < ry) testY = ry;
        else if (cy > ry + rh) testY = ry + rh;

        let distX = cx - testX;
        let distY = cy - testY;

        let distance = Math.sqrt((distX * distX) + (distY * distY))

        return distance <= radius;
    }
    spawnWave() {
        for (let i = 0; i < 10; i++) {
            let xr = Math.random() * 500;
            let yr = Math.random() * 500;
            let e1 = new Enemy(this, xr, yr);
            this.enemy_list.push(e1);
        }
    }
}