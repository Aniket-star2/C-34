class Ground{

    constructor(){
        var options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(600,650,1200,20,options)
          World.add(world,this.ground);
    }
    Display(){
        noStroke();
        fill("black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1200,20);
    }
}