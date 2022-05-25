class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0.02,
            friction: 0,
           
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow5.webp");
        
    Matter.World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
      image(this.image,pos.x,pos.y,30,30);
   
        noStroke();
      
        
        pop();
    }

}; 