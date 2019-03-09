var xhr;
function callDivNodeJSChange() {
xhr = new XMLHttpRequest();
var filename = document.getElementById("filename").value;
xhr.open("GET", filename, true);
xhr.onreadystatechange = processDivNodeJSChange;
xhr.send();
}
function processDivNodeJSChange() {
if (xhr.readyState < 4) // while waiting response from server
 document.getElementById('div1').innerHTML = "Loading...";
 else if (xhr.readyState === 4) { // 4 = Response from server has been completely loaded.
 if (xhr.status == 200 && xhr.status < 300)
// http status between 200 to 299 are all successful
 document.getElementById('div1').innerHTML = xhr.responseText;
 }
} 



