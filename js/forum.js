//			$找到元素支持所有的css选择器
//			eq是对应的找的的第一个元素
//			fadeout淡出效果，参数是消失的时间
var currentIndex=0;
var nextIndex=currentIndex+1;
var timer;
timer=setInterval(move,3000)//间隔定时器

		$("#box").mouseover(function(){
				clearInterval(timer);
		})
		
		$("#box").mouseleave(function(){
			timer=setInterval(move,3000);
		})
		
		function move(){
			$(".one").eq(currentIndex).fadeOut(1200);
			$(".one").eq(nextIndex).fadeIn(1200);
			$(".circles span").eq(currentIndex).removeClass("current");
			$(".circles span").eq(nextIndex).addClass("current");
			currentIndex=nextIndex;
			nextIndex++;
			if(nextIndex>2){
				nextIndex=0;
				}
			}
		
		$("#right").click(function(){
			move();
		})
		$("#left").click(function(){
			nextIndex=currentIndex-1;
			if(nextIndex<0){
				nextIndex=2;
			}
			move();
		})
		$("span").mouseover(function(){
//			console.log($(this).index())
			nextIndex=$(this).index();
			move();
			clearInterval(timer);
		})
		$("span").mouseleave(function(){
			timer=setInterval(move,3000);
		})
