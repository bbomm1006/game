// 헤더 메뉴와 바닥글 읽기 처리
// $(function(){
//   $("#header").load("/layout/header.html", function() {
//     // sp 헤더 메뉴 표시 전환 : sp의 Top 페이지의 경우 로고 숨기기 & 배경 색상 없음
//     if ($('#header').data('is-top-page') && navigator.userAgent.match(/(iPhone|iPod|Android)/)) {
//       $('#header-logo-sp').hide();
//       $('header').css('background', 'rgba(0, 0, 0, 0)')
//     }
//   });
//   $("#footer").load("/layout/footer.html");
// });

// 햄버거 메뉴 아이콘에 의한 sp메뉴 표시
$(document).on('click', '.header-nav-sp-menu , .header-nav-sp-menu-list li', (function() {
    if ($('.header-nav-sp-menu-list').hasClass('open')){
        $('.header-nav-sp-menu-list').removeClass('open');
        $('.header-nav-sp-menu').removeClass('open');
    } else {
        $('.header-nav-sp-menu-list').addClass('open');
        $('.header-nav-sp-menu').addClass('open');
    }
}));

// 햄버거 메뉴 아이콘에 의한 sp메뉴 숨기기
$(document).on('click', '.header-nav-sp-menu-list a', (function(){
    $('.header-nav-sp-list').removeClass('open');
}));