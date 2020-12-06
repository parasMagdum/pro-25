class Dustbin {
    
    constructor(){
        var options = {
            'isStatic':true,
        } 

        this.bin1=Bodies.rectangle(1000,675,300,20,{isStatic:true})
        this.bin2=Bodies.rectangle(900,635,20,100,{isStatic:true})
        this.bin3=Bodies.rectangle(1100,635,20,100,{isStatic:true})
        World.add(world,this.bin1)
        World.add(world,this.bin2)
        World.add(world,this.bin3)
        this.image = loadImage("dustbin.png")

        }
        
    display(){
       imageMode(CENTER)
       image(this.image,o,o,70,70)
        noStroke();
        fill("white");
        rect(this.bin1.position.x,this.bin1.position.y,200,20)
        rect(this.bin2.position.x,this.bin2.position.y,20,100)
        rect(this.bin3.position.x,this.bin3.position.y,20,100)
        
        }
}