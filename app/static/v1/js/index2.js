$(document).ready(function(){




	$('#screensaver, #navbarTimeline').click(function(){
		window.location.href = "http://127.0.0.1:8000/timeline/";
	});

	// zoom container 1 zoom-in
		
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


	//zoom conatainer 1 close
	$('#close1').click(function(){
		$(".sidebar,.content, .bubble", '#zoom-container1').hide();
		$('#zoom-container1 > .sidebar').transition({x:'0px'});
		$('body').zoomTo({
			targetsize:1.0,
			duration:1000,
			root:$('#masterplan-main-container')
		});
		//$('masterplan-main-container').css('margin-top', '-80px')
		$('.head').fadeIn();
	});

	//refactor to use a generic div.
	$('#sustainability').click(function(){
		$('.bubble, #zoom1-sidebar').fadeOut();
		$('#zoom-container1 #sustainability-sidebar').transition({x:'250px'},1).fadeIn();
		$('#sustainability-content').fadeIn();
		$('.main-green-point-div').fadeIn();
		window.setTimeout(function(){
			bubblepop('#zoom-container1  #sustainability-content .sub-grey-point');
		},400);	
	});


	$('#sustainability-close').click(function(){
		$('#sustainability-content, #sustainability-sidebar').fadeOut();
		$('#zoom1-sidebar, #zoom1-content, .bubble').fadeIn();
	});


	$modal = $('#zoom1-modal');

	$('.main-green-point, .sub-grey-point').click(function(){
		$modal.fadeIn();
		fillModal($(this).data("click"));
	});


	$('.modal-close').click(function(){
		$modal.fadeOut();
	});


	// $('#zoom-container1 #green3').click(function(){
	// 	$('.bubble').fadeOut();
	// 	$('#sub-zoom-container1').zoomTo({
	// 		targetsize:1.0,
	// 		duration:1000,
	// 		root:$('#masterplan-main-container'),
	// 		animationendcallback: subZoomIn1

	// 	});
	// });


	//sub zoom container close

	// $('#close2').click(function(){
	// 	$(".sidebar,.content, .s-bubble", '#sub-zoom-container1').hide();
	// 	$('#zoom-container1').zoomTo({
	// 		targetsize:1.0,
	// 		duration:1000,
	// 		root:$('#masterplan-main-container'),
	// 	});

	// 	bubblepop('#zoom-container1 > .content  > .bubble');
	// });

	// var content = "Some text here";
	// var ep = ["Environmental Protection", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet lobortis nunc, eu eleifend lorem porta sed. Nulla condimentum, est eget malesuada egestas, orci velit sodales mi, id semper mauris elit porta lacus. Nullam placerat consectetur metus, non auctor metus dictum sed. Sed pellentesque nisl volutpat arcu vestibulum at molestie orci lobortis. Nam at quam orci. Etiam gravida convallis eros, non tincidunt nunc ultricies vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent cursus libero nec nisi sollicitudin rutrum. Praesent tincidunt risus sit amet erat egestas sit amet bibendum neque aliquet. " , "/static/v1/img/greenery.png"];

	// $('#s-bubble1').click(function(){
	// 	console.log(ep);
	// 		fillModal(ep);
	// 	$('#modal1').show()
	// });

	// $('#modal-close').click(function(){
	// 	$('#modal1').hide();
	// });



});

function mainZoomIn1 (){
	$('#zoom-container1 #zoom1-sidebar').show().transition({x:'250px'},500);
	//animateSidebar();
	$('#zoom-container1  #zoom1-content').show();
	bubblepop('#zoom-container1  .content  > .green');
	bubblepop('#zoom-container1  .content  > .grey');
	
}


	
function subZoomIn1 () {
	$('#sub-zoom-container1 > .sidebar').show('slide');
	$('#sub-zoom-container1 > .content').show();
	bubblepop('#sub-zoom-container1 > .content > .s-bubble' );
}

function bubblepop(xx) {
	setTimeout(function() {
		$(xx).each(function(i){
		$(this).delay(150*i).show('bounce',{ times: 3 }, "slow");
	});}, 600);
}


//deprecaated. Using jquery transit for this.
function animateSidebar (xx) {
	$('#zoom-container1 > .sidebar').show().animate({width: '250px'}, 500, function() {});
}




var energy = [
'ENERGY EFFICIENCY', 
'As part of the NUS campus wide sustainability aim, the master plan aims to design and build energy efficient buildings without compromising on the comfort for users.',
'energy.jpg', 
'1/5'];

var monitoring = [
'MONITORING', 
'New and existing buildings installed with sensors which are linked to a central system monitor flow rates and regulate electricity usage. Air flow rates are regulated and reduced to improve air conditioning efficiency and reduce leakages.',
'monitoring.jpg', 
'2/5'];

var design  = [
'DESIGN', 
'Overall heat gains of buildings are reduced by innovative shading designs and glazing selection.',
'design.jpg', 
'3/5'];

var natural = [
'NATURAL', 
'Natural means are encourages to be incorporated in every possible design to reduce energy usage, such as using vegetation to reduce heat gain of buildings from sunlight.',
'natural.jpg', 
'4/5'];

var alternative  = [
'ALTERNATIVES', 
'Alternative renewable source of energy such as biofuel, generated from organic wastes, are considered to reduce usage of conventional power and produce useful by-products such as biochar.',
'alternatives.jpg', 
'5/5'];

var water = [
'WATER CONSERVATION', 
'Efforts to conserve water in campus can be done by promoting efficient usage of water which are covered in the three main aspects: Sources, Storage and Applications.',
'waterconservation.jpg', 
'1/4'];

var sources  = [
'SOURCES', 
'Recognising the value of water as a precious resource, rain water treatment systems will be implemented into the various part of the campus. For example at the Valley behind Central Library, the natural vegetation system can harvest rainwater for non-potable water demands.',
'sources.jpg', 
'2/4'];

var storage = [
'STORAGE', 
'Water tanks collect rainwater for non-potable usage so as to reduce water usage from PUB and other sources. ',
'storage.jpg', 
'3/4'];

var applications = [
'APPLICATIONS', 
'For non-drinking purposes such as irrigation and cooling systems, potable water is replaced by using alternative recyclable sources such as non-PUB water, rainwater or Newater. In addition, all water meters, which are linked to the Building Management system, monitor major water usage.',
'applications.jpg', 
'4/4'];

var waste  = [
'WASTE', 
'On top of encouraging the use of sustainable materials and products in infrastructure construction, the Master Plan promotes proper disposal of waste and provide adequate and appropriate waste management infrastructures. ',
'wastemanagement.jpg', 
'1/4'];

var disposal = [
'DISPOSAL', 
'Adequate and appropriate waste management infrastructures such as recycling stations, compost station and safe drop-off points for potentially hazardous wastes are provided. Sufficient spaces are set aside for waste management without compromising on safety and minimizing disturbance to the surrounding.',
'disposal.jpg', 
'2/4'];

var recycle  = [
'RECYCLING', 
'Provision of recycling bins at various parts of the campus helps separation of waste such as glass, metal and paper and promotes recycling of materials.',
'recycling.jpg', 
'3/4'];

var reuse  = [
'REUSE', 
'Environmentally friendly waste processing systems are encouraged such as using organic waste for energy generation through bio-methanisation.',
'reuse.jpg', 
'4/4'];


function fillModal(x) {
	if (x=="energy") {fill(energy);};
	if (x=='monitoring') {fill(monitoring);};
	if (x=='design') {fill(design);};
	if (x=='natural') {fill(natural);};
	if (x=='alternative') {fill(alternative);};
	if (x=='waste') {fill(waste);};
	if (x=='reuse') {fill(reuse);};
	if (x=='recycle') {fill(recycle);};
	if (x=='disposal') {fill(disposal);};
	if (x=='water') {fill(water);};
	if (x=='applications') {fill(applications);};
	if (x=='storage') {fill(storage);};
	if (x=='sources') {fill(sources);};

	// $('#modal-title').html(x[0]);
	// $('#modal-content').html(x[1]);
	// $('#modal-image').attr('src', x[2]);
}

function fill(x) {
	$('.modal-content > h1').html(x[0]);
	$('.modal-content > div').html(x[1]);
	$('.modal-image > img').attr("src", "/static/v1/img/map/photos/" + x[2]);
	$('.modal-control > span').html(x[3]);
}


