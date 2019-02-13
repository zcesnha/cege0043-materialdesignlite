function trackLocation() {
	if (navigator.geolocation) {
	navigator.geolocation.watchPosition(showPosition);
	} else {
	document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
	}
} 

//define global variable 
var userMarker; 

function showPosition(position) {
	// removes any existing markers (avoids drawing a new marker everytime location changes) 
	if (userMarker){
	mymap.removeLayer(userMarker);
	} 

	userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
}


