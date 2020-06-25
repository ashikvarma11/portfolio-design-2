
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
    document.getElementById("hamburger").style.display = "flex";
}

document.body.addEventListener('scroll',()=>{
	console.log(document.body.scrollTop )
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav").style.backgroundColor = "#111230";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
});