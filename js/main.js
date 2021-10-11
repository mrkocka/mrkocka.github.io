//hamburgerMenu
const mainMenu = document.querySelector ('.mainMenu');
const closeMenu = document.querySelector ('.closeMenu');
const openMenu = document.querySelector ('.openMenu');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const artists = document.querySelector('.artists');
const gallery = document.querySelector('.gallery');
const Impressum = document.querySelector('.Impressum');
const contact = document.querySelector('.contact');


openMenu.addEventListener('click' ,show);
closeMenu.addEventListener('click' ,close);
home.addEventListener('click' ,close);
about.addEventListener('click' ,close);
artists.addEventListener('click' ,close);
gallery.addEventListener('click' ,close);
Impressum.addEventListener('click' ,close);
contact.addEventListener('click' ,close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}


//TypingAnimationEffect
var i=0;
var txt="Egyedi,  Igényes,  Művészi";
var speed=160;

function type(){
    document.getElementById("type").innerHTML
        +=txt.charAt(i);
     i++;
     setTimeout(type,speed);
}
type();
