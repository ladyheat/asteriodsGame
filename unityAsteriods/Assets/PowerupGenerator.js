#pragma strict
var PowerupPrefab:Rigidbody;
var numPowerup:int;

function generatePowerup(maxpower:int){

	var counter:int;
	
	for(counter=0;counter<maxpower;counter++)
	{
		var xcoord:float;
		var ycoord:float;
		
		xcoord = Random.Range(BorderController.leftmost,BorderController.rightmost);
		ycoord = Random.Range(BorderController.bottommost,BorderController.topmost);
		Instantiate(PowerupPrefab,Vector3(xcoord,ycoord,3),Quaternion.identity);
		yield WaitForSeconds(5);
}
}

function Start () {
	generatePowerup(numPowerup);
}

function Update () {

}


