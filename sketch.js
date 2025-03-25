function setup() {
    createCanvas(400, 400);
  }
  let eyeX;
  let eyeY;
  
  function draw() {
    background("#FF5722");
    fill("#03A9F4");
    circle(200, 200, 300); 
    fill("white");
    circle(150, 150, 60); 
    circle(250, 150, 60); 
    line(150, 270, 250, 235); 
    fill("#3F51B5");
    triangle(200, 180, 170, 220, 220, 220); 
    line(123, 115, 178, 113); 
    line(225, 116, 279, 106); 

  
    eyeX = map(mouseX, 0, 400, 130, 170);
    eyeY = map(mouseY, 0, 400, 130, 170);
  
    circle(eyeX, eyeY, 10); 
    circle(eyeX + 100, eyeY, 10); 
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  