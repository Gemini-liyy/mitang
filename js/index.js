
		$(function(){
			// 第一张图片显示
			$("images").eq(0).show().siblings().hide();
			// 初始化页数，图片当前索引，图片索引，
			var page=1,num=1,a=Math.ceil(($(".images img").length)/num);
			// 点击右键
			$('#right').click(function(){
				if(page==a) {
					$(".images img").eq(0).fadeIn(400).siblings().fadeOut(400);
					$(".btns span").eq(0).addClass("on").siblings().removeClass();
					page=1;
				}else{
					$(".images img").eq(page).fadeIn(400).siblings().fadeOut(400);
					$(".btns span").eq(page).addClass("on").siblings().removeClass();
					 page++;
				}
			});
			// 点击左键
			$('#left').click(function(){
				if(page==1) {
					$(".images img").eq(a-1).fadeIn(400).siblings().fadeOut(400);
					$(".btns span").eq(a-1).addClass("on").siblings().removeClass();
					page=a;
				}else{
					$(".images img").eq((page-a)+1).fadeIn(400).siblings().fadeOut(400); 
					$(".btns span").eq((page-a)+1).addClass("on").siblings().removeClass();
					page--;
				}
			});
			// 自动循环
			auto = setInterval(function(){
						$("#right").trigger("click");
					},1000);
			$(".images img,#left,#right,.btns").mouseover(function(){ 
				clearInterval(auto);
			 }).mouseout(function(){ 
			 	auto=setInterval(function(){ 
			 		$("#right").trigger("click"); 
			 	},4000) 
			})
			// 添加索引样式
			$(".btns span:eq(0)").addClass("on");
			$(".btns span").click(function(){
				$(this).addClass("on").siblings().removeClass();
				$(".images img").eq($(this).index()).fadeIn(300).siblings().fadeOut(600);
			});
			// 滚动条事件触发上面隐藏导航显示
			$(window).scroll(function(event) {
				var target = $(".footer-com").offset().top-600;
				var scrolltop= $(window).scrollTop();
				$(".nav-hidden").hide();
				if(scrolltop>target){
					$(".nav-hidden").show();
				}
				$(".toolBar-right").hide();
				if(scrolltop>10){
					$(".toolBar-right").show();
				}
			});
			//获取倒计时
			var countDown = function getCountDown(){
				// 获取当前时间戳
				var dateNow = new Date().getTime();
				var dateNowDate = new Date().getDate();
				// 设置目标时间戳
				var dateEnd = new Date("2016/12/4 10:00:00");
				// var dateEnd = new Date();
				var dateEnd = dateEnd.setDate(dateNowDate+1);
				// console.log(dateEnd);
				// var dateEnd = dateEnd.setHours(10,00,00);
				// 获取时间差
				var dateDifference = dateEnd-dateNow;
				if(dateDifference<0){
					dateEnd +=86400000;
				}
				// 将时间差毫秒转换为时、分、秒
				var dateHour = Math.floor(dateDifference/3600000);
				var dateDifference =  dateDifference-(dateHour*3600000);
				if(dateHour<0){
					dateHour=23;
				}
				var dateMinutes = Math.floor(dateDifference/60000);
				var dateDifference =  dateDifference-(dateMinutes*60000);
				var dateSeconds = Math.floor(dateDifference/1000);
				var dateDifference =  dateDifference-(dateSeconds*1000);
				// 判断当时分秒 < 10 时，前面拼接0
				if(dateHour<10){
					dateHour = "0" + dateHour;
				}
				if(dateMinutes<10){
					dateMinutes = "0" + dateMinutes;
				}
				if(dateSeconds<10){
					dateSeconds = "0" + dateSeconds;
				}
				// 添加到节点
				$(".hour").text(dateHour);
				$(".minute").text(dateMinutes);
				$(".second").text(dateSeconds);
			}
			setInterval(countDown,1000);
		});


				

