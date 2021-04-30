const func1 = function () {
  location.hash = "the-grieving-process";
  document.title = "The Grieving Process | Marshall Funeral Home";
  $("#grief-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../Images/header-image-grievingprocess.jpg)",
  });
  $(".link1").addClass("selected");
  $(".link2").removeClass("selected");
  $(".link3").removeClass("selected");
  $(".section-contents1").css({ display: "block" });
  $(".section-contents2").css({ display: "none" });
  $(".section-contents3").css({ display: "none" });
};

const func2 = function () {
  location.hash = "grief-resources";
  document.title = "Grief Resources | Marshall Funeral Home";
  $("#grief-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-griefresources.jpg)",
  });
  $(".link2").addClass("selected");
  $(".link1").removeClass("selected");
  $(".link3").removeClass("selected");
  $(".section-contents2").css({ display: "block" });
  $(".section-contents1").css({ display: "none" });
  $(".section-contents3").css({ display: "none" });
};

const func3 = function () {
  location.hash = "children-and-grief";
  document.title = "Children And Grief | Marshall Funeral Home";
  $("#grief-header").css({
    "background-image":
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-children.jpg)",
  });
  $(".link3").addClass("selected");
  $(".link2").removeClass("selected");
  $(".link1").removeClass("selected");
  $(".section-contents3").css({ display: "block" });
  $(".section-contents2").css({ display: "none" });
  $(".section-contents1").css({ display: "none" });
};

$(document).ready(function () {
  if (String(location.hash) == "#grief-resources") {
    func2();
  } else if (String(location.hash) == "#children-and-grief") {
    func3();
  } else {
    func1();
  }

  $(".link1").click(func1);
  $(".link2").click(func2);
  $(".link3").click(func3);
});
