$(function(){
	
var currentIndex=0;
var nextIndex=1;
var timer;
var floorNav = $(".runtop i");
		function move(){
			$("header li").eq(currentIndex).fadeOut(1000);
			$("header li").eq(nextIndex).fadeIn(1000);
			currentIndex=nextIndex;
		}
		
//		$("span").mouseover(function(){
////			console.log($(this).index())
//			nextIndex=$(this).index();
//			move();
//			clearInterval(timer);
//		})
//	
	
	$(".nav .bk").on("click",function(){
		$(".page1").css("display","block");
		$(".page2").css("display","none");
		$(".page3").css("display","none");
		$(".page4").css("display","none");
		$("header .text .txt1").animate({left:"0"},{duration:500});
		$("header .text .txt2").animate({left:"-120%"},{duration:500});
		$("header .text .txt3").animate({left:"-120%"},{duration:500});
		$("header .text .txt4").animate({left:"-120%"},{duration:500});
		nextIndex=0;
		move();
		setTimeout(function(){
			$(".main2  .img5").css("display","block");
		},300); 
	})
	
	$(".nav .sp").on("click",function(){
		$(".page1").css("display","none");
		$(".page2").css("display","block");
		$(".page3").css("display","none");
		$(".page4").css("display","none");
		$("header .text .txt1").animate({left:"-120%"},{duration:500});
		$("header .text .txt2").animate({left:"0"},{duration:500});
		$("header .text .txt3").animate({left:"-120%"},{duration:500});
		$("header .text .txt4").animate({left:"-120%"},{duration:500});
		nextIndex=1;
		move();
		$(".page2 .video1").animate({height:"491px"},{duration:2000});
		$(".page2 .video2").animate({height:"374px"},{duration:2000});
		$(".page2 .video3").animate({height:"374px"},{duration:2000});
		$(".page2 .video4").animate({height:"374px"},{duration:3000});
		$(".page2 .video5").animate({height:"374px"},{duration:3000});
	})
	
	$(".nav .cptp").on("click",function(){
		$(".page1").css("display","none");
		$(".page2").css("display","none");
		$(".page3").css("display","block");
		$(".page4").css("display","none");
		$("header .text .txt1").animate({left:"-120%"},{duration:500});
		$("header .text .txt2").animate({left:"-120%"},{duration:500});
		$("header .text .txt3").animate({left:"0"},{duration:500});
		$("header .text .txt4").animate({left:"-120%"},{duration:500});
		nextIndex=2;
		move();
		setTimeout(function(){
			$(".main2  .img5").css("display","block");
		},300); 
		setTimeout(function(){
			$(".main2  .img4").css("display","block");
		},600); 
		setTimeout(function(){
			$(".main2  .img3").css("display","block");
		},900);
		setTimeout(function(){
			$(".main2  .img2").css("display","block");
		},1200); 
		setTimeout(function(){
			$(".main2  .img1").css("display","block");
		},1500); 
	})
	
	$(".nav .xw").on("click",function(){
		$(".page1").css("display","none");
		$(".page2").css("display","none");
		$(".page3").css("display","none");
		$(".page4").css("display","block");
		$("header .text .txt1").animate({left:"-120%"},{duration:500});
		$("header .text .txt2").animate({left:"-120%"},{duration:500});
		$("header .text .txt3").animate({left:"-120%"},{duration:500});
		$("header .text .txt4").animate({left:"0"},{duration:500});
		nextIndex=3;
		move();
	})
	
//	滑动
	$(window).scroll(function(e){
			//得到滚动距离
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 2000){
			floorNav.show();
		}else{
			floorNav.hide();
		}
	})
	
	$(".runtop i").on("click",function(){
		var startTop = $(window).scrollTop();
		var speed = startTop/ 10;//每一步运动的距离
		var count = 0;//计步器
		var timer = setInterval(function(){
			count++;//计步器累加
			startTop -= speed;
			$(window).scrollTop(startTop);
			if(count == 10) 
			clearInterval(timer);
		},30);
	})
	
	$(".main1 .video .video1").hover(function(){
		$(".main1 .video .video1 .video_play1").css("display","block");
	},function(){
		$(".main1 .video .video1 .video_play1").css("display","none");
	});
	
	
	$(".main1 .video .video2").hover(function(){
		$(".main1 .video .video2 .video_play").css("display","block");
	},function(){
		$(".main1 .video .video2 .video_play").css("display","none");
	});
	$(".main1 .video .video3").hover(function(){
		$(".main1 .video .video3 .video_play").css("display","block");
	},function(){
		$(".main1 .video .video3 .video_play").css("display","none");
	});
	$(".main1 .video .video4").hover(function(){
		$(".main1 .video .video4 .video_play").css("display","block");
	},function(){
		$(".main1 .video .video4 .video_play").css("display","none");
	});
	$(".main1 .video .video5").hover(function(){
		$(".main1 .video .video5 .video_play").css("display","block");
	},function(){
		$(".main1 .video .video5 .video_play").css("display","none");
	});
	
	$(".main .left .massage .title .fa-weibo").hover(function(){
		$(".main .left .massage .title .fa-weibo").css("color","#e1323b");
	},function(){
		$(".main .left .massage .title .fa-weibo").css("color","#cccccc");
	})
	$(".main .left .massage .title .fa-qq").hover(function(){
		$(".main .left .massage .title .fa-qq").css("color","#ffc027");
	},function(){
		$(".main .left .massage .title .fa-qq").css("color","#cccccc");
	})
	$(".main .left .massage .title .fa-wechat").hover(function(){
		$(".main .left .massage .title .fa-wechat").css("color","#34cf3e");
	},function(){
		$(".main .left .massage .title .fa-wechat").css("color","#cccccc");
	})
	
	$(".main .left .massage .title1 .fa-share-alt").mouseover(function(){
		$(".main .left .massage .title1 .fa-share-alt").css("display","none");
		$(".main .left .massage .title1 .fa-weibo").css("display","inline-block");
		$(".main .left .massage .title1 .fa-qq").css("display","inline-block");
		$(".main .left .massage .title1 .fa-wechat").css("display","inline-block");
	});
	$(".main .left .massage .title1 li").mouseleave(function(){
		$(".main .left .massage .title1 .fa-share-alt").css("display","inline-block");
		$(".main .left .massage .title1 .fa-weibo").css("display","none");
		$(".main .left .massage .title1 .fa-qq").css("display","none");
		$(".main .left .massage .title1 .fa-wechat").css("display","none");
	})
	
	
	$(".main .left .massage .title2 .fa-share-alt").mouseover(function(){
		$(".main .left .massage .title2 .fa-share-alt").css("display","none");
		$(".main .left .massage .title2 .fa-weibo").css("display","inline-block");
		$(".main .left .massage .title2 .fa-qq").css("display","inline-block");
		$(".main .left .massage .title2 .fa-wechat").css("display","inline-block");
	});
	$(".main .left .massage .title2 li").mouseleave(function(){
		$(".main .left .massage .title2 .fa-share-alt").css("display","inline-block");
		$(".main .left .massage .title2 .fa-weibo").css("display","none");
		$(".main .left .massage .title2 .fa-qq").css("display","none");
		$(".main .left .massage .title2 .fa-wechat").css("display","none");
	})
	
	
	$(".main .left .massage .title3 .fa-share-alt").mouseover(function(){
		$(".main .left .massage .title3 .fa-share-alt").css("display","none");
		$(".main .left .massage .title3 .fa-weibo").css("display","inline-block");
		$(".main .left .massage .title3 .fa-qq").css("display","inline-block");
		$(".main .left .massage .title3 .fa-wechat").css("display","inline-block");
	});
	$(".main .left .massage .title3 li").mouseleave(function(){
		$(".main .left .massage .title3 .fa-share-alt").css("display","inline-block");
		$(".main .left .massage .title3 .fa-weibo").css("display","none");
		$(".main .left .massage .title3 .fa-qq").css("display","none");
		$(".main .left .massage .title3 .fa-wechat").css("display","none");
	})
	
	$("footer .left .foot1").hover(function(){
		$("footer .left .foot1 .f1").css("transform","rotate(0deg)").show(500);
	},function(){
		$("footer .left .foot1 .f1").css("transform","rotate(90deg)").show(500);
	})
	
})
