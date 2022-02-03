class Monster {
    constructor(img) {
        this.width = 60;
        this.height = 40;
        this.dir = height/2;
        this.img = img;

    }

    show() {
        if(this.dir < 0) this.dir = 0;
        if(this.dir > width - this.spaceWidth) this.dir = width - this.spaceWidth;
        image(this.img, this.dir, height - this.spaceHeight, this.spaceWidth, this.spaceHeight);
    }
}