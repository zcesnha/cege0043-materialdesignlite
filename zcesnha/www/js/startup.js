// creating new function so multiple functions can be performed on one click 
function trackAndCircle() { 

	//calling track location 
	trackLocation(); 

	//calling create point, line and poly 
	addPointLinePoly(); 

	//calling Earthquakes data function 
	getEarthquakes(); 

	//calling port detection function 
	getPort(); 

	loadW3HTML(); 

} 

//HTML form code
function loadW3HTML() {
	w3.includeHTML();
}

// function automatically loads requested functions
function startup() {
	document.addEventListener('DOMContentLoaded', function() {
	trackAndCircle ();
	}, false);
}