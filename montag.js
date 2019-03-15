function Montag() {
  this.y = height/2;


  this.show = function() {
    image(imgMontag, this.y, 0, imgMontag.width/4, imgMontag.height/4);
  }

  this.move = function(dir) {
    this.y += dir;
  }
}