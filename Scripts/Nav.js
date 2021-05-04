function scrollFunction() {
  if ($(window).scrollTop() > 45) {
    $(".logo").css({ heigth: "130px" });
    $(".logo").css({ "padding-left": "65px" });
    $(".logo").css({ "padding-right": "65px" });
  } else {
    $(".logo").css({ width: "260px" });
    $(".logo").css({ "padding-left": "0px" });
    $(".logo").css({ "padding-right": "0px" });
  }
}

$(document).ready(function () {
  $(".menu").click(function () {
    $(this).children("#nav-icon").toggleClass("open");
    $(".menu-link-wrapper").parent().toggleClass("increase-height");
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
