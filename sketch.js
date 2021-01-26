let snake;
let scl = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(500, 500);
  w = floor(width / scl);
  h = floor(height / scl);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

// setup of the canvas, food location, snake location and framerate

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

// food location set to random

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}

// moving the direction of the snake with up, down, left and right arrows

function draw() {
  scale(scl);
  background(0, 200, 0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  ellipse(food.x, food.y, 1.3, 1.3);
}
