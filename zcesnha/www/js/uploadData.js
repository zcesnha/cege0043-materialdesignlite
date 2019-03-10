function startDataUpload() {
alert ("start data upload"); 
//Adds data to function-takes values from form and sends to database
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
var postString = "name="+name +"&surname="+surname+"&module="+module;
alert (postString); 

//Takes data from the buttons in HTML form uploads them to the server- i.e should appear when "Start Data Upload" button is clicked 
// now get the checkbox values - separate them with a | so that they can be
// split later on if necessary
var checkString = "";
for (var i = 1;i< 5;i++){
if (document.getElementById("check"+i).checked === true) {
checkString = checkString +
document.getElementById("check"+i).value + "||"
}
}
postString = postString + "&modulelist="+checkString;
// now get the radio button values
if (document.getElementById("morning").checked) {
postString=postString+"&lecturetime=morning";
}
if (document.getElementById("afternoon").checked) {
postString=postString+"&lecturetime=afternoon";
}
// now get the select box values
var language = document.getElementById("languageselectbox").value;
postString = postString + "&language="+language;
// now get the geometry values in longitude and latitude boxes
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
postString = postString + "&latitude=" + latitude + "&longitude=" +
longitude;

//should always be last in the method 
processData (postString); 
}