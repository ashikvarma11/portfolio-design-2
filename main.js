const navbarTransition = ()=>{
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const navLinkList = document.querySelectorAll(".navLinks ul li");
// const loading = document.querySelectorAll('#loading path');

// for (let i=0;i<loading.length;i++){

// }
console.log(navLinkList)
hamburger.addEventListener("click",function(){
// Burger Animation

hamburger.classList.toggle('toggle');
navLinks.classList.toggle('showNav');
navLinkList.forEach((link,index)=>{
    if(link.style.animation){
        link.style.animation='';
    
    }
    else {
        link.style.animation = `navLinkFade 1.5s ease forwards`
    }
});



});



}

navbarTransition();