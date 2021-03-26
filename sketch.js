var hr ;
var min;
var sec;

function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  
  var hr = hour();
var min = minute();
var sec = second();

translate(200,200)
rotate (-90);
 
  strokeWeight(8);
  stroke("red");
  noFill();
  var secAngle = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secAngle);
  
  stroke("green");
  var minAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);
  
  stroke("blue");
  var hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);
  
  push();
  rotate(secAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(minAngle);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  }