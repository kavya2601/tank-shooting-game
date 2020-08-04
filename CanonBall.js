class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
  };

  display(){

    var pos = this.body.position;
    fill("blue");
    ellipse(pos.x , pos.y , this.width , this.height);


  };
};
