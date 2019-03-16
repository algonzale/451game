function Book(x, y) {
  this.y = x;
  this.x = y;
  this.r = 10;
  this.xdir = 0;
  this.ydir = 1;

  this.burn = function() {
  	this.r = 0;
  }

  this.setYdir = function(numOfBooks) {
    this.ydir = -0.245*(numOfBooks - 1)**2 + 12;
    console.log(this.ydir);
  }

  this.shiftLeft = function() {
  	this.ydir *= -1;
  	this.x -= this.r;
  }

  this.move = function() {
  	this.y += this.ydir;
  }

  this.show = function() {
    image(imgBook, this.x, this.y, imgBook.width/50, imgBook.height/50);
  }
}