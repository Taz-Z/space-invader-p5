const SPACEBAR = 32;
let spaceshipImg;
let monsterImg;
let spaceship;
let bullets = [];
let monsters = [];
const monsterSpacing = 60;
function preload() {
  spaceshipImg = loadImage("./spaceship.png");
  monsterImg = loadImage("./monster.png");
}
function setup() {
  createCanvas(500, 500);
  frameRate(30);
  spaceship = new Spaceship(spaceshipImg);
  monsters.push(new Monster(monsterImg, monsterSpacing))
}

function keyPressed () {
  if(keyCode === SPACEBAR) {
    bullets.push(new Bullet(spaceship.dir + spaceship.spaceWidth/2,height - spaceship.spaceHeight, 20))
  }
}


function draw() {
  // if(!(frameCount % 60)) {
  //   for(i = 0; i < 5; i++) {
  //     monsters.push(new Monster(monsterImg, i * monsterSpacing))
  //   }
  // }
  background(0);
  noStroke();
  monsters.forEach(m => m.show());

  bullets.forEach(b => b.show());
  spaceship.show();
}
