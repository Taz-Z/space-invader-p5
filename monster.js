class Monster {
    constructor(img, offset) {
        this.width = 60;
        this.height = 40;
        this.y = 10;
        this.dir = height - this.width - offset;
        this.img = img;
        this.forward = true;

    }

    show() {
        if(this.dir < 0) {
            this.forward = true;
            this.y += this.height;
        }
        if(this.dir >= width - this.width) {
            this.forward = false;
            this.y += this.height;
        }

        this.dir += this.forward ? 5 : -5;
        image(this.img, this.dir, this.y, this.width, this.height);
    }
}