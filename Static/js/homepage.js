'use strict';

var totalCount = 4
function RandomBackground() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = '/static/img/'+num+'.jpeg';
document.body.style.minHeight = "500 px"
document.body.style.backgroundRepeat = "no-repeat";// Background repeat
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";
}


function BackgroundInfo() {
    if (document.body.background = '/static/img/1.jpeg') {
        document.body.textContent = "Fault in rock outcrop";
    } else if (document.body.background = '/static/img/2.jpeg') {
        document.body.textContent = "Fault in rock outcrop";
    } else if (document.body.background = '/static/img/3.jpeg') {
        document.body.textContent = "San Andreas Fault";
    } else {
        document.body.textContent = "San Andreas Fault";
    }
}

var mapInfoBox = document.getElementById('mapInfoBox');
var heatmapImg = document.getElementById('heatmap');
var detailImg = document.getElementById('details');
var significantImg = document.getElementById('significant');
var imgButtons = document.querySelectorAll("heatmap, details, significant")
// const mapInfoBox = ReactDOM.render(<DefaultText />, document.querySelector('#mapInfoBox'));

    // heatmapImg.addEventListener("mouseover", function() {
    //     MouseoverHeatmap();
    // });
    function MouseoverHeatmap(){
        document.getElementById("mapInfoBox").innerHTML = "A map which allows users to view details about a specific earthquake"
    }
    
    function DefaultText() {
    ( document.getElementById("mapInfoBox").innerHTML = "Earthquake data obtained from the United States Geological Survey (USGS). Information about each map will change on hover-over"
    );
}

// ReactDOM.render(<DefaultText />, document.getElementById('#mapInfoBox'));