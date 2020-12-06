class Paper {
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.3,
        }
        this.body = Bodies.circle(100,200,20,options);
        World.add(world,this.body)
        this.image = loadImage("crumpled ball.png");
        
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70)
    }
}