document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("fimg").src = a;
    }

    const foundimg = document.getElementById("ffoundid") //find fighter details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/fighter.jpg");
        } else {
            changeImage("./images/spurge.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

