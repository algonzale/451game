function Book(x, y) {
  this.y = x;
  this.x = y;
  this.r = 10;
  this.xdir = 0;
  this.ydir = 1;

  this.burn = function() {
  	this.r = 0;
  }

  this.shiftLeft = function() {
  	this.ydir *= -1;
  	this.x -= this.r;
  }

  this.move = function() {
  	this.y += this.ydir;
  }

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}