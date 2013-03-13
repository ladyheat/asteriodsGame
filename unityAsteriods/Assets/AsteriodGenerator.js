#pragma strict

var asteriodPrefab:Rigidbody;
var numAsteroids:int;


function generateAsteriods(maxasteroids:int){

	var counter:int=0;
	var xcoord:int=0;
	var ycoord:int=0;
	var zcoord:int=1;
	
	for(counter=0;counter<maxasteroids;counter++)
	{
		
		xcoord = Random.Range(BorderController.leftmost,BorderController.rightmost);
		ycoord = Random.Range(BorderController.bottommost,BorderController.topmost);
		Instantiate(asteriodPrefab,Vector3(xcoord,ycoord,zcoord),Quaternion.identity);
	}
}


function Start () {
	generateAsteriods(3);
	yield WaitForSeconds(3);
	generateAsteriods(6);
	yield WaitForSeconds(10);
	generateAsteriods(10);
	yield WaitForSeconds(15);
	generateAsteriods(10);		
}

function Update () {



}