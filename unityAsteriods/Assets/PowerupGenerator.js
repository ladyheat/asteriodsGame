#pragma strict

function Start () {

}

function Update () {

}

function generatePowerup (maxpower:int){

	var counter:int;
	
	for(counter=0;counter<maxpower;counter++)
	{
		var xcoord:float;
		var ycoord:float;
		
		xcoord = Random.Range(BorderController.leftmost,BorderController.rightmost);
		ycoord = Random.Range(BorderController.bottommost,BorderController.topmost);
		Instantiate(asteriodPrefab,Vector3(xcoord,ycoord,3),Quaternion.identity);
		yield WaitForSeconds(5);
}

function OnTriggerEnter(other:Collider){

	if (other.gameObject.tag=="powerup"))
	{
		speed = 15;
		Destroy (other.gameobject);
	}	
}