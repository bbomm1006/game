// Top 페이지의 Youtube 모달: Modaal 플러그인 사용
$('.top-youtube-modal-video').modaal({
  type: 'video',
  overlay_close: false,
　 after_close: function() {
    // 스마트폰은 재생하지 않는다
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      $("video").get(0).play()
    }
　 }
});

// Top 페이지의 Youtube 모달을 URL로 제어하다
// 다른 페이지에서 헤더 메뉴에서 Top으로 돌아왔을 때는 modal을 표시하지 않는다.
if (!location.href.match(/#/)) {
  $('.top-youtube-modal-video').click()
} else {
  // 스마트폰은 재생하지 않는다
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
    $("video").get(0).play()
  }
}