//declare the variables by let
//let triangle;
let myImage;
let song;
let dot;
let qt = 1000;
let dots = [];



// is used to handle asynchronous loading of external files in a blocking way
 function preload() {
    //define the location of image and sound file
  myImage = loadImage('./assets/David.png');
  song = loadSound('./assetsmusic/Ruska.mp3');
  
}

function setup() {

  createCanvas(800, 640);
//for creates a loop that is useful for executing one section of code multiple times
  for (let i = 0; i < qt; i++) {
    dots[i] = new Dot(i);
  }

}

//song.play();



function draw() {
  background(255);
  
  for (let i = 0; i < qt; i++) {
    dots[i].show();
  }



  noStroke();
  fill("purple");
  quad(600, 500, 520, 600, 250, 550, 190, 360);


  fill("purple");
  ellipse(410, 260, 280, 360);


  noStroke();
  fill("yellow");
  ellipse(400, 260, 280, 360);

  


  fill("yellow");
  ellipse(195, 220, 75, 190);

  fill("blue");
  ellipse(230, 280, 70, 90);

  
  fill("red");
   triangle(206, 260, 240, 290, 200, 300);


  fill("blue");
  quad(350, 60, 260, 180, 200, 240, 250, 180);


   
  fill("red");
  quad(350, 60, 250, 90, 200, 240, 250, 180);


  image(myImage, 10, 10, 650, 650);

  textSize(20);
  textStyle(BOLD);
  fill("purple");
  text("IF YOU WANT TO HEAR SOMETHING", 442, 592);

  textSize(20);
  textStyle(BOLD);
  fill("yellow");
  text("IF YOU WANT TO HEAR SOMETHING", 440, 590);


  textSize(40);
  textStyle(BOLD);
  fill("blue");
  text("CLICK!", 660, 620);

  textSize(40);
  textStyle(BOLD);
  fill("red");
  text("CLICK!", 665, 620);



}

//A class defines how an object should be created,
// what information it holds and what methods it has
class Dot {
  constructor(i) {
    this.x = width / 3 + cos(i) * i;
    this.y = height / 3 + sin(i) * i;
    this.sz = 0;

    this.t = 0;
    this.speed = 0.05 + (i / 1000);
  }

  show() {
    fill(0);
    noStroke();
    this.sz = map(sin(this.t), -1, 1, 5, 50);
    ellipse(this.x, this.y, this.sz);
    this.t = this.t + this.speed;
  }
}










function mousePressed() {
  if (song.isPlaying()) {
   
    song.stop();
    triangle(255, 0, 0);
  } else {
    song.play();
    triangle(255);
  }
}

