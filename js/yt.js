var tag = document.createElement('script');

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.addEventListener('DOMContentLoaded', () => {
	const source = 'https://api.mlsub.net/PV/?get=doramovie2023PV';
	const video = document.querySelector('video');
	
	const player = new Plyr(video, {tooltips: {controls: true, seek: true, autoplay: true}});

	video.src = source;

	var w = window.innerWidth;
	var h = window.innerHeight;
	ytW = w*(0.9);
	ytH = ytW*9/16;

	
	window.player = player;
});

$(function() {


   $('#play').click(function() {
     $('#yt').css({"visibility":"visible"});
     $('#play').fadeOut(300);
      if(playerReady) {
     player.playVideo();
	 }
   });
   
});
