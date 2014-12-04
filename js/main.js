var path = "M-196,323.5h439.238c0,0,105.416,8.525,202.198-84.031c96.784-92.557,206.301-6.006,317,35c110.699,41.009,425.757,49.646,455.789,48.997";
var sheepAnimator = new PathAnimator( path ),	// initiate a new pathAnimator object
sheep = document.getElementById('sheep1'),	// The object that will move along the path
speed = 3,	 		// seconds that will take going through the whole path
reverse = false,	// go back of forward along the path
startOffset = 0		// between 0% to 100%
	
sheepAnimator.start( speed, sheepStep, reverse, startOffset, sheepFinish);

function sheepStep( point, angle ){
	// do something every "frame" with: point.x, point.y & angle
	sheep.style.cssText = "top:" + point.y + "px;" +
								"left:" + point.x + "px;" +
								"transform:rotate("+ angle +"deg);" +
								"-webkit-transform:rotate("+ angle +"deg);";
}

function sheepFinish(){
	sheepAnimator.start( speed, sheepStep, reverse, startOffset, sheepFinish);
}