class Spaceship {
    constructor(img) {
        this.spaceWidth = 70;
        this.spaceHeight = 40;
        this.dir = height/2;
        this.img = img;

    }

    show() {
        if (keyIsDown(LEFT_ARROW)) this.dir -= 5;
        if (keyIsDown(RIGHT_ARROW)) this.dir += 5; 
        if(this.dir < 0) this.dir = 0;
        if(this.dir > width - this.spaceWidth) this.dir = width - this.spaceWidth;
        image(this.img, this.dir, height - this.spaceHeight, this.spaceWidth, this.spaceHeight);
    }
}