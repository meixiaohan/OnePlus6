$(function(){
	$(".hasSub").hover(function(){
		$(this).find(".subMenu").stop().slideToggle();

	});
	
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>20){
			$(".nav-container").hide();
			$(".top").show();
		}else{
			$(".nav-container").show();
			$(".top").hide();
		}
	})
})