
var r = 128;
var g = 127.5;
var b = 127;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
   r=map(mouseX,mouseY,10,4,165);
   g=map(mouseX,mouseY,15,6,230);
   b=map(mouseX,mouseY,37,34,145);
   background(r,g,b);
   ellipse(mouseX,mouseY,50,50);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}