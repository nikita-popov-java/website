$(document).ready(function () {
	new Swiper('.text-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		speed: 700,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		loop: true,
	});
	new Swiper('.img-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		speed: 200,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		breakpoints: {
			1331: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1025: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			300: {
				slidesPerView: 1,
				slidesPerGroup: 1,

			},
		}
	});
	/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/

	if ($(window).scrollTop() > 50) {
		$('.main-header').css('background', '#fff');
		$('.main-header *').css('color', '#000');
	} else {
		$('.main-header').css('background', 'transparent');
		$('.main-header *').css('color', '#fff');
	}
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$('.main-header').css('background', '#fff');
			$('.main-header *').css('color', '#000');
		} else {
			$('.main-header').css('background', 'transparent');
			$('.main-header *').css('color', '#fff');
		}
	});
	/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/
	let add_room = $('.add_room');
	let calc = $('.calc-body');
	let form = $('form');
	let resBut = $('.result');
	let rooms = $('#rooms');
	let cost = $('#cost');

	add_room.on('click', function () {
		let rad = $('.forman-rad');
		let clone = form.clone(false);
		let f32 = $('input[type="radio"][value="32"]');
		let f35 = $('input[type="radio"][value="35"]');

		clone.children('label').children('input[type="number"]').val(' ');

		clone.children('.label2').children('input#f-32-1').attr('id', 'f-32-' + (f32.length + 1));
		clone.children('.label2').children('input#f-35-1').attr('id', 'f-35-' + (f35.length + 1));

		clone.children('.label2').children('label.radio-label1').attr('for', 'f-32-' + (f32.length + 1));
		clone.children('.label2').children('label.radio-label2').attr('for', 'f-35-' + (f35.length + 1));

		clone.children('.label3').children('input#square1').attr('id', 'square' + (f32.length + 1));
		clone.children('.label4').children('input#depth1').attr('id', 'depth' + (f32.length + 1));

		clone.children('.add_room').css('display', 'none');
		clone.children('.result').css('display', 'none');

		clone.appendTo(calc);
		$('.result-number').css('height', '0');
	});
	resBut.on('click', function () {
		let calculate = $('.calculate');
		let endres = 0;
		let square = [];
		let depth = [];
		for (let i = 0; i < calculate.length; i++) {
			square[i] = $('#square' + (i + 1)).val();
			depth[i] = $('#depth' + (i + 1)).val();

			// // console.log('------------------');
			// // console.log(('#f-32-' + (i + 1)));
			// // console.log(('#f-35-' + (i + 1)));

			console.log($('#f-35-' + (i + 1)).is(':checked'));

			//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&&&&&&&???????????????????????

			if ($('#f-32-' + (i + 1)).is(':checked')) {
				endres += square[i] / 1.5 * depth[i];
			} else if ($('#f-35-' + (i + 1)).is(':checked')) {
				endres += square[i] / 2 * depth[i];
			} else {
				// console.log('Ошибка!');
			}
		}
		//console.log(endres);

		rooms.text(calculate.length);
		cost.text(endres);
		$('.result-number').css('height', '40px');
	});

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	let anchors = $('.anchor-link');

	for (let k = 0; k < anchors.length; k++) {
		anchors[k].onclick = function () {
			$('html,body').stop().animate({ scrollTop: $(anchors[k].getAttribute('href')).offset().top }, 900);
		}
	}
});