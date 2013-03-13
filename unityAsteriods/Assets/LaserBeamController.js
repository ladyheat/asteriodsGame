#pragma strict

var laserSpeed:int;
static var score:int;

function Start () {

}

function Update () {

	BorderController.EnableBorders(transform);
	//to make laser beam move forward, then laserSpeed depends on how much you give it.
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);

}
// when laser beam exists the screen, the laser beam is destroyed
function OnBecameInvisible() {
	
	Destroy(this.gameObject);
	
}

function OnTriggerEnter(other:Collider){

	if(other.gameObject.tag=="asteriod"){
		score ++;
		Destroy(this.gameObject);
		Destroy(other.gameObject);
	}
}