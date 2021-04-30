const func2 = function () {
  location.hash = "traditional-services";
  document.title = "Traditional Services | Marshall Funeral Home";
  $("#services-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/services-image-01.jpg)",
  });
  $(".content-link").removeClass("selected");
  $(".service-link2").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".service-contents1").css({ display: "block" });
};

const func3 = function () {
  location.hash = "cremation-services";
  document.title = "Cremation Services | Marshall Funeral Home";
  $("#services-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-cremation.jpg)",
  });
  $(".content-link").removeClass("selected");
  $(".service-link3").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".service-contents2").css({ display: "block" });
};

const func4 = function () {
  location.hash = "personalization";
  document.title = "Personalization | Marshall Funeral Home";
  $("#services-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-personalization.jpg)",
  });
  $(".content-link").removeClass("selected");
  $(".service-link4").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".service-contents3").css({ display: "block" });
};

const func5 = function () {
  location.hash = "veteran-services";
  document.title = "Veteran Services | Marshall Funeral Home";
  $("#services-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-veteran.jpg)",
  });
  $(".content-link").removeClass("selected");
  $(".service-link5").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".service-contents4").css({ display: "block" });
};

const func6 = function () {
  location.hash = "general-price-list";
  document.title = "General Price List | Marshall Funeral Home";
  $("#services-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-services-overview.jpg)",
  });
  $(".content-link").removeClass("selected");
  $(".service-link6").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".service-contents5").css({ display: "block" });
};

$(document).ready(function () {
  if (String(location.hash) == "#cremation-services") {
    func3();
  } else if (String(location.hash) == "#personalization") {
    func4();
  } else if (String(location.hash) == "#veteran-services") {
    func5();
  } else if (String(location.hash) == "#general-price-list") {
    func6();
  } else {
    func2();
  }

  $(".service-link1").click(function () {
    location.href = "../MarkUp/ServicesOverview.html";
  });
  $(".service-link2").click(() => {
    func2();
  });
  $(".service-link3").click(() => {
    func3();
  });
  $(".service-link4").click(() => {
    func4();
  });
  $(".service-link5").click(() => {
    func5();
  });
  $(".service-link6").click(() => {
    func6();
  });
});
