class drop{
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
      }
      this.rain = Bodies.circle(x, y,5,options);
      this.radius = 5;
      World.add(world, this.rain);
    }

 back(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,600),y:random(0,600)})
    }
 }
    showDrop(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }

    
    
  }

  

 

  
  
  
  