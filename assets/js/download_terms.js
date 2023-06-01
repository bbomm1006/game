/***
 * 
 * 이용규약 모달
 * - modaal 플러그인 사용
 * - ファンキット(팬킷) 다운로드 버튼 클릭 시 modal을 표시한다.
 * 
 ***/

/**
 * 이용 규약 일람
 * 1. 이차 창작 가이드라인
 * 2. 동영상 및 이미지 투고 가이드라인
 * 3. ファンキット(팬킷) 이용 시 주의사항
 */
const termsNames = [
  'cautions_for_use',
  'secondary_production_guideline',
  'video_image_submission_guideline',
];

// 표시하고 있는 이용약관 페이지 index
let page = 0;

// 利用規約モーダル
$('.download-terms-modal').modaal({
  animation_speed: '500',
  overlay_opacity: '0.7',
  hide_close: true,
});

// 이용규약 모달의 open 처리
$(document).on('click', '#download-terms-modal-trigger', function () {
});

// 이용약관 모달 닫기 버튼
$(document).on('click', '#download-terms-modal-close', function () {
  $('.download-terms-modal').modaal('close');
});

let confirmed = false;

const isDebug = () => window.location.hostname.includes('localhost') || window.location.hostname.includes('sbx');

const getDownloadButtonImagePath = () => page >= termsNames.length - 1 ?
  confirmed ? 'https://ragnador.jp/assets/images/download/Download_Button_Agree.png' : 'https://ragnador.jp/assets/images/download/Download_Button_Agree_on.png' :
  confirmed ? 'https://ragnador.jp/assets/images/download/Download_Button_Next.png' : 'https://ragnador.jp/assets/images/download/Download_Button_Next_on.png';

// 이용약관동의체크박스
$(document).on('click', '#download-terms-modal-terms-checkbox', function () {
  const checkbox = document.querySelector('#download-terms-modal-terms-checkbox-img');
  const btnImg = document.querySelector('#download-terms-modal-download-btn-img');
  const btn = document.querySelector('#download-terms-modal-download-btn');

  btnImg.setAttribute('src', getDownloadButtonImagePath());

  if (confirmed) {
    checkbox.setAttribute('src', 'https://ragnador.jp/assets/images/download/Download_Button_Agree.png');
    btnImg.style.cursor = 'auto';
    btn.removeAttribute('href');
  } else {
    checkbox.setAttribute('src', 'https://ragnador.jp/assets/images/download/Download_Button_Agree_on.png');
    btnImg.style.cursor = 'pointer';

    if (page >= termsNames.length - 1) {
      if (isDebug()) {
        btn.setAttribute('href', 'https://assets-develop.kai-dev.gu3.jp/funkit.zip');
      } else {
        btn.setAttribute('href', 'https://assets-production.kai.gu3.jp/funkit.zip');
      }
    }
  }

  confirmed = !confirmed;
});

// 동의한 다음
$(document).on('click', '#download-terms-modal-download-btn', function () {
  if (page < termsNames.length - 1 && confirmed) {
    page += 1;

    const checkbox = document.querySelector('#download-terms-modal-terms-checkbox-img');
    const btnImg = document.querySelector('#download-terms-modal-download-btn-img');
    const btn = document.querySelector('#download-terms-modal-download-btn');
    const content = document.querySelector('#download-terms-modal-terms-content');

    checkbox.setAttribute('src', 'assets/images/download/Download_Button_Agree.png');
    btnImg.setAttribute('src', getDownloadButtonImagePath());
    btnImg.style.cursor = 'auto';
    btn.removeAttribute('href');
    content.setAttribute('src', `terms/${termsNames[page]}.html?var=${new Date().getTime()}`);

    confirmed = false;
  }
});