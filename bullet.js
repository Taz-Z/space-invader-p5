class Bullet {
    constructor(x, y, r) {
        this.x = x;
        this.y = y ;
        this.r = r;

    }

    show() {
        this.y -= 5;
        circle(this.x, this.y, this.r);
    }
}