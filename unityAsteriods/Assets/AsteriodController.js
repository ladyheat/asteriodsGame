#pragma strict

var rotationSpeed:float;

function Start () {
	
	Random.Range(80,20.00);

}

function Update () {

	transform.Rotate(Vector3.forward * rotationSpeed * Time.deltaTime);

}