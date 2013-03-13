#pragma strict
static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;

function Start () {

}

function Update () {
	
	//The following code calculates borders.
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	//rightmost border. The X position of the right most border is RELATIVE to the center.
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	//topmost border. The Y position of the top most border is RELATIVE to the center.
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;

}

static function EnableBorders(object:Transform)
{
	if (object.position.x < leftmost)
	{
		object.position.x = leftmost;
	}
	
		if (object.position.x > rightmost)
	{
		object.position.x = rightmost;
	}
	
		if (object.position.y > topmost)
	{
		object.position.y = topmost;
	}
	
		if (object.position.y < bottommost)
	{
		object.position.y = bottommost;
	}
}