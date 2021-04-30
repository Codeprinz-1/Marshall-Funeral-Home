$(document).ready(function () {
  $(".panel-heading").click(function () {
    $(this).find(".plus-icon").toggleClass("minus");
  });
});
