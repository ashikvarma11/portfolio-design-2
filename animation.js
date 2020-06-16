

document.body.addEventListener('scroll',()=>{
	console.log(document.body.scrollTop )
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav").style.backgroundColor = "#111230";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
});