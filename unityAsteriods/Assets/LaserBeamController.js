#pragma strict

var laserSpeed:int;
static var score:int;

function Start () {

}

function Update () {

	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);

}

function OnBecameInvisible() { //when beam goes off screen, it is destroyed
	
	Destroy(this.gameObject);
	
}

function OnTriggerEnter(other:Collider){

	if(other.gameObject.tag=="asteriod"){
		score ++;
		Destroy(this.gameObject);
		Destroy(other.gameObject);
	}
}