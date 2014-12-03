var path = "M-200,323.5h340.607c0,0,138.279-1.152,213.329-93.709c75.05-92.557,185.939,10.978,271.781,51.985c85.842,41.008,247.655,42.338,270.943,41.69";
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