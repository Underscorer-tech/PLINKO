class particles{

    constructor(x,y){
    
      var options = {
      //isStatic:true,
        restitution:0.2,
        friction:0.5,
        density:1,
    
      }
    this.r=10;
    this.body=Bodies.circle(x,y,10,options);
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body)
    
    }
    
    display(){
    
      var pos = this.body.position;
      var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill(this.color);
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop();
    
    
    }
    
    
    }