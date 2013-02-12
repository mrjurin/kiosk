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
		}

		if (x>8900) {
			$('#excavator').addClass('excavator-animate');
			window.setTimeout(function(){$('#ex-arm').
				addClass('arm-animate');},1000);

		}

		if (x>9000) {
			$('#dugoutsoil').transition({
				y:80,
				
				complete: animateFoundation()
			},500);
		}
		
	});

});

function animateLine (bullet) {
	$('#' + bullet + ' .bullet-line').addClass('bullet-line-animate-class');
	//window.setTimeout('animateBullet(1)', 1000);
	window.setTimeout(
		function () {$('.bullet-box, .bullet-text', '#' + bullet).fadeIn(600);}, 1000);
};


function animateFoundation () {
	return;
}





// function animateBullet(x) {
// 	var y = "bullet" + x;
// 	$('.bullet-box, .bullet-text', '#' + y).fadeIn(600);

// }