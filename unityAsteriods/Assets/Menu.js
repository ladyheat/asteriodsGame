#pragma strict

var x:float;
var y:float;

var theme:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {

	x = Screen.width/2;
	y = Screen.width/2;
	
	GUI.skin=theme;
	
	GUI.Label(Rect(x-150,y-20,300,25),"Odyseyy");
	
	if (GUI.Button(Rect(x-45,y+20,100,25),"New Game"))
	{
		Application.LoadLevel(1);
	}

}