let canvasWidth = 400;
let canvasHeight = 400;
let fillColor = "black"

function setup() {
  createCanvas(canvasWidth, canvasHeight);
 
}

function draw() {
  background((125));
  let n = 0;
  for (let n=0; n<6; n++){
rect(40*n, mouseY, 50, 100); 

}
}
  

