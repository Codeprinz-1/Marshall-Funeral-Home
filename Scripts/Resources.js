const func1 = function () {
  location.hash = "frequent-questions";
  document.title = "Frequent Questions | Marshall Funeral Home";
  $(".content-link").removeClass("selected");
  $(".link1").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".section-contents1").css({ display: "block" });
};

const func2 = function () {
  location.hash = "social-security-benefits";
  document.title = "Social Security Benefits | Marshall Funeral Home";
  $(".content-link").removeClass("selected");
  $(".link2").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".section-contents2").css({ display: "block" });
};

const func3 = function () {
  location.hash = "funeral-etiquette";
  document.title = "Funeral Etiquette  | Marshall Funeral Home";
  $(".content-link").removeClass("selected");
  $(".link3").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".section-contents3").css({ display: "block" });
};

const func4 = function () {
  location.hash = "when-a-death-occurs";
  document.title = "When A Death Occurs | Marshall Funeral Home";
  $(".content-link").removeClass("selected");
  $(".link4").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".section-contents4").css({ display: "block" });
};

const func5 = function () {
  location.hash = "talk-of-a-lifetime";
  document.title = "Talk Of A Lifetime | Marshall Funeral Home";
  $(".content-link").removeClass("selected");
  $(".link5").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".section-contents5").css({ display: "block" });
};

const func6 = function () {
  location.hash = "make-a-payment";
  document.title = "Make A Payment | Marshall Funeral Home";
  $(".content-link").removeClass("selected");
  $(".link6").addClass("selected");
  $(".section-contents").css({ display: "none" });
  $(".section-contents6").css({ display: "block" });
};

$(document).ready(function () {
  if (String(location.hash) == "#make-a-payment") {
    func6();
  } else if (String(location.hash) == "#social-security-benefits") {
    func2();
  } else if (String(location.hash) == "#funeral-etiquette") {
    func3();
  } else if (String(location.hash) == "#when-a-death-occurs") {
    func4();
  } else if (String(location.hash) == "#talk-of-a-lifetime") {
    func5();
  } else {
    func1();
  }

  $(".link1").click(func1);
  $(".link2").click(func2);
  $(".link3").click(func3);
  $(".link4").click(func4);
  $(".link5").click(func5);
  $(".link6").click(func6);
});
