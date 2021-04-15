
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


var g1;
var particles1 = [];
var plinko1 = [];
var division1 = [];
var divisionheight=300;

function setup() {
  createCanvas(485,650);
  engine = Engine.create();
  world = engine.world;
  g1 = new ground(windowWidth/2,642,windowWidth,15);
  Engine.run(engine);
}

function draw() {
  background("black");  
 console.log(mouseX+" "+mouseY)
 console.log(frameCount)
 
 for (var k = 0 ; k <= width; k = k +80){

division1.push(new division(k,height-divisionheight/2,10,divisionheight))

 }
 
for (var j = 40; j <= width;j=j+50){

plinko1.push(new plinko(j,75,30));

}

for (var j = 15; j <= width-10;j=j+50){

  plinko1.push(new plinko(j,175,30));
  
  }

  if (frameCount%60 === 0 ){

particles1.push(new particles(width/2-10,width/2+10),10,10)

 
  }

  for (var j = 0; j <particles1.length;j++){

    particles1[j].display();
    
      }


  for (var k = 0; k <division1.length;k++){

    division1[k].display();
    
      }
      
      for (var a = 0; a <plinko1.length;a++){

        plinko1[a].display();
        
          }

 rectMode(CENTER);
 Engine.update(engine);
 drawSprites();
  g1.display();
}