#pragma strict

var laserSpeed:int;

function Start () {

}

function Update () {

	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);

}

function OnBecameVisible() { //when beam goes off screen, it is destroyed
	
	Destroy(this.gameObject);
	
}