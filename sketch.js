var shooter;
var balls = [];
var num_of_balls = 10;

class Parti {
constructor (_pos,  _size, _vel, _acc, _i) {
  this.pos = _pos;
  this.size = _size;
  this.vel = _vel;
  this.acc = _acc;
  this.i = _i;
  }
  
show() {
  fill(255,0,0, 30);
  strokeWeight(2);
  circle(this.pos.x, this.pos.y, this.size);
}

movement() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  // this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));  
}

init() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  }  

}




class Shooter {
constructor (_pos, _vel, _acc) {
  this.pos = _pos;
  this.vel = _vel;
  this.acc = _acc;
}
  
show() {
    noFill();
    stroke(255);
    strokeWeight(5);
    // triangle(200, 245,this.pos.x, this.pos.y,200, 220);
     triangle(200, 245,225, 225,200, 220);
  }
  
spin() {
  
  this.show(this.pos);
  this.pos.add(this.vel);
  this.vel = (-180, 180)

 
  }
  

}


function setup() {
  createCanvas(450, 450);
  let p = createVector (width/2, height/2);
  let v = createVector (1,0);
  let a = createVector (0,0);
  shooter = new Shooter (p, v, a);
  let partip = createVector (random(width), random (height));
  let partis = random(1, 50);
  let partiv = createVector (random(0,0));
  let partiacc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  parti = new Parti (partip, partis, partiv, partiacc);
  
  
   for (let i = 0; i < num_of_balls; i++) {
    balls.push(new Parti(0, 0, 0, i));
  }
  for (let i = 0; i < num_of_balls; i++) {
    balls[i].init();
  }

}

function draw() {
  background(0);
  shooter.show();
  shooter.spin();
  parti.show();
  parti.movement();
  // parti.number();
  // parti.push();
 
  
}

function mouseMoved() {
shooter.spin();


}