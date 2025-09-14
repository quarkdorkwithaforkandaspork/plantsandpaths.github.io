document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("pimg").src = a;
    }

    const foundimg = document.getElementById("pfoundid") //find details element
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/paladin.jpg");
        } else {
            changeImage("./images/creepingfig.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

