document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("rnimg").src = a;
    }

    const foundimg = document.getElementById("rnfoundid") //find details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/ranger.jpg");
        } else {
            changeImage("./images/yucca.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

