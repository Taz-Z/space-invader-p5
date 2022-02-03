class Monster {
  constructor(img, offset) {
    this.width = 60;
    this.height = 40;
    this.y = 10;
    this.x = height - this.width - offset;
    this.img = img;
    this.forward = true;
  }

  show() {
    if (this.x < 0) {
      this.forward = true;
      this.y += this.height;
    }
    if (this.x >= width - this.width) {
      this.forward = false;
      this.y += this.height;
    }

    this.x += this.forward ? 10 : -10;
    image(this.img, this.x, this.y, this.width, this.height);
  }

  touchedEnd() {
    return this.y >= height - this.height;
  }
}
