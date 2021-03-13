class Dust {
    constructor(x, y,width,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 20,width, options);
      this.angle = angle;
      this.width = width;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body); 
     }                                           
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      

      fill("green");
      
      rect(550, 690, this.width, this.angle);
      
    }
  };