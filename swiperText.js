

$(".font_inner li:eq(0)").clone(true).appendTo($(".font_inner"));
var liHeight = 35;
var totalHeight = ($(".font_inner li").length * ($(".font_inner li").eq(0).height() + 10)) - liHeight;
$(".font_inner").height(totalHeight);
var index = 0;
var autoTimer = 0; //全局变量目的实现左右点击同步
var clickEndFlag = true; //设置每张走完才能再点击

function tab() {
	$(".font_inner").stop().animate({
		top: -index * liHeight
	}, 400, function() {
		clickEndFlag = true; //图片走完才会true
		if(index == $(".font_inner li").length - 1) {
			$(".font_inner").css({
				top: 0
			});
			index = 0;
		}
	})
}

function next() {
	index++;
	if(index > $(".font_inner li").length - 1) {
		index = 0;
	}
	tab();
}

//自动轮播
autoTimer = setInterval(next, 2000);
$(".font_inner a").hover(function() {
	clearInterval(autoTimer);
}, function() {
	autoTimer = setInterval(next, 2000);
})