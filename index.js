document.body.onload = function(){
    if(localStorage.getItem('theme')==null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDark();
        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            setLight();
        }
        else {
            setDark();
        }
    }    
    else if (localStorage.getItem('theme')!=null) {
        if(localStorage.getItem('theme')=='dark') {
            setDark()
        }
        else if (localStorage.getItem('theme')=='light') {
            setLight()
        }    
    }
}; 

let menuButton=false;
menu = document.getElementById('menu');
document.getElementById('menu-button').addEventListener("click", (event) => {
    if (menuButton==false) {
        menu.style.animation="slide 500ms";
        if (window.matchMedia("(max-width: 600px)").matches) {
            menu.style.width="55%";
        }
        else {
            menu.style.width="20%";
        }
        menuButton=true;
    }
    else {
        menu.style.animation="slideback 500ms";
        menu.style.width="0";
        menuButton=false;
    }
});

let themeButton = document.getElementById('theme-button');

// Get the root element
let cssRoot = document.querySelector(':root');

//dark theme color scheme
let darkBgColor="#161D27"
let primaryColor="#07459d"
let darkSecondaryColor="#141b25"
let darkTextColor="#dceafe"

//light theme color scheme
lightBgColor= "#e2e7ef";
lightSecondaryColor= "#dee4ed";
lightTextColor= "#161D27";    

function setLight() {
    cssRoot.style.setProperty('--bg-color',lightBgColor);
    cssRoot.style.setProperty('--secondary-color',lightSecondaryColor)
    cssRoot.style.setProperty('--text-color',lightTextColor)
    cssRoot.style.setProperty('--moon-icon','url("images/moon.svg")')
    cssRoot.style.setProperty('--menu-icon','url("images/menu-light.svg")');
    localStorage.setItem('theme','light');
}

function setDark() {
    cssRoot.style.setProperty('--bg-color',darkBgColor);
    cssRoot.style.setProperty('--secondary-color',darkSecondaryColor);
    cssRoot.style.setProperty('--text-color',darkTextColor);
    cssRoot.style.setProperty('--moon-icon','url("images/moon-filled.svg")');
    cssRoot.style.setProperty('--menu-icon','url("images/menu-dark.svg")');
    localStorage.setItem('theme','dark');
}

themeButton.addEventListener("click", (event) => {
    if(localStorage.getItem('theme')=='dark') {
        setLight()
    }
    else if (localStorage.getItem('theme')=='light') {
        setDark()
    }
});