/* just a standalone function to get the current date*/
function myCopyRightDate() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("copyLeft").innerHTML = n;
}