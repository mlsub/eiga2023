function loadFunc(){
}

function commonFunc(){

//ページ内リンクでアニメーション

$('.ctsMove').click(function(){
var speed = 900;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top - 100;
$("html, body").animate({scrollTop:position}, speed, "easeOutExpo");
document.getElementById(target).focus()
return false;
});

/////////////////////////////////////
//マウスオーバーで画像が光る（スマホ対応）//
/////////////////////////////////////

moCNT=0;

var ua = navigator.userAgent;
if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 ||ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {

$( '.fade, input[type="button"], input[type="submit"], button' )
  .bind( 'touchstart', function(){
    $( this ).addClass( 'SPhover' );
}).bind( 'touchend', function(){
    $( this ).removeClass( 'SPhover' );
});

}else{

 $('.fade').fadeTo(0, 1.0);
 $('.fade').hover(function(){
 if(moCNT==0){$(this).fadeTo(0, 0.2).fadeTo(400, 1.0); moCNT=1;}
 }, function(){
 $(this).fadeTo(150, 1.0); moCNT=0;
 });
 }

/////////////////
//スマホメニュー展開//
/////////////////

$('#menuSPhm').click(function() {

$(this).toggleClass("open close");

if($(this).hasClass("open")){
	$("#menuSPwrap").fadeIn(300);
	$("#spMenu, #menuSPwrap .shareWrap").toggleClass("open close");
	$('html,body').css({'overflow':'hidden'});
	document.addEventListener('touchmove', disableScroll, { passive: false });
	document.addEventListener('mousewheel', disableScroll, { passive: false });
}else{
	$("#menuSPwrap").fadeOut(300);
	$("#spMenu, #menuSPwrap .shareWrap").toggleClass("open close");
	$('html,body').css({'overflow':'visible'});
	document.removeEventListener('touchmove', disableScroll, { passive: false });
	document.removeEventListener('mousewheel', disableScroll, { passive: false });
}

});



$('#spMenuMovie,#spMenuNews').click(function() {

$("#menuSPwrap").fadeOut(300);
$("#menuSPhm, #spMenu, #menuSPwrap .shareWrap").toggleClass("open close");
$('html,body').css({'overflow':'visible'});

var speed = 900;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top - 100;
$("html, body").animate({scrollTop:position}, speed, "easeOutExpo");
return false;

document.removeEventListener('touchmove', disableScroll, { passive: false });
document.removeEventListener('mousewheel', disableScroll, { passive: false });

});


}
function ctsMove(){
}

function resizeCommonFunc(){
	
}