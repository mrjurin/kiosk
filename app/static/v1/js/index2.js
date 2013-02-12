$(document).ready(function(){

	
	$('#head1').click(function(){
		$('.head').fadeOut();
		$('#zoom-container1').zoomTo({
			targetsize:1.0,
			duration:1000,
			ease:'linear',
			scalemode:"width",
			root:$('#masterplan-main-container'),
			animationendcallback: mainZoomIn1
		})		
	});

	$('#close1').click(function(){
		$(".sidebar,.content, .bubble", '#zoom-container1').hide();
		$('body').zoomTo({
			targetsize:1.0,
			duration:1000,
			root:$('#masterplan-main-container')
		});
		//$('masterplan-main-container').css('margin-top', '-80px')
		$('.head').fadeIn();
	});

	$('#zoom-container1 #green3').click(function(){
		$('.bubble').fadeOut();
		$('#sub-zoom-container1').zoomTo({
			targetsize:1.0,
			duration:1000,
			root:$('#masterplan-main-container'),
			animationendcallback: subZoomIn1

		});
	});

	$('#close2').click(function(){
		$(".sidebar,.content, .s-bubble", '#sub-zoom-container1').hide();
		$('#zoom-container1').zoomTo({
			targetsize:1.0,
			duration:1000,
			root:$('#masterplan-main-container'),
		});

		bubblepop('#zoom-container1 > .content  > .bubble');
	});

	var content = "Some text here";
	var ep = ["Environmental Protection", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet lobortis nunc, eu eleifend lorem porta sed. Nulla condimentum, est eget malesuada egestas, orci velit sodales mi, id semper mauris elit porta lacus. Nullam placerat consectetur metus, non auctor metus dictum sed. Sed pellentesque nisl volutpat arcu vestibulum at molestie orci lobortis. Nam at quam orci. Etiam gravida convallis eros, non tincidunt nunc ultricies vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent cursus libero nec nisi sollicitudin rutrum. Praesent tincidunt risus sit amet erat egestas sit amet bibendum neque aliquet. " , "/static/v1/img/greenery.png"];

	$('#s-bubble1').click(function(){
		console.log(ep);
			fillModal(ep);
		$('#modal1').show()
	});

	$('#modal-close').click(function(){
		$('#modal1').hide();
	});



});

function mainZoomIn1 (){
	$('#zoom-container1 > .sidebar').show('slide');
	//animateSidebar();
	$('#zoom-container1 > .content').show();
	bubblepop('#zoom-container1 > .content  > .bubble');
	
}
	
function subZoomIn1 () {
	$('#sub-zoom-container1 > .sidebar').show('slide');
	$('#sub-zoom-container1 > .content').show();
	bubblepop('#sub-zoom-container1 > .content > .s-bubble' );
}

function bubblepop(xx) {
	setTimeout(function() {
		$(xx).each(function(i){
		$(this).delay(300*i).show('bounce',{ times: 3 }, "slow");
	});}, 600);
}

function animateSidebar (xx) {
	$('#zoom-container1 > .sidebar').show().animate({width: '250px'}, 500, function() {});
}

function fillModal(x) {
	$('#modal-title').html(x[0]);
	$('#modal-content').html(x[1]);
	$('#modal-image').attr('src', x[2]);
}


