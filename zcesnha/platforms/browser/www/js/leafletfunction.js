// Global Ajax Request for Form Data
var client; 

var form; 

// Function for creating Map Features
function addPointLinePoly () {

	// add a point
	L.marker([51.5, -0.09]).addTo(mymap)
	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

	// add a line
	var myLine = L.polyline(
	[[51.509, -0.09], 
	[51.503, -0.06]], 
	{color: 'red',
	weight: 3, 
	opacity: 0.5, 
	smoothFactor: 1}
	).addTo(mymap); 

	// add a polygon with 3 end points (i.e. a triangle)
	var myPolygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
	],{
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a polygon."); 

} 

function getFormData () {

	// and a variable that will hold the layer itself – we need to do this outside the function so that wecan use it to remove the layer later on
	var FormDatalayer;
	
	// create the code to get the Form Data data using an XMLHttpRequest
	function getFormData() {
		client = new XMLHttpRequest();
		var url = 'http://developer.cege.ucl.ac.uk:'+httpPortNumber+'/getGeoJSON/london_highway/geom';
		client.open('GET',url);
		client.onreadystatechange = FormDataResponse; // note don't use FormDataResponse() with brackets as that doesn't work
		client.send();
	} 
	
	// create the code to wait for the response from the data server, and process the response once it isreceived
	function FormDataResponse() {
		// this function listens out for the server to say that the data is ready - i.e. has state 4
		if (client.readyState == 4) {
		// once the data is ready, process the data
		var formdata = client.responseText;
		loadFormLayer(formdata);
		}
	} 
	
	var FormDatalayer; 

	// convert the received data - which is text - to JSON format and add it to the map
	function loadFormLayer(formdata) {
		// convert the text to JSON
		var FormDatajson = JSON.parse(formdata); 
		form = FormDatajson;
		// add the JSON layer onto the map - it will appear using the default icons
		FormDatalayer = L.geoJson(FormDatajson).addTo(mymap);
		// change the map zoom so that all the data is shown
		mymap.fitBounds(FormDatalayer.getBounds());
	}

    //code that will load the Form Data to map data AFTER the page has loaded
	document.addEventListener('DOMContentLoaded', function() {
    getFormData();
    }, false); 

} 

