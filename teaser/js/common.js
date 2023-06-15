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

    },
    animate: function() {
        $(".animate").addClass("on");
    }
}
