export default class Bullet {
    constructor(GameObject, x, y) {
        this.game = GameObject;
        this.x = x;
        this.y = y;
        this.dx = 10;
        this.dy = 0;
        this.width = 20;
        this.height = 10;
        this.color = "yellow";
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}