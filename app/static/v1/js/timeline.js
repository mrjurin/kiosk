$(document).ready(function(){

		$(window).bind("scroll", function(){

		var x = $(this).scrollLeft();
		console.log(x);


		if (x>6000) {
			animateLine('bullet1');

		};

		if (x>6692) {
			animateLine('bullet2');
			$('#flag').transition({y:860},500);
		}

		if (x>6800) {
			animateLine('bullet3');
		}

		if (x>8060) {
			$('#parliament').transition({y:-346},500);
			$('.palmtrees').fadeIn(800);
		}

		if (x>8900) {
			$('#excavator').addClass('excavator-animate');
			window.setTimeout(function(){$('#ex-arm').
				addClass('arm-animate');},1000);
			window.setTimeout(digSoil,1200);
			window.setTimeout(function(){
				$('#foundation').fadeIn(500);
			},1700);
			window.setTimeout(function(){
				$('#foundation').fadeIn(500);
			},2200);
			window.setTimeout(cranePop,2500);
			window.setTimeout(pilesUp,3500);
			window.setTimeout(craneLoad,3500);

		}

		if (x>9200) {
			engineeringBuildings();
		}

		
	});

});

function animateLine (bullet) {
	$('#' + bullet + ' .bullet-line').addClass('bullet-line-animate-class');
	//window.setTimeout('animateBullet(1)', 1000);
	window.setTimeout(
		function () {$('.bullet-box, .bullet-text', '#' + bullet).fadeIn(600);}, 1000);
};

function digSoil() {
	$('#dugoutsoil').transition({y:80},500);
}

function cranePop () {
	$('#crane-div').transition({y:-795}, 1000);
}

function pilesUp() {
	$('#piles').addClass("animatepiles");

}

function craneLoad () {
	$('#craneload').addClass('animateCraneLoad');
}

function engineeringBuildings () {
	$('#e2block').transit({y:-336},500);
	window.setTimeout(function(){
		$('#eblock').transit({y:-336},500);
	},500);
	window.setTimeout(function(){
		$('#eablock').transit({y:-336},500);
	},1000)

}






// function animateBullet(x) {
// 	var y = "bullet" + x;
// 	$('.bullet-box, .bullet-text', '#' + y).fadeIn(600);

// }