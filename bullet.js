class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
  }

  show() {
    this.y -= 5;
    circle(this.x, this.y, this.r);
  }

  isOffScreen() {
    return this.y < 0;
  }
}
