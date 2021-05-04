const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var plane;
var iron;
var rubber;
var sandBall1,sandBall2,sandBall3,sandBall4,sandBall5,sandBall6
var sandBall7, sandBall8, sandBall9 ,sandBall10, sandBal11, sandBall12








function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone = new Stone(300,350,100,100);
    iron = new Iron(350,350,100,100) 
    rubber = new Rubber(900,450,70)
    sandBall1 = new Sandballs(590,400,10)
    sandBall2 = new Sandballs(600,400,10)
    sandBall3 = new Sandballs(610,400,10)
    sandBall4 = new Sandballs(620,400,10)
    sandBall5 = new Sandballs(630,400,10)
    sandBall6 = new Sandballs(640,400,10)

    sandBall7 = new Sandballs(650,400,10)
    sandBall8 = new Sandballs(660,400,10)
    sandBall9 = new Sandballs(670,400,10)
    sandBall10 = new Sandballs(680,400,10)
    sandBall11 = new Sandballs(690,400,10)
    sandBall12 = new Sandballs(700,400,10)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();

    sandBall1.display();
    sandBall2.display();
    sandBall3.display();
    sandBall4.display();
    sandBall5.display();
    sandBall6.display();
   sandBall7.display();
    sandBall8.display();
    sandBall9.display();
    sandBall10.display();
    sandBall11.display();
    sandBall2.display();
   
 
}