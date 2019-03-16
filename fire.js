function Fire(x, y) {
  this.y = x;
  this.x = y;
 // this.r = 10;
  this.toExplode = false;

  this.show = function() {
    image(imgFire, this.x, this.y, imgFire.width/4, imgFire.height/4);
  }

  this.explode = function() {
  	this.toExplode = true;
  }

  this.hits = function(book) {
  	let d = dist(this.x, this.y, book.x, book.y);
  	if( d < this.r + book.r) {
  		return true;
  	} else {
  		return false;
  	}
  }

  this.move = function() {
  	this.x += 20;
  }
}