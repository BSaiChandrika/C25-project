class Paper {
    constructor(x, y, width,height) {
      var options = {
          'isStatic':false,
          'restitution':0.01,
          'friction':2.0,
          'density':1.8
      }

      this.image=loadImage("paper.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height=height
      World.add(world, this.body);
    }

  display(){

   // var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("grey");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width,this.height);
      pop();
  }
}