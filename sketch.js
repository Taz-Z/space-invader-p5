const SPACEBAR = 32;
const MONSTER_SPACING = 60;
const GAME_OVER = "GAME OVER, PRESS ENTER TO RESTART";
let spaceshipImg;
let monsterImg;
let spaceship;
let bullets;
let monster;
let alive;
function preload() {
  spaceshipImg = loadImage("./spaceship.png");
  monsterImg = loadImage("./monster.png");
}
function setup() {
  bullets = [];
  monsters = [];
  alive = true;
  createCanvas(500, 500);
  frameRate(30);
  textSize(width / 24)
  spaceship = new Spaceship(spaceshipImg);
}

function keyPressed() {
  if (keyCode === SPACEBAR) {
    bullets.push(
      new Bullet(spaceship.x + spaceship.width / 2, height - spaceship.height)
    );
  } else if (keyCode === ENTER) {
    setup();
  }
}

function draw() {
  if (!alive) {
    background(0);
    fill("red");
    text(GAME_OVER, 50, 250);
    return;
  }
  if (!(frameCount % 60)) {
    for (i = 0; i < 5; i++) {
      monsters.push(new Monster(monsterImg, i * MONSTER_SPACING));
    }
  }

  bullets = bullets.filter((b) => !b.isOffScreen());
  alive = !monsters.some((m) => m.touchedEnd());

  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = monsters.length - 1; j >= 0; j--) {
      if (isCollision(bullets[i], monsters[j])) {
        monsters.splice(j, 1);
        bullets.splice(i, 1);
      }
    }
  }
  background(0);
  noStroke();

  bullets.forEach((b) => b.show());
  monsters.forEach((m) => m.show());
  spaceship.show();
}

function isCollision(bullet, monster) {
  try {
    return (
      bullet.x < monster.x + bullet.r &&
      bullet.x > monster.x - bullet.r &&
      bullet.y < monster.y + bullet.r &&
      bullet.y > monster.y - bullet.r
    );
  } catch (e) {
    return false;
  }
}
