class Star {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, 20, 20, options);
    this.height=20;
    this.width=20;
    World.add(world, this.body);
    this.image=loadImage("images/star.png")
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};
