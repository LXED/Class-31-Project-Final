const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var lightning, lightning1,lightning2,lightning3,lightning4;

var engine, world;
var raindrop = [];
var umbrel;
var maxDrops = 100;
var rand;

var thunderCreatedFrame=0;

function preload(){
    lightning1 = loadImage("1.png");
    lightning2 = loadImage("2.png");
    lightning3 = loadImage("3.png");
    lightning4 = loadImage("4.png");
}


function setup(){
    engine = Engine.create();
    world = engine.world;

      createCanvas(600,800);
    umbrel = new brella(310,650,120,120);


    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            raindrop.push(new drop(random(0,600), random(0,600)));
        }
    }
   
}

function draw(){

     Engine.update(engine);
     background(0);



     rand = Math.round(random(1,4));
     if(frameCount%80===0){
         thunderCreatedFrame=frameCount;
         lightning = createSprite(random(10,370), random(10,30), 10, 10);
         switch(rand){
             case 1: lightning.addImage(lightning1);
             break;
             case 2: lightning.addImage(lightning2);
             break; 
             case 3: lightning.addImage(lightning3);
             break;
             case 4: lightning.addImage(lightning4);
             break;
             default: break;
         }
         lightning.scale = random(0.3,0.6)
     }
 
     if(thunderCreatedFrame + 10 ===frameCount && lightning){
        lightning.destroy();
     }











     
     umbrel.display();
     

     for(var i = 0; i<maxDrops; i++){
        raindrop[i].showDrop();
        raindrop[i].back();
        
    }



   
    drawSprites();
}   











