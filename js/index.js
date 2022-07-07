window.addEventListener('DOMContentLoaded', function() {

}, false );

window.addEventListener('load', function() {

ownFunc();
commonFunc();

}, false );

window.addEventListener( 'resize', function() {

}, false );

window.addEventListener('scroll', function(){
		
}, false );




function ownFunc(){

var windowW = $(window).width();

//雲 霧エフェクト
for(var i = 1; i <= 16; i++){
	
	$('#cloudEffect').append('<img src="img/cloud'+ (i % 4) +'.png">');

		if(windowW < 835){
			//sp
			var w =  70 + Math.floor(Math.random() * 30);
		}else{
			//pc
			var w =  60 + Math.floor(Math.random() * 30);
		}
		var mT =  -40 + Math.floor(Math.random() * 120);
		var mL =  -40 + Math.floor(Math.random() * 120);
		
		$('#cloudEffect > img:nth-of-type(' + i + ')').css({'width': w+"vw", 'margin-top': mT+"vh", 'margin-left': mL+"vw", 'animation-delay': -0.2*i+"s"});
		//console.log(i+"は幅"+w+"vw、margin-topは"+mT+"vh、margin-leftは"+mL+"vw");
}

var startDelay = 1000;

$("#loader").delay(startDelay-300).fadeOut(0);
$("#white").delay(startDelay).fadeOut(1000, "easeInSine");
$("#cloudEffect").delay(startDelay).fadeOut(2000, "easeInQuad");

//gsap
gsap.defaults({ease: Power4.easeOut});

//opening
gsap.set("#mainVisualWrap", {'filter': 'blur(20px)'});
gsap.set("#mainVisual", {scale: 1.0});
gsap.set("main article", {y:15, opacity:0, 'filter': 'blur(8px)'});
gsap.set("#catch", {opacity:0, 'filter': 'blur(6px)'});


gsap.to("#mainVisualWrap", {delay:  (startDelay/1000), duration: 4, 'filter': 'blur(0px)'});

if(windowW < 835){
			//sp
			gsap.to("#mainVisual", {scale:1.12, delay:  (startDelay/1000), duration: 12});
		}else{
			//pc
			gsap.to("#mainVisual", {scale:1.075, delay:  (startDelay/1000), duration: 12});
		}


gsap.to("main article", {y:0, opacity:1, 'filter': 'blur(0px)', delay:  (startDelay/1000) + 3.0, duration: 2});
gsap.to("#catch", {y:0, opacity:1, 'filter': 'blur(0px)', delay:  (startDelay/1000) + 1.5, duration: 2});


//scroll trigger

gsap.set("#movie, #news h2", {y: 20, opacity: 0, 'filter': 'blur(8px)'});
gsap.set("#news section, .newsMoveWrap", {y: 20, opacity: 0, 'filter': 'blur(8px)'});
gsap.set("footer #official", {y: 20, opacity: 0, 'filter': 'blur(8px)'});

gsap.to('#movie', {y: 0, opacity: 1, 'filter': 'blur(0px)', duration: 1.2, scrollTrigger:{trigger: '#movie', start: 'top 80%'}});
gsap.to('#news h2', {y: 0, opacity: 1, 'filter': 'blur(0px)', duration: 1.2, scrollTrigger:{trigger: '#news h2', start: 'top 80%'}});
gsap.to('footer #official', {y: 0, opacity: 1, 'filter': 'blur(0px)', delay:0.0, duration: 1.2, scrollTrigger:{trigger: 'footer #official', start: 'top 100%'}});

ScrollTrigger.batch("#news section, .newsMoveWrap", {
  onEnter: batch => gsap.to(batch, {y: 0, opacity: 1, 'filter': 'blur(0px)', duration: 1.2, delay:0.8, overwrite: true})
});

}

function resizeOwnFunc(){
 
}