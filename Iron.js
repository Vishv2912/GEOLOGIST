class Iron{
	constructor(x,y,width,height)
	{
var options={
	'restitution':0.3,
	'friction':5,
	'density':1
}

this.width=width;
this.height=height;
this.x=x;
this.y=y;  
    
    this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)




    World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			var angle = this.body.angle;
            push()
			translate(pos.x,pos.y);
			rotate(angle);
            rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown")
            rect(0,0,this.width,this.height);
			pop()
	}

}