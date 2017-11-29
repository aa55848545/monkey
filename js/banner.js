$(function(){
	var timer=null;
	var bool=false;
	
	function startMouse ()
	{
		for(var i=0;i<$("#ul2 li").length;i++)
		{
			$("#ul2 li")[i].index=i;
//			$("#ul2 li")[i].onmouseover=function ()
//			{
//				$("#ul1").stop();
//				onMouse(this.index);
//				bool=true;
//				clearInterval(timer);
//			}
//			$("#ul2 li")[i].onmouseout=function ()
//			{
//				startMove(this.index);
//			}
			
			$("#ul2 li")[i].onclick=function ()
			{
				$("#ul1").stop();
				onMouse(this.index);
				bool=true;
				clearInterval(timer);
				startMove(this.index);
			}
			
		}
	}
	
	function startMove(num)
	{
		var sum=0;
		if(bool==false){
			$("#ul1").append($("#ul1").html());
			$("#ul1").width($("#ul1").width("800%"));
			$("#ul1 li").width($("#ul1 li").width("12.5%"));
		}
		
		clearInterval(timer);
		timer=setInterval(function(){
			if(num==7){
				num=3;
				$("#ul1").animate({left:(-(num*100)+"%")},0);
			}
			num++;
			$("#ul1").animate({left:(-(num*100) + "%")},1000);
			
			if(num>=4){
				sum=num-4;
			}else{
				sum=num;
			}
			$("#ul2 li").removeClass("on");
			$("#ul2 li:eq("+sum+")").addClass("on");
		},5000);
	}
	
	function onMouse(index)
	{
		$("#ul1").animate({left:(-$("#ul1 li").width()*index)+"px"},0);
		$("#ul2 li").removeClass("on");
		$("#ul2 li:eq("+index+")").addClass("on");
	}
	
	startMove(0);
	startMouse();
	
	
	var topHei = document.body.scrollTop||document.documentElement.scrollTop;
	if(topHei==0){
		$(".bottom").css("display","none");
	}else{
		$(".bottom").css("display","block");
	}
	window.onmousewheel=function()
	{
		topHei = document.body.scrollTop||document.documentElement.scrollTop;
		if(topHei==0){
			$(".bottom").css("display","none");
		}else{
			$(".bottom").css("display","block");
		}
	}
	$(".bottom").click(function(){
		$("html, body").animate({scrollTop: $("#top").offset().top},500);
	});
	
});