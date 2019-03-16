function Montag() {
  this.y = height/2;
  this.ydir = 0;


  this.show = function() {
    image(imgMontag, 0, this.y, imgMontag.width/4, imgMontag.height/4);
  }

  this.setDir = function(dir) {
  	this.ydir = dir;
  }

  this.move = function(dir) {
    this.y += this.ydir;
  }
}