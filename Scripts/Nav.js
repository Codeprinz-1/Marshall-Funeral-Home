let fixed;

function scrollFunction() {
  if ($(window).scrollTop() > 45) {
    $(".logo").addClass('fixed');
		fixed = true
  } else {
    $(".logo").removeClass('fixed');
		fixed = false
  }
}

$(document).ready(function () {
  $(".menu").click(function () {
    $(this).children("#nav-icon").toggleClass("open");
		setTimeout(() => {
			if (($("#nav-icon").hasClass("open"))) {
				if (fixed) {
					$(".menu-link-wrapper").parent().addClass("height");
				} else {
					$(".menu-link-wrapper").parent().addClass("increase-height");
				}
			} else {
				$(".menu-link-wrapper").parent().removeClass("increase-height");
				$(".menu-link-wrapper").parent().removeClass("height");
			}
		}, 0)
		
  });


  $(window).scroll(function (e) {
    scrollFunction();
    var $el = $(".nav-links-wrapper");
    var isPositionFixed = $el.css("position") == "fixed";
    if ($(this).scrollTop() > 45 && !isPositionFixed) {
      $el.css({ position: "fixed", top: "0px", width: "100%", buttom: '0px' });
      $("#space").css({ display: "block", height: `${$el.css("height")}` });
    }
    if ($(this).scrollTop() < 45 && isPositionFixed) {
      $el.css({ position: "static", top: "0px" });
      $("#space").css({ display: "none", height: "0px" });
    }
  });

  $(window).resize(function () {
    if (window.innerWidth > 1228) {
      if ($(".menu-link-wrapper").parent().hasClass("increase-height")) {
        $(".menu-link-wrapper").parent().removeClass("increase-height");
        $("#nav-icon").removeClass("open");
      }
    }
  });
  $(".dropdown-contents").click(function () {
    $(".menu-link-wrapper").parent().removeClass("increase-height");
    $("#nav-icon").toggleClass("open");

  });
  window.onhashchange = () => {
    location.reload();
  };
});
