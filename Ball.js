class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    
  }

  display() {
    
    var pos = this.body.position;
    fill("orange");
    ellipse(pos.x , pos.y , this.width , this.height);

  }
}
