
function setup(){
  createCanvas(600, 400);

}

function draw(){
  
  fill(mouseY, mouseX);
noStroke();
ellipse(mouseX,mouseY,15,15);

  
  //background(51);


textSize(24);
textFont("Tahoma")
fill(150)
text("One must have a mind of winter", 10, 30);
fill(200);
text("To regard the frost and the boughs", 10, 60);
fill(250);
text("Of the pine-trees crusted with snow", 10, 90);

//ground
fill(250)
rect(0,250,600,50);

//bottom
fill(500,500,500,500);
noStroke();
ellipse(200,230,50,50);

//middle
fill(500,500,500,500);
noStroke();
ellipse(200,201,35,35);

//head
fill(500,500,500,500);
noStroke();
ellipse(200,179,20,20);

//lefteye
fill(50,50,50,50);
noStroke();
ellipse(198,179,2,2);

//righteye
fill(50,50,50,50);
noStroke();
ellipse(202,179,2,2);

//carrot
fill('orange');
triangle(197,182,200,190,203,182);

//topbutton
fill(50,50,50,50);
noStroke();
ellipse(200,201,2,2);

//middlebutton
fill(50,50,50,50);
noStroke();
ellipse(200,204,2,2);

//bottombutton
fill(50,50,50,50);
noStroke();
ellipse(200,207,2,2);




}