document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("bimg").src = a;
    }

    const foundimg = document.getElementById("bfoundid") //find details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/bard.jpg");
        } else {
            changeImage("./images/mahonia.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

