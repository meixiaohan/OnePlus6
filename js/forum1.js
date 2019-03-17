//$(function(){
//	$(".hasSub").hover(function(){
//		$(this).find(".subMenu").stop().slideToggle();
//
//	});
$("#button1").hover(function(){
		$(".kefu").animate({width:"238px"},{duration:500});
		$(this).css("color","#FFFFFF");
	},function(){
		$(".kefu").animate({width:"0px"},{duration:500});
		$(this).css("color","#000000");
	})
