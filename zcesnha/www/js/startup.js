// creating new function so multiple functions can be performed on one click 
function trackAndCircle() { 

	//calling track location 
	trackLocation(); 

	//calling create point, line and poly 
	addPointLinePoly(); 

	//calling Earthquakes data function 
	getEarthquakes(); 

} 

// function automatically loads trackLocation and addPointLinePoly 
function startup() {
	document.addEventListener('DOMContentLoaded', function() {
	trackAndCircle ();
	}, false);
}