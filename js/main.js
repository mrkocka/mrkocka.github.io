//hamburgerMenu
const mainMenu = document.querySelector ('.mainMenu');
const closeMenu = document.querySelector ('.closeMenu');
const openMenu = document.querySelector ('.openMenu');


openMenu.addEventListener('click' ,show);
closeMenu.addEventListener('click' ,close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}


//TypingAnimationEffect
var i=0;
var txt="Egyedi, Igényes, Művészi";
var speed=160;

function type(){
    document.getElementById("type").innerHTML
        +=txt.charAt(i);
     i++;
     setTimeout(type,speed);
}
type();
