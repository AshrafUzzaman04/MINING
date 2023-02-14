$(function () {
  $(".custom-dropdown").on("show.bs.dropdown", function () {
    var that = $(this);
    setTimeout(function () {
      that.find(".dropdown-menu").addClass("active");
    }, 100);
  });
  $(".custom-dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").removeClass("active");
  });
});

/////////////////////////////////////////////////////////////////////
// auto scroll to top
$(function () {
  var tickerLength = $(".notice_content ul li").length;
  var tickerHeight = $(".notice_content ul li").outerHeight();
  $(".notice_content ul li:last-child").prependTo(".notice_content ul");
  $(".notice_content ul").css("marginTop", -tickerHeight);
  function moveTop() {
    $(".notice_content ul").animate(
      {
        top: -tickerHeight,
      },
      1000,
      function () {
        $(".notice_content ul li:first-child").appendTo(".notice_content ul");
        $(".notice_content ul").css("top", "");
      }
    );
  }
  setInterval(function () {
    moveTop();
  }, 2500);
});
////////////////////////////////////////////////////////////////////////
