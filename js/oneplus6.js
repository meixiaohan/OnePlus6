
	
	$(".page1").fadeIn(3000);
	
	
	
	
	$(window).scroll(function(e){
	var scrolltop =$(window).scrollTop();
	console.log(scrolltop);
	if(scrolltop >65){
		$(".second").css("position","fixed");
		$(".second").css("margin-top","-65px");
		$(".second").css("position","fixed");
		$(".page1").css("padding-top","150px");
	}else{
		$(".second").css("position","none");
		$(".second").css("margin-top","0");
	}
	
	if(scrolltop>400){
		$(".page2").fadeIn(3000);
	}
	if(scrolltop>1600){
		$(".page3").fadeIn(3000);
	}
	if(scrolltop>2900){
		$(".page4").fadeIn(3000);
	}
	if(scrolltop>4500){
		$(".page5").fadeIn(3000);
	}
	
	
})

	
	
 


