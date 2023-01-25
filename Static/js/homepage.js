'use strict';

var totalCount = 4
function RandomBackground() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = '/static/img/'+num+'.jpeg';
document.body.style.minHeight = "500 px"
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";
}


function BackgroundInfo() {
    if (document.body.background == '/static/img/1.jpeg') {
        document.getElementById("backgroundinfo").innerHTML = "Background Photo - Fault in a rock outcrop";
    } else if (document.body.background == '/static/img/2.jpeg') {
        document.getElementById("backgroundinfo").innerHTML = "Background Photo - Fault in a rock outcrop";
    } else if (document.body.background == '/static/img/3.jpeg') {
        document.getElementById("backgroundinfo").innerHTML = "Background Photo - The San Andreas Fault";
    } else {
        document.getElementById("backgroundinfo").innerHTML = "Background Photo - The San Andreas Fault";
    }
}

var mapInfoBox = document.getElementById('mapInfoBox');
var imgButtons = document.querySelectorAll("heatmap, details, significant")

    function MouseoverHeatmap(){
    (document.getElementById("mapInfoBox").innerHTML = "View a worldwide heatmap of earthquakes which shows increasing color intensity as the magnitude and frequency of earthquakes occur near a location."
    );}
    
    function MouseoverSignificant(){ 
    (document.getElementById("mapInfoBox").innerHTML = "An interactive map displaying significant worldwide earthquakes of magnitude 6 or greater. Use a slider to view events from 2012 to 2023"
    );}

    function MouseoverDetails(){
    (document.getElementById("mapInfoBox").innerHTML = "View a Google map of recent earthquakes visualizing their relative magnitude. Click on a circle to get more information about that earthquake."
    );}

    function DefaultText() {
    (document.getElementById("mapInfoBox").innerHTML = "Earthquake data obtained from the United States Geological Survey (USGS). Hover over a map image to learn more."
    );
}