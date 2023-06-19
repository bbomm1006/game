$(function() {
    _page.init();
});

const _page = {
    init: function() {
        this.common();

        this.animate();
    },
    common: function() {
        //공유 팝업
        $("#header .btn_menu.url").on("click", function() {
            $("#popup_share").fadeIn(200);
            $(this).addClass("active");
            return false;
        });
        $("#popup_share .btn_close").on("click", function() {
            $("#popup_share").fadeOut(200);
            $("#header .btn_menu.url").removeClass("active");
            return false;
        });

        $("#popup .btn_close").on("click", function() {
            $("#popup").fadeOut(200);
            return false;
        });

    },
    animate: function() {
        $(".animate").addClass("on");
    }
}

//sns
var SNS = {
    facebook: function () {
        var currentURl = $(location).attr('href');
        var link = encodeURIComponent(currentURl);
        var url = 'http://www.facebook.com/share.php?u=' + link;
        window.open(url, '_blank', 'width=800,height=450,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
    },
    twitter: function () {
        var currentURl = $(location).attr('href');
        var link = encodeURIComponent(currentURl);
        var url = 'https://twitter.com/intent/tweet?url=' + link;
        window.open(url, '_blank', 'width=800,height=450,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
    }
};

//주소 복사
function urlCopy() {
    var url = document.getElementById('text');
    var success = true;
    url.style.display='block';    // 숨겨둔 input 태그 block처리
    url.select();    // 복사할 text 블럭
    document.execCommand('copy');    // 드레그된 text 클립보드에 복사
    url.style.display='none';    // 다시 숨기기
    if (success) {
        alert('주소가 복사되었습니다.\n원하는 곳에 붙여넣기(Ctrl+V) 해주세요.');
    }
    else {
        alert('사용중인 브라우저가 클립 보드에 액세스를 허용하지 않습니다.\n드래그하여 복사해 주세요.');
    }
}