var circle1 = {X:0, y:0, radius:0};
var dir = {y: 10, x: 10};
var speed = 5;

function setup() {
  createCanvas(1500, 500);
  circle1.radius = 10;
  circle1.y = height/2;
  circle1.x = circle1.radius;
  dir.y = speed;
  dir.x = speed;
  frameRate(60);
}

function draw() {
  background(0);

  fill(255, 0, 0, 100);
  noStroke();

  ellipse(circle1.x, circle1.y, circle1.radius*2, circle1.radius*2);

  // Movement x
  if((circle1.x + circle1.radius) >= width){
    dir.x = -speed;
  }else if((circle1.x - circle1.radius) <= 0){
    dir.x = speed;
  }

  // Movement y
  if((circle1.y + circle1.radius) >= height){
    dir.y = -speed;
  }else if((circle1.y - circle1.radius) <= 0){
    dir.y = speed;
  }

  // Update location
  circle1.y += dir.y;
  circle1.x += dir.x;
}
