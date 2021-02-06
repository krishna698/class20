var rec1,rec2
function setup() {
  createCanvas(800,400);
  
  rec1 = createSprite(200,200,50,80)
  rec2 = createSprite(400,200,80,30)
  rec1.shapeColor="red"
  rec2.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  rec2.x = mouseX
  rec2.y = mouseY
  if (rec2.x-rec1.x<rec1.width/2+rec2.width/2
    && rec1.x-rec2.x<rec2.width/2+rec1.width/2
    &&rec2.y-rec1.y<rec1.height/2+rec2.height/2
    &&rec1.y-rec2.y<rec2.height/2+rec1.height/2 )
    {
      rec1.shapeColor="green"
      rec2.shapeColor="green"
    }
    else {rec1.shapeColor="red"
        rec2.shapeColor="blue"}
    
  drawSprites();
}