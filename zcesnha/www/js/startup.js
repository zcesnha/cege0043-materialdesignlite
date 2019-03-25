// creating new function so multiple functions can be performed on one click 
function trackAndCircle() { 

	//calling track location 
	trackLocation(); 

	//calling create point, line and poly 
	addPointLinePoly();  

	//calling port detection function 
	getPort(); 

	//calling automatic HTML code
	loadW3HTML(); 

	//calling form data
	getFormData();
	
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