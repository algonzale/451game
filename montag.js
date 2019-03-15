function Montag() {
  this.y = height/2;


  this.show = function() {
    image(imgMontag, 0, this.y, imgMontag.width/2, imgMontag.height/2);
  }

  this.move = function(dir) {
    this.y += dir;
  }
}