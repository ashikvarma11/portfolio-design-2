$( window ).ready(function() {
  
  var pageTransition = { 'dot1':'#aboutMe',
'dot2':'#myWall'}

  $(window).scroll(function() {
	    var height = $(window).scrollTop();
	    if(height  > 150) {
	       $('.navbar').css({
	       	"background-color":'#0d0c1c',
	       	"transition": "background-color 0.5s ease-in"
	       });
	    } else {
	    	$('.navbar').css({
	       	"background":'rgba(76, 175, 80, 0)',
	       	"transition": "background 0.5s ease-out"
	       });
	    }



	});


  	// $('.nav-links li a').click((event)=>{
  	// 	event.preventDefault();

  	// 	$('html, body').animate({ scrollTop: $(event.target.hash).offset().top-80}, 1000);

  	// 	 // Animation on skills

  	// 	 $('svg').animate({
  		 	
  	// 	 })
  	// });

  	$('.three-dots div').click((event)=>{
  		console.log(event)
  		 $('body').scrollLeft(300);
  		// $('html, body').animate({ scrollRight:`${currPos} + 3000`}, 1000);
	});
	// dots.forEach((dot,index)=>{
	// 	    // transform: translateX(100%);
	//     // transition: transform 1s ease-in;
	// })


});