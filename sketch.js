const SPACEBAR = 32;
let spaceshipImg;
let monsterImg;
let spaceship;
let bullets = [];
let monsters = [];
function preload() {
  spaceshipImg = loadImage("./spaceship.png");
  monsterImg = loadImage("./monster.png");
}
function setup() {
  createCanvas(500, 500);
  background(47, 79, 79);
  spaceship = new Spaceship(spaceshipImg);
}

function keyPressed () {
  if(keyCode === SPACEBAR) {
    bullets.push(new Bullet(spaceship.dir + spaceship.spaceWidth/2,height - spaceship.spaceHeight, 20))
  }
}


function draw() {
  background(0);
  noStroke();
  bullets.forEach(b => b.show());
  spaceship.show();
}
