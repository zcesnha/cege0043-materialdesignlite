
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

