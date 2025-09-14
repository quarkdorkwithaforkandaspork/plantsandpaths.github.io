document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("wimg").src = a;
    }

    const foundimg = document.getElementById("wfoundid") // find specific wizard details element. classes apparently don't work here...
        foundimg.addEventListener("toggle", event => {
        if (foundimg.open) {
            changeImage("./images/wizard.jpg");
        } else {
            changeImage("./images/southernliveoak.jpg");
        }
    });
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

