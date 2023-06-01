/***
 * 
 * Top 페이지의 시스템 이미지 슬라이더
 * 
 * 아래 플러그인 사용
 * https://swiperjs.com/
 * 
 * ※ 이미지 아래 텍스트 전환도 js로 대응
 * 
 ***/
let slides_per_view_num;

// PC와 SP로 표시 수를 전환하다
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
  slides_per_view_num = 2.3
} else {
  slides_per_view_num = 4.3
}

const systemSwiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 5,
  slidesPerView: slides_per_view_num,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

const SWIPER_MAX_ID = 4

systemSwiper.on('slideChange', function () {
  $('[id^=system-swiper-detail]').addClass("system-swiper-detail-deactive");
  $(`#system-swiper-detail-${systemSwiper.realIndex + 1}`).removeClass("system-swiper-detail-deactive");
});


/***
 * 
 * 시스템 이미지 모달
 * - modaal 플러그인 사용
 * - 시스템 이미지 클릭 시 modal을 표시한다.
 *   - modal의 html의 image 이미지를 전환
 *   - 시스템 이미지 아래 텍스트 전환
 * 
 ***/

// 시스템 모달
$('.system-diagram-modal').modaal({
  animation_speed: '500',
  overlay_opacity: '0.7',
  hide_close: true,
});

// 시스템 모달의 open 처리와 이미지 전환
$(document).on('click', '.system-container .swiper-slide-active', function () {
  $('#system-diagram-modal-trigger').click()
  const system_img = $(this).children('img').attr('src');
  $('#system-diagram-modal-img-js').attr('src', system_img)
})

// 시스템 모달 닫기 버튼
$(document).on('click', '#system-diagram-modal-close', function () {
  $('.system-diagram-modal').modaal('close');
})