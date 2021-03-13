class Bin {
    constructor(x, y,width,height) {
      var options = {
           isStatic:true
          //'restitution':0.8,
          //'friction':0.5,
          //'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      //this.image=loadImage("images/dustbingreen.png");
      World.add(world, this.body); 
     }                                           
    display(){
      var pos =this.body.position;
      
      
      
      
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };