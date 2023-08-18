let menuButton=false;
menu = document.getElementById('menu');
document.getElementById('menu-button').addEventListener("click", (event) => {
    if (menuButton==false) {
        document.getElementById('menu').style.animation="slide 500ms";
        document.getElementById('menu').style.width="20%";
        menuButton=true;
    }
    else {
        document.getElementById('menu').style.animation="slideback 500ms";
        document.getElementById('menu').style.width="0";
        menuButton=false;
    }
});