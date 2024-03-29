console.clear();

function HdNavMenuSlide__init() {
  $(".hd-nav > ul ul").slideUp(300);

  $(".hd-nav > ul > li").hover(
    function () {
      $(this).find(" > ul").stop().slideDown(300);
    },
    function () {
      $(this).find(" > ul").stop().slideUp(300);
    }
  );
}

HdNavMenuSlide__init();

//사이드메뉴바 show

function SideBarMenu__init() {
  $(".hd-right").click(function () {
    SideBarMenu__show();
  });

  $(".sitemap-close").click(function () {
    SideBarMenu__hide();
  });
}

SideBarMenu__init();

function SideBarMenu__show() {
  $("#sitemap").addClass("active");
}

function SideBarMenu__hide() {
  $("#sitemap").removeClass("active");
}

// 사이드 site-menu02 구현
function SideBarMenu02__show() {
  $(".site-menu01 > ul > li").mouseenter(function () {
    let $this = $(this);

    $this.siblings(".active").removeClass("active");
    $this.addClass("active");
  });

  $(".site-menu01 > ul").mouseleave(function () {
    $(".site-menu01 > ul > li").removeClass("active");
  });
}

SideBarMenu02__show();

const BusinessSlider = new Swiper(".main-business .swiper-container", {
  loop: true, // 슬라이드 바녹 여부
  slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
  spaceBetween: 0,
  speed: 1500, //슬라이드 전환속도
  fadeEffect: { crossFade: true },
  autoplay: {
    //슬라이드 자동재생
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span>
							<span class="${totalClass}"></span>`;

      // return '<span class="' + currentClass + '"></span>' +
      // 	'<span class="' + totalClass + '"></span>';
    },
  },
});

const PaginationBusinessSwiper = new Swiper(
  ".main-business .swiper-container",
  {
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      type: "progressbar",
    },
  }
);

BusinessSlider.controller.control = PaginationBusinessSwiper;

const CultureSlider = new Swiper(".main-culture .swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  roundLengths: true,
  speed: 1500,
  fadeEffect: { crossFade: true },
  loop: true,
  loopedSlides: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-culture .swiper-pagination2",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      slidesPerView: "auto", //브라우저가 768보다 클 때
      spaceBetween: 50,
    },
  },
});

$(document).ready(function () {
  let slides = $(".main-culture .swiper-slide");

  slides.each(function () {
    let $this = $(this);
    let index = parseInt($this.attr("data-swiper-slide-index"));
    // index가 홀수인 경우 margin-top 적용
    if (index % 2 !== 0) {
      console.log(index);
      $(
        `.main-culture .swiper-slide[data-swiper-slide-index="${index}"]`
      ).addClass("active");
    }
  });
});

const WebzineSlider = new Swiper(".main-webzine .swiper-container", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span> /
							<span class="${totalClass}"></span>`;
    },
  },
});

const BannerSlider = new Swiper(".main-banner .swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".main-banner .swiper-button-next",
    prevEl: ".main-banner .swiper-button-prev",
  },
});

// 탑버튼 클릭시 스크롤 업
$("#top_btn").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 스크롤시 탑버튼 나타나고 멈춤
$(function () {
  // 위로 가기 버튼과 footer 요소를 선택하고, 버튼이 footer와 얼마나 떨어져 있는지를 지정합니다.
  const topBtn = $("#top_btn"); // 위로 가기 버튼
  const footer = $(".sec-footer"); // Footer 요소
  const offset = 10; // 버튼이 footer 상단에서 얼마나 떨어져 있는지의 여유 공간

  // 스크롤 이벤트 핸들러
  $(window).scroll(function () {
    // 버튼이 머무를 위치 계산: footer 상단에서 버튼의 높이와 offset만큼 떨어진 곳
    const buttonPosition = footer.offset().top - topBtn.outerHeight() - offset;

    // 현재 스크롤 위치를 가져옵니다.
    const scrollPosition = $(window).scrollTop();

    // 스크롤 위치가 0보다 크면 버튼에 'active' 클래스를 추가하여 버튼을 활성화시킵니다.
    if (scrollPosition > 0) {
      $("#top_btn").addClass("active");
    } else {
      $("#top_btn").removeClass("active");
    }

    // 스크롤 위치가 버튼이 머무를 위치를 지나면 'stop' 클래스를 추가하여 버튼을 멈춥니다.
    if (
      scrollPosition >=
      buttonPosition - $(window).height() + topBtn.outerHeight()
    ) {
      topBtn.addClass("stop");
    } else {
      topBtn.removeClass("stop");
    }
  });
});
