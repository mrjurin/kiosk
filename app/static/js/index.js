$(document).ready(function(){



	$(".zoom").click(function(evt){
		$(this).zoomTo({
			animationendcallback: zoomCallback
		});
		evt.stopPropagation();
	});

	$(".zoom-close").click(function(evt){
		$("body").zoomTo({
			animationendcallback: zoomCloseCallback,
			targetsize: 1.0,
			scalemode: "width"
		});
		evt.stopPropagation();
	});






	settings = {
		animationendcallback: toggleInner,
		//root: $("#big-container"),
		//duration: 1000,
		//targetsize: 0.2,
		closeclick: false,
		targetsize: 1.0
	};
	
	//$("#mc-zoom1").zoomTarget();

	// add in a status so that things aren't repeatedly zoomed
	
	$("#mc-zoom1").click(function(evt){
		if ($(this).hasClass('zoomed')) {

		}
		else {
			$(this).zoomTo(settings);
			evt.stopPropagation();
			$(this).addClass('zoomed');
		}
		
			
		
	});

	$("#mc-close").click(function(evt){
		$("#big-container").zoomTo({
			targetsize:1.0,
			animationendcallback: toggleInner
		});
		evt.stopPropagation();
		$("#mc-zoom1").removeClass('zoomed');
	});

	$("#el1").click(function(evt){
		$(this).zoomTo({
			targetsize: 1.0
		});
		evt.stopPropagation();
	});

	$("#mobile-zoom").zoomTarget();


});


function toggleInner () {
	$('.sc-el').toggle();
};


function zoomableWindow (type){
	this.homeel = 'something';
}

function zoomCallback () {
	$(this).children().show();
}

function zoomCloseCallback () {
	$('.zoom').children().hide();
}


