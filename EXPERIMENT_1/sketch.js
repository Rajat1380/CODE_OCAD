let img = [];
let imgx = 450;
let imgy = 850;
let randImage = 0;
let threshold = 1;
let button;
let value = 0
let red = 0;
let green = 0;
let blue = 0;

function preload() {
  /*for (let i = 1; i < 21; i++) {
    img[i] = loadImage('images/c' + i + '.png');*/

  img[0] = loadImage('images/land.png');
  img[1] = loadImage('images/c1.png');
  img[2] = loadImage('images/c2.png');
  img[3] = loadImage('images/c3.png');
  img[4] = loadImage('images/c4.png');
  img[5] = loadImage('images/c5.png');
  img[6] = loadImage('images/c6.png');
  img[7] = loadImage('images/c7.png');
  img[8] = loadImage('images/c8.png');
  img[9] = loadImage('images/c9.png');
  img[10] = loadImage('images/c10.png');
  img[11] = loadImage('images/c11.png');
  img[12] = loadImage('images/c12.png');
  img[13] = loadImage('images/c13.png');
  img[14] = loadImage('images/c14.png');
  img[15] = loadImage('images/c15.png');
  img[16] = loadImage('images/c16.png');
  img[17] = loadImage('images/c17.png');
  img[18] = loadImage('images/c18.png');
  img[19] = loadImage('images/c19.png');
  img[20] = loadImage('images/c20.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(threshold);
  imageMode(CENTER);
  frameRate(0.75);
  // button = createButton('click me');
  // button.position(width / 2, height / 2 + 220);
  // button.mousePressed(deviceMoved);

}


function draw() {
  background(red, green, blue);

  // textSize(60);
  image(img[randImage], imgx / 2 - 30, imgy / 2 - 70, 450 / 1.35, 850 / 1.35);
  // text(randImage, 250, 200);

}

// function mouseClicked() {
  
//   rand = rand+1;
//   // randImage = int(random(1, 21));
//   red = random(255);
//   green = random(255);
//   blue = random(255);
// }
// function touchStarted() {  
//   randImage= randImage +1;
  
//    if(randImage > 1)
//   {
//   image(img[randImage], imgx / 2 - 30, imgy / 2 - 50, 450 / 1.35, 850 / 1.35);
//     randImage = int(random(1,20)) 
//   }
//   // touchcount = touchcount + 1 ;
//   // red = random(255);
//   // green = random(255);
//   // blue = random(255);
// }


function deviceMoved() {
  threshold = threshold + 1;

  if (threshold == 255) {
    randImage = int(random(1, 21));

  }
    red = random(255);
    green = random(255);
    blue = random(255);
  setShakeThreshold(threshold);

}

