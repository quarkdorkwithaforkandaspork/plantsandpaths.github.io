document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("simg").src = a;
    }

    const foundimg = document.getElementById("sfoundid") //find details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/sorcerer.jpg");
        } else {
            changeImage("./images/honeysuckle.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

