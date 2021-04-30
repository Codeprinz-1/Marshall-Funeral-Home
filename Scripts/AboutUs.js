const func1 = function () {
  location.hash = "";
  document.title = "Who We Are | Marshall Funeral Home";
  $("#about-us").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../Images/road.jpg)",
  });
  $(".link1").addClass("selected");
  $(".link2").removeClass("selected");
  $(".link3").removeClass("selected");
  $(".section-contents1").css({ display: "block" });
  $(".section-contents2").css({ display: "none" });
  $(".section-contents3").css({ display: "none" });
};

const func2 = function () {
  location.hash = "why-choose-us";
  document.title = "Why Choose Us | Marshall Funeral Home";
  $("#about-us").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/road.jpg)",
  });
  $(".link2").addClass("selected");
  $(".link1").removeClass("selected");
  $(".link3").removeClass("selected");
  $(".section-contents2").css({ display: "block" });
  $(".section-contents1").css({ display: "none" });
  $(".section-contents3").css({ display: "none" });
};

const func3 = function () {
  location.hash = "contact-us";
  document.title = "Contact Us | Marshall Funeral Home";
  $(".picture-header").children("h1").text("Contact Us");
  $("#about-us").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-contact.jpg)",
  });
  $(".link3").addClass("selected");
  $(".link2").removeClass("selected");
  $(".link1").removeClass("selected");
  $(".section-contents3").css({ display: "block" });
  $(".section-contents2").css({ display: "none" });
  $(".section-contents1").css({ display: "none" });
};

$(document).ready(function () {
  if (String(location.hash) == "#why-choose-us") {
    func2();
  } else if (String(location.hash) == "#contact-us") {
    func3();
  } else {
    func1();
  }
  $(".link1").click(func1);
  $(".link2").click(func2);
  $(".link3").click(func3);
});
