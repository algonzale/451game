var montag;
let imgMontag;
let imgFire;
let imgBook;
var books = [];
var fires = [];

function preload() {
  imgMontag = loadImage('./images/montag.png');
  imgFire = loadImage('./images/fire.png');
  imgBook = loadImage('./images/book.png');
}

function setup() {
  let cWidth = screen.width-50;
  let cHeight = screen.height-200;
  createCanvas(cWidth, cHeight);
  montag = new Montag();
  for (let i = 0; i < 8; i++) {
  	books[i] = new Book(i*65+65, width-40);
  }
}
function draw() {
  background(192);
  montag.show();
  montag.move();
  for (let i = 0; i < fires.length; i++) {
  	fires[i].show();
  	fires[i].move();
    for (let j = 0; j < books.length; j++) {
      if(fires[i].hits(books[j])) {
        books.splice(j, 1)
        fires[i].explode();
        for (let o = 0; o < books.length; o++) {
          books[o].setYdir(books.length);
        }
        if (books.length === 0) {
          finalize();
        }
      }
    }
  }

  function finalize() {
    let body = document.getElementsByTagName('body')[0];
    let gameCanvas = document.getElementById('defaultCanvas0');
    gameCanvas.remove();
    let wonMssg = document.createElement('h1');
    wonMssg.className = "mssg";
    wonMssg.innerHTML = 'You won!';
    body.appendChild(wonMssg);
  }

  var edge = false;
  for (let i = 0; i < books.length; i++) {
  	books[i].show();
    books[i].move();
    if(books[i].y > height || books[i].y < 0) {
      edge = true;
    }
  }

  if(edge) {
    for (let i = 0; i < books.length; i++) {
      books[i].shiftLeft();
    }
  }

  for (let i = fires.length-1; i >= 0; i--) {
    if(fires[i].toExplode) {
      fires.splice(i, 1);
    }
  }
}

function keyReleased() {
  if(key != ' ') {
   montag.setDir(0);   
 }
}


function keyPressed() {
  if (key === ' '){
    let fire = new Fire(montag.y, 10);
    fires.push(fire);
  }else if(keyCode === UP_ARROW) {
    montag.setDir(-5);
  }else if(keyCode === DOWN_ARROW) {
    montag.setDir(5);
  }
}