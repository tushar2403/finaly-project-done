const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;


var bob1,bob2,roof,rope

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    roof = new Roof (600,200,400,20);

   
    bob1=new Bob (430,550,40);
   bob2=new Bob (450,550,40);
    bob3=new Bob (500,550,40);
    bob4=new Bob (550,550,40);
    bob5=new Bob (600,550,40);
    bob5=new Bob (650,550,40);
    bob6=new Bob (700,550,40);
    bob7=new Bob (750,550,40);


    rope= new Rope (bob1.body,roof.body,-120,0)
    rope2= new Rope (bob2.body,roof.body,-80,0)
    rope3= new Rope (bob3.body,roof.body,-40,0)
    rope4= new Rope (bob4.body,roof.body,0,0)
    rope5= new Rope (bob5.body,roof.body,40,0)
    rope6= new Rope (bob6.body,roof.body,80,0)
    rope7= new Rope (bob7.body,roof.body,120,0)
    console.log(rope);
}

function draw(){
    background(255);
    Engine.update(engine);
 
    roof.display();
    rope.display();
    bob1.display();
    bob2.display();
    rope2.display();
    bob3.display();
    rope3.display();
    bob4.display();
    rope4.display();
    rope5.display();
    bob5.display();
    bob6.display();
    bob7.display();
    rope6.display();
    rope7.display();
}


function keyPressed (){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
    }
}

