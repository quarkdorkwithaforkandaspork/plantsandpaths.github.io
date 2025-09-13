document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("mimg").src = a;
    }

    const foundimg = document.getElementById("mfoundid") //find details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("evilPlantShot.png");
        } else {
            changeImage("ballmoss.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

