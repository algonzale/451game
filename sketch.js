var montag;
let imgMontag;

function preload() {
  imgMontag = loadImage('./images/montag.png');
}

function setup() {
  let cWidth = screen.width-50;
  let cHeight = screen.height-200;
  createCanvas(cWidth, cHeight);
  montag = new Montag();
}

function draw() {
  background(51);
  montag.show();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    montag.move(10);
  }else if(keyCode === DOWN_ARROW) {
    montag.move(-10);
  }
}