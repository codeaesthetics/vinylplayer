var img;  
var song;

function preload() {
  song = loadSound('track2.mp3');

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  img = loadImage('record.png');
  imageMode(CENTER);
      song.play();


}

function draw() {
  
        //Audio Speed
    var sp =map(mouseX,0,width,-1,1);
    song.rate(sp);
    
    var spin = map(mouseX,0,windowWidth,-.05,.05);
    background(255);
    translate(width*.5,height*.5);
    rotate(frameCount*spin);
    image(img, width *.001,height*.001,400,400);
  

}

function windowResized(){
      createCanvas(windowWidth,windowHeight);

}

