class Spaceship {
  constructor(img) {
    this.width = 70;
    this.height = 40;
    this.x = height / 2 - this.width/2;
    this.y = height - this.height;
    this.img = img;
  }

  show() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (this.x < 0) this.x = 0;
    if (this.x > width - this.width) this.x = width - this.width;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
