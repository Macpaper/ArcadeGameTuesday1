import Bullet from "./Bullet.js"

export default class Player {
    constructor(GameObject) {
        this.game = GameObject;
        this.x = 500;
        this.y = 400;
        this.width = 50;
        this.height = 50;
        this.keyMap = new Map();

        this.bullet_timer = Date.now(); // 1713812387150102
        this.initUserInput();
    }
    update() {
        // Movement/checking user input
        if (this.keyMap.get('d')) {
            this.x += 5;
        }
        if (this.keyMap.get('w')) {
            this.y -= 5;
        }
        if (this.keyMap.get('a')) {
            this.x -= 5;
        }
        if (this.keyMap.get('s')) {
            this.y += 5;
        }
        if (this.keyMap.get(' ')) {
            if (Date.now() - this.bullet_timer > 100) {
                let bullet = new Bullet(this.game, this.x, this.y);
                // get reference to game, add bullet object to bullet_list 
                this.game.bullet_list.push(bullet);
                this.bullet_timer = Date.now();
            }
        }

        // Boundaries - play can't escape screen
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x > this.game.G_WIDTH - this.width) {
            this.x = this.game.G_WIDTH - this.width;
        }
        if (this.y > this.game.G_HEIGHT - this.height) {
            this.y = this.game.G_HEIGHT - this.height;
        }
    }
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    initUserInput() {
        let p = this;
        document.addEventListener("keydown", function(e) {
            p.keyMap.set(e.key.toLowerCase(), true);
        });
        document.addEventListener("keyup", function(e) {
            p.keyMap.set(e.key.toLowerCase(), false);
        });
    }
}