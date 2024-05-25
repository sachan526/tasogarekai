$(function () {
	// ハンバーガーメニュー
	$(".toggle-btn,.mask").on("click", function () {
		$("body").toggleClass("open");
	});
	// メニューのリンクをクリックした時
	$("nav a").on("click", function () {
		$("body").toggleClass("open");
	});

	// slick
	$(".slide-items").slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 6900,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		cssEase: 'linear',
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1.5,
				}
			}
		],
	});

	// スムーススクロール
	$('a[href^="#"]').click(function () {
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? "html" : href);
		let position = target.offset().top;
		$("html, body").animate({ scrollTop: position }, 800, "swing");
		return false;
	});

// フェードイン
	$(window).scroll(function () {
		$(".fadein").each(function () {
			let scroll = $(window).scrollTop();
			let target = $(this).offset().top;
			let windowHeight = $(window).height();
			if (scroll > target - windowHeight + 200) {
				$(this).css("opacity", "1");
				$(this).css("transform", "translateY(0)");
			}
		});
	});
});
