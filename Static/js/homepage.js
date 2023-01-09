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