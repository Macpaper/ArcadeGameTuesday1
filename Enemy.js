export default class Enemy {
    constructor(GameObject, x = 0, y = 0) {
        this.game = GameObject;
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = "red";
        this.dx = Math.random() * 20 - 10; // random [-10, 10]
        this.dy = Math.random() * 20 - 10; // 
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Add Boundaries for enemies here so they can't escape screen
        if (this.x < 0 || this.x > this.game.G_WIDTH) {
            this.dx *= -1;
        } 
        if (this.y < 0 || this.y > this.game.G_HEIGHT) {
            this.dy *= -1;
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // eyeballs
        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+this.width - 10, this.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x + 10, this.y + 10, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+this.width - 10, this.y + 10, 5, 0, Math.PI * 2);
        ctx.fill();

        // mouth
        ctx.fillRect(this.x + 10, this.y + this.height/2, 20, 5);
    }
}