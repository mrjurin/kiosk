$(document).ready(function(){

	
	$('#head1').click(function(){
		$('.head').fadeOut();
		$('#zoom-container1').zoomTo({
			targetsize:1.0,
			duration:1000,
			ease:'linear',
			animationendcallback: mainZoomIn
		})		
	});
})


function mainZoomIn (){
	return
}