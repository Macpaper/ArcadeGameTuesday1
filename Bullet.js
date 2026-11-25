export default class Bullet {
    constructor(GameObject, x, y, mx, my) {
        this.game = GameObject;
        this.x = x;
        this.y = y;

        let [dx, dy] = this.calculateVelocity(x, y, mx, my);

        this.dx = dx;
        this.dy = dy;
        this.radius = 10;
        this.color = "yellow";
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    // will return [dx, dy]
    calculateVelocity(px, py, mx, my) {
        let dx = 0, dy = 0;
        let speed = 15;
        let xDist = px - mx;
        let yDist = py - my;
        let theta = Math.atan2(yDist, xDist) + Math.PI; 

        dx = speed * Math.cos(theta);
        dy = speed * Math.sin(theta);

        return [dx, dy];
    }
}