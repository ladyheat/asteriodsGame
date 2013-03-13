#pragma strict

var horizontalSpeed:int=0;
var verticalSpeed:int=0;

function Start () {

	horizontalSpeed = Random.Range(-10,10);
	verticalSpeed = Random.Range(-10,10);
}

function Update () {
	//calling the borders function in BorderController. Using 'this' because of static var.
	BorderController.EnableBorders(this.transform);
	//random movement horizontally and vertically
	transform.Translate(Vector3.up * horizontalSpeed * Time.deltaTime);
	transform.Translate(Vector3.right * verticalSpeed * Time.deltaTime);
}