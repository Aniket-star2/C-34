const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint





function setup() {
  engine= Engine.create();
  world= engine.world;
  createCanvas(3000,800);

  ground1 = new Ground();

  ball = new Ball(200,200,80);

  rope = new Rope(ball.body,{x:500,y:50})
 
  box1 = new box(900,200,70,70)
  box2 = new box(900,200,70,70)
  box3 = new box(900,200,70,70)
  box4 = new box(900,200,70,70)
  box5 = new box(900,200,70,70)
  box6 = new box(900,200,70,70)
  box7 = new box(800,200,70,70)
  box8 = new box(800,200,70,70)
  box9 = new box(800,200,70,70)
  box10 = new box(800,200,70,70)
  box11 = new box(800,200,70,70)
  box12 = new box(800,200,70,70)
  box13 = new box(700,200,70,70)
  box14 = new box(700,200,70,70)
  box15 = new box(700,200,70,70)
  box16 = new box(700,200,70,70)
  box17 = new box(700,200,70,70)
  box18 = new box(700,200,70,70)
  box19 = new box(700,200,70,70)
  box20 = new box(700,200,70,70)

}

function draw() {
  Engine.update(engine);
  background(255,255,255); 

  ball.Display();
  rope.Display();
  
 
 ground1.Display();
 box1.Display();
 box2.Display();
 box3.Display();
 box4.Display();
 box5.Display();
 box6.Display();
 box7.Display();
 box8.Display();
 box9.Display();
 box10.Display();
 box11.Display();
 box12.Display();
 box13.Display();
 box14.Display();
 box15.Display();
 box16.Display();
 box17.Display();
 box18.Display();
 box19.Display();
 box20.Display();



  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

