$(document).ready(function(){

	$('#mz1-title').click(function(evt){
		if ($(this).parent().hasClass('zoomed')) {

		}
		else {
			$(this).fadeOut();
			$(this).parent().zoomTo({
				targetsize:1.0,
				animationendcallback:zoomCallback,
				scalemode:"height"
				
			});
			evt.stopPropagation();
		}
		
	});

	//zoom out to body
	//add selector for each zoom out 
	$('#mz1-close').click(function(evt){
		$(this).parent().hide().next().next().hide().parent().removeClass('zoomed');
		$(this).parent().prev().fadeIn();

		$('body').zoomTo({
			targetsize:1.0,
			scalemode:"height"
			//animationendcallback: mz1zoomOutCallback
		});
		evt.stopPropagation();

	});

	//sub zoom functions

	$('.sz-title').click(function (evt){
		if($(this).parent().hasClass('zoomed')) {
		
		}
		else {
			$(this).parent().zoomTo({
				targetsize:1.0,
				scalemode:"height",
				animationendcallback:subzoomCallback
				
			});
			evt.stopPropagation();
		}

	});

	$('#sz-sustain-close').click(function(evt){
		$(this).parent().hide().next().hide().parent().removeClass('zoomed');
		$(this).parent().prev().show();

		$('#mz1').zoomTo({
			scalemode: "height",
			targetsize:0.95
			
		});
		evt.stopPropagation();

	});

	$('#fake1').click (function(){
		$('#mz1-sidebar,#mz1-content').hide();
		$('#overlay').fadeIn();
	});

	$('#overlay-close').click(function(){
		$('#overlay').hide();
		$('#mz1-sidebar,#mz1-content').fadeIn();
		
	});



});

// generic for all zoom ins
function zoomCallback (){
	$(this).fadeIn();
	$('.mz-sidebar', this).show('slide');
	$('.mz-content', this).fadeIn();


	$(this).addClass('zoomed');
}


function subzoomCallback () {
	$('.sz-title', this).fadeOut();
	$('.sz-sidebar', this).show('slide');
	$('.sz-content', this).fadeIn();


	$(this).addClass('zoomed');

}

