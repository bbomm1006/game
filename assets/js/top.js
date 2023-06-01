// 컨텐츠의 위치
const HOME_POSITION_INDEX = 0
const NEWS_POSITION_INDEX = 1
const STORY_POSITION_INDEX = 2
const CHARACTER_POSITION_INDEX = 3
const SYSTEM_POSITION_INDEX = 4
const SPECIAL_POSITION_INDEX = 5
const SCROLL_POSITON_ADJUST = 100;

let position_list = [];
let current_position_index = -1;
let chara_posi;
let system_posi;
let doc_height;
let disp_height;

$('#top-fadein').hide()
$('#top-fadein').fadeIn(1000)
$('.top-link').hide()
$('.top-link').fadeIn(1000)
 
// 헤더 메뉴 커런트 위치 표시
$(document).ready(function () {

  // 헤더 메뉴의 콘텐츠 위치 가져오기
  $('.nav-position').each(function (index) {
    position_list[index] = $(this).offset().top;
  });

  // 초기 표시 시
  setTimeout(setScrollNaviPosition, 300);

  // 스크롤 시
  $(window).scroll(() => {
    setScrollNaviPosition()
  });

});


// 현재 스크롤 위치가 어느 콘텐츠 위치에 있는지 판정
function setScrollNaviPosition() {

  scrollPosition = $(window).scrollTop();

  for (let index = position_list.length - 1; index >= 0; index--) {
    if ($(window).scrollTop() >= position_list[index] - SCROLL_POSITON_ADJUST) {
      setNavMenuCurrent(index);
      break;
    }
  };

}

// 커런트 위치 헤더 메뉴에 class 부여
function setNavMenuCurrent(index) {

  if (index == current_position_index) {
    return
  }

  $('header nav li').removeClass('header-nav-current');

  switch (index) {
    case HOME_POSITION_INDEX:
      $('#haeder-nav-home').addClass('header-nav-current');
      break;
    case NEWS_POSITION_INDEX:
      $('#haeder-nav-news').addClass('header-nav-current');
      break;
    case STORY_POSITION_INDEX:
      $('#haeder-nav-story').addClass('header-nav-current');
      break;
    case CHARACTER_POSITION_INDEX:
      $('#haeder-nav-chara').addClass('header-nav-current');
      break;
    case SYSTEM_POSITION_INDEX:
      $('#haeder-nav-system').addClass('header-nav-current');
      break;
    case SPECIAL_POSITION_INDEX:
      $('#haeder-nav-special').addClass('header-nav-current');
      break;
  }

  current_position_index = index
}

// 스무스 스크롤
$(document).on('click', 'a[href*="#"]', (function () {

  if ($(this).attr('class') === 'chara-diagram-modal') return
  if ($(this).attr('class') === 'system-diagram-modal') return
  if ($(this).attr('class') === 'download-terms-modal') return

  event.preventDefault();
  let HashOffset = $(this.hash).offset().top;
  $("html, body").stop().animate({
    scrollTop: HashOffset
  }, 500);
}));

// fadein 애니메이션
// https://scrollrevealjs.org/
ScrollReveal().reveal('.news-box', { 'duration': 1200, 'mobile': false });
ScrollReveal().reveal('.story-area', { 'duration': 1300, 'mobile': false });
ScrollReveal().reveal('.chara-container', { 'duration': 1500, 'mobile': false });
ScrollReveal().reveal('.system-container', { 'duration': 1500, 'mobile': false });
ScrollReveal().reveal('.special-container', { 'duration': 1500, 'mobile': false });
ScrollReveal().reveal('.swiper-container', { 'duration': 1500, 'mobile': false });


/***
 * BGM계 처리
 ***/

// 현재 일시를 조건으로 BGM을 전환하는 처리
let gimmick_bgm_time_before = new Date();
gimmick_bgm_time_before.setHours(2, 00, 00);

let gimmick_bgm_time_after = new Date();
gimmick_bgm_time_before.setHours(2, 30, 00);

const gimmick_bgm_now = new Date();

if (gimmick_bgm_time_before < gimmick_bgm_now && gimmick_bgm_now < gimmick_bgm_time_after) {
  $('#bgm').attr('src', '/assets/bgm/M011_Final.mp3');
}

// BGM 재생 버튼을 누를 때 : 재생, 정지를 전환
$("#bgm-click").on('click', function () {
  if (!bgm.paused) {
    $('#bgm-click').attr('src', 'https://ragnador.jp/assets/images/top/Home1Top_musicOFF.png');
    bgm.pause();
  } else {
    $('#bgm-click').attr('src', 'https://ragnador.jp/assets/images/top/Home1Top_musicON.png');
    bgm.play();
  }
})


// 230529 슬라이드 추가
$(document).ready(function () {
  slider();
})

function slider(){
  var titArray = []; //슬라이드 타이틀
  $('.slider .slide_tit > li').each(function(index, item){
      var txt = $(this).text();
      titArray.push(txt);
  }).promise().done(function() {
      //슬라이드 전체 페이지 번호
      var slides = $(".slider .swiper-slide");
      var slideCount = slides.length;

      //슬라이드 시작
      var swiper = new Swiper('.slider', {
          loop: true,
          slidesPerView: 1,        
          autoplay: {
              delay: 8000,//CSS animation과 시간 동일하게
              disableOnInteraction: false
          }, 
          effect: 'fade',
          fadeEffect: {
              crossFade: true
          },
          //pagination 텍스트 & progress bar 형태로 변경
          pagination: {
              el: '.slider .slide_tit',
              clickable: 'true',
              type: 'bullets',
              renderBullet: (index, className) => {
                  return `<li class=${className}><span class="bar"></span><span class="txt">${titArray[index]}</span></li>`;
              },
          },
      })
  });
}