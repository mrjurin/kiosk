// $(window).load(function() {
// 	console.log('ready');
// 	document.getElementById("hideAll").style.display = "none"; 
// });

//$(window).load(function(){});

// window.onload = function() {
// 	var x = window.location.hash

// 	console.log('onload x is ' + x)

//     if(!x) {
    	
//         window.location = window.location + '#loaded';
//         window.location.reload();
//     }
// }

$(document).ready(function(){

	console.log('document ready');

	var b = window.location.hash ? true : false;

	console.log ('b is ' + b);

	if (b) {
		//window.location = "http://127.0.0.1:8000/timeline/#loaded";
		console.log('set location, reload called in 1s');
		console.log('location is ' + window.location.toString());
		window.setTimeout(function(){
			//window.location.href("http://127.0.0.1:8000/timeline/#loaded");
			//window.location.reload();
		},2000);
		
	}

	$('#header1').fadeIn(1000);

		
		// document.getElementById("hideAll").style.display = "none"; 
		// //console.log('ready');


		
		//triggered everytime window scrolls.
		$(window).bind("scroll", function(){

		var x = $(this).scrollLeft();
		console.log(x);

		if (x>2300 && x<2400) {
			$('#header2').fadeIn(600);
		}

		if (x>3900 && x<4000) {
			$('#header3').fadeIn(600);
		}

		if (x>5200 && x<5300) {
			$('#brit-flag').fadeOut(600);
			$('#header4, #sing-flag').fadeIn(600);

		}

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
			animateLine('bullet4');
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