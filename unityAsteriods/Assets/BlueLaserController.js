#pragma strict
var laserSpeed:int;

function Start () {

}

function Update () {

	BorderController.EnableBorders(transform);
	//to make laser beam move forward, then laserSpeed depends on how much you give it.
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
}