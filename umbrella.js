class brella {
    constructor(x,y) {
      var options = {
          isStatic: true,
          
      }
      this.body = Bodies.circle(x,y,50,options);
      this.image = loadImage("walking_1.png")
      this.radius = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      
      imageMode(CENTER);
      fill("black");
      ellipse(pos.x, pos.y, this.width, this.height);
      image(this.image, 300, 700, 300, 300);
      
    }
  };
