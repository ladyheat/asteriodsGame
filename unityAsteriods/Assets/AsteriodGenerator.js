#pragma strict

var asteriodPrefab:Rigidbody;
var numAsteroids:int;


function generateAsteriods(maxasteroids:int){

	var counter:int;
	
	for(counter=0;counter<maxasteroids;counter++)
	{
		var xcoord:float;
		var ycoord:float;
		
		xcoord = Random.Range(BorderController.leftmost,BorderController.rightmost);
		ycoord = Random.Range(BorderController.bottommost,BorderController.topmost);
		Instantiate(asteriodPrefab,Vector3(xcoord,ycoord,3),Quaternion.identity);
		//wait for one second per asteroid
		yield WaitForSeconds(1);
	}
}


function Start () {
	generateAsteriods(numAsteroids);
}

function Update () {



}

function OnGUI () {


}