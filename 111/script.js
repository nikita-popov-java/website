$(document).ready(function () {
	$(".container1").children().on("click", function (e) {
		let el = $(e.target);
		$(".container2").children().css("background-color", "white");
		$(".container2").children().css("background-image", "url(treasure.svg)");
		$(".container2").children().css("background-size", "100px 100px");
		$(".container2").children().css("background-position", "50% 50%");
		arr = $(".container2").children();
		for (let index = 0; index < arr.length; index++) {
			$(arr[index]).text("")

		}
		////////
		$(".container1").children().css("background-color", "#ff0000");
		$(".container1").children().css("background-image", "url(coins.svg)");
		$(".container1").children().css("background-size", "70px 70px");
		$(".container1").children().css("background-position", "80% 50%");
		arr2 = $(".container1").children();
		for (let index = 0; index < arr2.length; index++) {
			$(arr2[index]).text(Math.floor(Math.random() * 100 + 120))

		}
		el.css("background-color", "#00ff00");
		el.css("background-image", "url(coins.svg)");
		el.css("background-size", "70px 70px");
		el.css("background-position", "80% 50%");
		el.text(Math.floor(Math.random() * 100 + 20));
	})
	$(".container2").children().on("click", function (e) {
		let el = $(e.target);
		$(".container1").children().css("background-color", "white");
		$(".container1").children().css("background-image", "url(treasure.svg)");
		$(".container1").children().css("background-size", "100px 100px");
		$(".container1").children().css("background-position", "50% 50%");
		arr = $(".container1").children();
		for (let index = 0; index < arr.length; index++) {
			$(arr[index]).text("")

		}
		//////
		$(".container2").children().css("background-color", "#ff0000");
		$(".container2").children().css("background-image", "url(coins.svg)");
		$(".container2").children().css("background-size", "70px 70px");
		$(".container2").children().css("background-position", "80% 50%");
		arr2 = $(".container2").children();
		for (let index = 0; index < arr2.length; index++) {
			$(arr2[index]).text(Math.floor(Math.random() * 100 + 20))

		}
		el.css("background-color", "#00ff00");
		el.css("background-image", "url(coins.svg)");
		el.css("background-size", "70px 70px");
		el.css("background-position", "80% 50%");
		el.text(Math.floor(Math.random() * 100 + 20));
	})
});