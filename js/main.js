var path = "M-200,293.5h318c0,0,129.102-0.854,199.17-72.282c70.068-71.428,173.598,8.489,253.742,40.136S1002.13,294,1023.872,293.5";
var pathAnimator = new PathAnimator( path ),	// initiate a new pathAnimator object
objToAnimate = document.getElementById('sheep1'),	// The object that will move along the path
speed = 3,	 		// seconds that will take going through the whole path
reverse = false,	// go back of forward along the path
startOffset = 0		// between 0% to 100%
	
pathAnimator.start( speed, step, reverse, startOffset, finish);

function step( point, angle ){
	// do something every "frame" with: point.x, point.y & angle
	objToAnimate.style.cssText = "top:" + point.y + "px;" +
								"left:" + point.x + "px;" +
								"transform:rotate("+ angle +"deg);" +
								"-webkit-transform:rotate("+ angle +"deg);";
}

function finish(){
	pathAnimator.start( speed, step, reverse, startOffset, finish);
}