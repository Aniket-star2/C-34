 class box {
constructor(x,y,width,height){
    var options={
    restitution:0.5,
    friction:0.6,
    //isStatic:true,
    }
    this.width=width
    this.height=height

    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

 }

Display(){
var pos=this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
strokeWeight(4)
stroke("red")
rect(0,0,this.width,this.height)
pop()
}
}
 












