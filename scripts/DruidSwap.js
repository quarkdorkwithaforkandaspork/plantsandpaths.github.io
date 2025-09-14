document.addEventListener('DOMContentLoaded', () => {

    function changeImage(a) {
        document.getElementById("dimg").src = a;
    }

    const fighterimg = document.getElementById("dfoundid") //find fighter details element
        fighterimg.addEventListener("toggle", event => {
        if (fighterimg.open) {
            changeImage("./images/druid.jpg");
        } else {
            changeImage("./images/loquat.jpg");
        }
    });    
});

// informed by ts stackoverflow thread: 
// https://stackoverflow.com/questions/70776623/how-can-i-change-picture-on-opening-closing-details-summary

