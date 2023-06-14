const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// for type-typer
document.addEventListener("DOMContentLoaded", function(){
    let full_text=0;
    const text = "And I'm Writer | Director | Social Meida Consultant | Enterpreneur | Branding Expert | Country Director | Founder of Firtuna.";
    function typeText(){
        if (full_text < text.length){
            document.getElementById("type-typer").innerHTML += text.charAt(full_text);
            full_text++;
            let speed = Math.floor(Math.random()*120)+50;
            setTimeout(typeText, speed)
        }
    }
    typeText();
})

// to stick topnav bar on the top
var navbar = document.getElementById("cotmTopnav")

window.onscroll = function(){scrollFunction()};

var sticky = navbar.offsetTop;

function scrollFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}