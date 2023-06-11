// ハンバーガーメニュー
$(".hamburger_icon").on("click", function (e) {
  $(".hamburger-nav").slideToggle();
});

// スライド
var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
});

// フェードイン
$(".fadeInUp").waypoint ({
  handler: function (direction) {
    if (direction === "down") {
      $(this.element).addClass("animate__fadeInUp");
      this.destroy();
    }
  },
  offset: "50%",
});

// アコーディオン
$(".faq dt").on("click", function(e) {

  var content = $(e.target).next();
  var icon = $(e.target);

  content.slideToggle();
  icon.toggleClass("open");

});

// Google Map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.68127105732228, lng: 139.76711943535398 },
    zoom: 20,
  });
}

window.initMap = initMap;

// メニューリンクをクリック
$("a[href^='#']").click(function () {
  var href = $(this).attr("href");
  if ($(href).length) {
    var browserWidth = window.outerWidth;

    var fontSize = 10;
    var headerHeight = 7.6 * fontSize + fontSize;

    if (browserWidth < 768) {
      fontSize = 10 / 375 * browserWidth;
      headerHeight = 6 * fontSize;
    } else if (browserWidth < 1024) {
      fontSize = browserWidth / 100;
      headerHeight = 7.6 * fontSize + fontSize;
    }

    $("body,html").animate({
      scrollTop: $(href).offset().top - headerHeight
    }, 400, "swing");
    $(".hamburger-nav").slideUp();
    return false;
  }
});