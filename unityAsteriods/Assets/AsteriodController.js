#pragma strict
var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;

var rotationSpeed:float;
var direction:int;
var speed:int;

function Start () {

	direction = Mathf.RoundToInt(Random.Range(1.0,4.0));
	print(direction);
}

function Update () {

	BorderController.EnableBorders(transform);
		
	if (direction==1){
		//move mouse left
		transform.Translate(Vector3.left*speed*Time.deltaTime,Space.World);
	}
	
	if (direction==2){
		//move mouse right
		transform.Translate(Vector3.right*speed*Time.deltaTime,Space.World);
	}
	
	if (direction==3){
		//move mouse up
		transform.Translate(Vector3.up*speed*Time.deltaTime,Space.World);
	}
	
	if (direction==4){
		//move mouse down
		transform.Translate(Vector3.down*speed*Time.deltaTime,Space.World);
	}

	transform.Rotate(Vector3.forward * rotationSpeed * Time.deltaTime);

}