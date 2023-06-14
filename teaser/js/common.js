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
            return false;
        });
        $("#popup_share .btn_close").on("click", function() {
            $("#popup_share").fadeOut(200);
            return false;
        });

        //영상 팝업
        $(".content_top .btn_video").on("click", function() {
            $("#popup_video").fadeIn(200);
            return false;
        });
        $("#popup_video .btn_close").on("click", function() {
            $("#popup_video").fadeOut(200, function() {
                $("#popup_video .video_box").html('<iframe src="https://www.youtube.com/embed/KhEeWiN__kM" frameborder="0" allowfullscreen="" class="video"></iframe>');
            });
            return false;
        });
    },
    animate: function() {
        $(".animate").addClass("on");
    }
}

//전역 명령어
function doTimeout(name, func, timeout) {
    var getDoName = "do_" + name;
    if(typeof window[getDoName] !== "undefined") {
        clearTimeout(window[getDoName]);
    }
    if(typeof func === "function") {
        window[getDoName] = setTimeout(func,timeout);
    }
}
