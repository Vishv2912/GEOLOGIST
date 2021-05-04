class Stone{
	constructor(x,y,width,height)
	{
var options={
	'restitution':0.3,
	'friction':5,
	'density':1
}

	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.height,this.width, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.width,this.height)
            pop()
	}}

	