#pragma strict
var speed:int;
var superSpeed:int;

var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;

var laserBeam:Rigidbody;

var lives:int;
static var score:int;

function Start () {
	
	lives = 3;
	score = 0;
}

function Update () {

	BorderController.EnableBorders(transform);
	
	if(Input.GetKey(KeyCode.Space))
	{
		transform.Translate(Vector3.up * superSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
	}
	else
	{
		transform.Translate(Vector3.up * speed * Input.GetAxis("Vertical") * Time.deltaTime);
	}
	
	if(Input.GetKeyDown(KeyCode.Z))
	{
		Instantiate(laserBeam,transform.position,transform.rotation);
	}
	
	
		if(Input.GetKeyDown(KeyCode.Escape)){
		Application.LoadLevel(0);
	}

	transform.Translate(Vector3.up * speed * Time.deltaTime * Input.GetAxis("Vertical"));
	transform.Rotate(Vector3.forward * -50 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	
}
function OnGUI () {

	GUI.Label(Rect(0,45,200,30),"Lives: "+ lives);
	GUI.Label(Rect(0,60,200,30),"Score: "+ LaserBeamController.score);
	
	GUI.color=Color.red;
	GUI.Label(Rect(0,100,200,30),"Leftmost: "+ BorderController.leftmost);
	GUI.Label(Rect(0,130,200,30),"Rightmost: "+ BorderController.rightmost);
	GUI.Label(Rect(0,160,200,30),"Topmost: "+ BorderController.topmost);
	GUI.Label(Rect(0,190,200,30),"Bottommost: "+ BorderController.bottommost);

}

function OnTriggerEnter(other:Collider){

	if(other.gameObject.tag=="asteriod"){
		//removes the mouse from memory and adds a point for each mouse that is destroyed
		lives --;
		if (lives== 0)
		{
			Destroy(this.gameObject);	
		}
	}
	
	if (other.gameObject.tag=="powerup")
	{
		speed=15;
		Destroy (other.gameObject);
	}	

}


	