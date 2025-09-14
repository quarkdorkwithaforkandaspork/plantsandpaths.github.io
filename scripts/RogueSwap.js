document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("rimg").src = a;
    }

    const foundimg = document.getElementById("rfoundid") //find details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/rogue.jpg");
        } else {
            changeImage("./images/tricoloroyster.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

