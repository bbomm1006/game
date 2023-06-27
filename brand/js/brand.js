$(function() {

    //모바일 체크
    if($.browser.mobile) {
    }
    else {
    }

    setTimeout(function() {
        $(".content_top .video_wrap").html('<video src="video/bg.mp4" autoplay="autoplay" loop="loop" muted="muted" playsinline id="main_video" class="video"><source src="video/bg.mp4" type="video/mp4"></video>');
        $("#main_video").on("play", function() {
            setTimeout(function() {
                $("#main_video").addClass("on");
            }, !iOS() ? 10 : 200);
        });
    }, 10);

    //임시 사전예약하기
    $(".content_reserve .btn_reserve").on("click", function() {
        $(".content_reserve .reserve_form").removeClass("active").eq(1).addClass("active");
        return false;
    });

    //common
    //공유 팝업
    $("#header .btn_menu.url").on("click", function() {
        $("#popup_share").fadeToggle(200);
        return false;
    });
    $("body").on("mousedown", function(e) {
        if($(e.target).closest("#popup_share").length == 0 && !$(e.target).hasClass("url")) {
            $("#popup_share").fadeOut(200);
        }
    });

    //영상 팝업
    $(".content_top .btn_video").on("click", function() {
        var getYoutube = $(this).data("youtube");
        $("#popup_video").fadeIn(200).find(".video_frame").html('<iframe src="https://www.youtube.com/embed/' + getYoutube + '?autoplay=1&mute=1" autoplay frameborder="0" allowfullscreen="" class="video"></iframe>');
        return false;
    });
    $("#popup_video .btn_close").on("click", function() {
        $("#popup_video").fadeOut(200, function() {
            $("#popup_video .video_frame").empty();
        });
        return false;
    });

    //스토어 사전등록 혜택 확인 팝업
    $(".content_reserve .benefit_wrap .btn_benefit").on("click", function() {
        $("#popup_download").fadeToggle(200);
        return false;
    });
    $("#popup_download .btn_close").on("click", function() {
        $("#popup_download").fadeOut(200);
        return false;
    });
    
    //개인정보 팝업
    $("#btn_detail_01").on("click", function() {
        $("#popup_reserve_01").fadeToggle(200);
        return false;
    });
    $("#popup_reserve_01 .btn_close").on("click", function() {
        $("#popup_reserve_01").fadeOut(200);
        return false;
    });

    //알림수신 팝업
    $("#btn_detail_02").on("click", function() {
        $("#popup_reserve_02").fadeToggle(200);
        return false;
    });
    $("#popup_reserve_02 .btn_close").on("click", function() {
        $("#popup_reserve_02").fadeOut(200);
        return false;
    });

    //유의사항 팝업
    $(".content_reserve .reserve_form .btn_reserve_noti").on("click", function() {
        $("#popup_reserve_03").fadeToggle(200);
        return false;
    });
    $("#popup_reserve_03 .btn_close").on("click", function() {
        $("#popup_reserve_03").fadeOut(200);
        return false;
    });

    //헤더 메뉴
    $("#header .btn_mobile").on("click", function() {
        $("body").addClass("popup");
        $("#header_menu").addClass("active");
        return false;
    });
    $("#header_menu .btn_close").on("click", function() {
        $("body").removeClass("popup");
        $("#header_menu").removeClass("active");
        return false;
    });

    //에니메이션
    animate(true, "");

    //scroll
    //fixed 메뉴
    $("#header .btn_logo").on("click", function() {
        $("html,body").stop(true,true).animate({ scrollTop:0 }, 300);
        location.hash = "";
        return false;
    });
    var btnFixedMenu = $("#fixed_menu .btn_menu");
    var fixedMenuScroll = true;
    $("#fixed_menu .btn_menu, #header_menu .menu_list .btn_menu").on("click", function() {
        var getIdx = $(this).data("tab");
        var getPosTop = $(".content_wrap[data-tab='" + getIdx + "']").position().top;
        // var posMargin = $("#header .header_menu .btn_mobile").is(":visible") ? 74 : 89;
        var posMargin = $("#header .header_menu .btn_mobile").is(":visible") ? 74 : 0;
        getPosTop -= posMargin;
        $("html,body").stop(true,true).animate({ scrollTop:getPosTop }, fixedMenuScroll ? 300 : 10, function() {
            $("body").removeClass("popup");
            $("#header_menu").removeClass("active");
        });
        fixedMenuScroll = true;
        location.hash = getIdx;
        return false;
    });

    $(".content_top .btn_reserve").on("click", function() {
        btnFixedMenu.eq(0).trigger("click");
        return false;
    });

    //스크롤
    var mobile
    $(window).on("scroll resize", function() {
        var getScrollTop = $(window).scrollTop();
        var getHeight = $(window).height() / 3;
        var posMargin = 95;
        if($("#header .header_menu .btn_mobile").is(":visible")) {
            getHeight = $(window).height() / 2;
            posMargin = 80;
        }

        $("body").removeClass("scroll");
        if(getScrollTop > 100) {
            $("body").addClass("scroll");
        }
        var scrollIdx = "top";
        var tabIdx = "top";
        btnFixedMenu.removeClass("active");
        $(".content_wrap").each(function(key) {
            var getContentTop = $(this).position().top;
            if(getContentTop <= getScrollTop + posMargin) {
                scrollIdx = $(this).data("tab");
            }
            if(getContentTop <= getScrollTop + posMargin + getHeight) {
                tabIdx = $(this).data("tab");
            }
        });
        if(scrollIdx != "") {
            $("#fixed_menu .btn_menu[data-tab='" + scrollIdx + "']").addClass("active");
        }
        animate(false, tabIdx);

        if($("#popup_share").is(":visible")) {
            $("#popup_share").hide();
        }
    }).trigger("scroll");

    //hash menu
    var getHash = location.hash;
    if(getHash != "") {
        getHash = getHash.replace("#","");
        if($("#fixed_menu .btn_menu[data-tab='" + getHash + "']").length > 0) {
            doTimeout("scroll", function() {
                fixedMenuScroll = false;
                $("#fixed_menu .btn_menu[data-tab='" + getHash + "']").trigger("click");
            }, 100);
        }
    }

    //main
    $("#twitter_menu .btn_close").on("click", function() {
        $("#twitter_menu").toggleClass("close");
        return false;
    });

    //char
    if($(".char_slide_wrap").length > 0) {
        $(".char_slide_wrap").each(function(key) {
            var charSlide = null;
            if($(this).find(".char_slide").length > 0) {
                charSlide = new Swiper($(this).find(".char_slide").get(0), {
                    autoplay: false,
                    loop: false,
                    delay: 4000,
                    // effect: "fade",
                    // fadeEffect: {
                    //     crossFade: true
                    // },
                    // allowTouchMove: false,
                    slidesPerView: 1,
                    on: {
                        transitionStart: function() {
                            $(".char_img.video").removeClass("video").find(".char_video").empty();
                            $(".audio_wrap").empty();
                            $(this.el).find(".animate.on").removeClass("on");
                        },
                        transitionEnd: function() {
                            // $(this.visibleSlides[0]).find(".animate").addClass("on");
                            $(this.el).find(".swiper-slide-active").find(".animate").addClass("on").end().find(".btn_char_video").trigger("click");
                        },
                        slideChange: function() {
                            var getPrev = this.previousIndex;
                            var getNext = this.activeIndex;
                            if(btnThumbSlide.eq(getNext).length > 0) {
                                btnThumbSlide.removeClass("active").eq(getNext).addClass("active");
                            }
                        }
                    }
                });
            }

            var charThumb = null;
            var charThumbSlide = null;
            var btnThumbSlide = null;
            if($(this).find(".char_thumb_slide").length > 0) {
                charThumb = $(this).find(".char_thumb_slide");
                charThumbSlide = new Swiper($(this).find(".char_thumb_slide").get(0), {
                    autoplay: false,
                    loop: false,
                    delay: 4000,
                    spaceBetween: 10,
                    slidesPerView: "auto",
                    slidesOffsetBefore: 30,
                    slidesOffsetAfter: 30,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                    },
                    breakpoints: {
                        780: {
                            spaceBetween: 8,
                            scrollbar: false,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 0
                        }
                    }
                });

                btnThumbSlide = $(this).find(".char_thumb_slide").find(".btn_char").on("click", function() {
                    btnThumbSlide.removeClass("active");
                    var idx = $(this).addClass("active").parent().index();
                    if(charSlide != null) {
                        charSlide.slideTo(idx);
                    }
                    return false;
                });
                btnThumbSlide.eq(0).addClass("active");
                if(btnThumbSlide.length > 7) {
                    $(this).find(".thumb_slide").addClass("light");
                }
            }

            //좌우 화살표
            $(this).find(".btn_char_slide").on("click", function() {
                if(charThumbSlide != null) {
                    var getIdx = charThumb.find(".btn_char.active").parent().index();
                    var nextIdx = -1;
                    if($(this).hasClass("prev")) {
                        nextIdx = getIdx -= 1;
                        if(nextIdx < 0) {
                            nextIdx = btnThumbSlide.length - 1;
                            charThumbSlide.slideTo(nextIdx);
                        }
                        else {
                            charThumbSlide.slidePrev();
                        }
                    }
                    else if($(this).hasClass("next")) {
                        nextIdx = getIdx += 1;
                        if(nextIdx >= btnThumbSlide.length) {
                            nextIdx = 0;
                            charThumbSlide.slideTo(nextIdx);
                        }
                        else {
                            charThumbSlide.slideNext();
                        }
                    }
                    if(nextIdx > -1) {
                        btnThumbSlide.eq(nextIdx).trigger("click");
                    }
                }
                return false;
            });
        });
    }

    if($("#char_nation_slide").length > 0) {
        var charSlideWrap = $(".char_slide_wrap");
        charSlideWrap.eq(0).addClass("active");
        var charNationSlide = new Swiper($("#char_nation_slide").get(0), {
            autoplay: false,
            loop: false,
            delay: 4000,
            slidesPerView: "auto"
        });

        var btnNationSlide = $("#char_nation_slide .btn_nation").on("click",function() {
            $(".char_slide_wrap .animate").removeClass("on");
            $(".audio_wrap").empty();
            $(".char_img.video").removeClass("video").find(".char_video").empty();
            btnNationSlide.removeClass("active");
            var idx = $(this).addClass("active").parent().index();
            var getSlideWrap = charSlideWrap.removeClass("active").eq(idx).addClass("active");
            setTimeout(function() {
                getSlideWrap.find(".thumb_slide.animate").addClass("on");
                getSlideWrap.find(".swiper-slide-active .animate").addClass("on");
                getSlideWrap.find(".swiper-slide-active .btn_char_video").trigger("click");
            }, 200);
            return false;
        });
        btnNationSlide.eq(0).addClass("active");

        $(".char_wrap .btn_slide").on("click", function() {
            var getIdx = $("#char_nation_slide .btn_nation.active").parent().index();
            var nextIdx = -1;
            if($(this).hasClass("prev")) {
                nextIdx = getIdx -= 1;
                if(nextIdx < 0) {
                    nextIdx = btnNationSlide.length - 1;
                    charNationSlide.slideTo(nextIdx);
                }
                else {
                    charNationSlide.slidePrev();
                }
            }
            else if($(this).hasClass("next")) {
                nextIdx = getIdx += 1;
                if(nextIdx >= btnNationSlide.length) {
                    nextIdx = 0;
                    charNationSlide.slideTo(nextIdx);
                }
                else {
                    charNationSlide.slideNext();
                }
            }
            if(nextIdx > -1) {
                btnNationSlide.eq(nextIdx).trigger("click");
            }
            return false;
        });
    }

    //관계도
    $(".btn_relation").on("click", function() {
        var getImg = $(this).data("img");
        $("body").addClass("popup");
        $("#popup_relation").fadeIn(200).find(".relation").attr("src", getImg);
        return false;
    });
    $("#popup_relation .btn_close").on("click", function() {
        $("body").removeClass("popup");
        $("#popup_relation").fadeOut(200);
        return false;
    });

    //영상
    $(".btn_char_video").on("click", function() {
        var getPc = $(this).data("pc");
        var getMobile = $(this).data("mobile");
        if(!iOS()) {
            //loop 사용시 무한 재생
            var getVideo = '<video muted autoplay playsinline class="pc"><source src="'+getPc+'.webm" type="video/webm" /></video><video muted autoplay playsinline class="mobile"><source src="'+getMobile+'.webm" type="video/webm" /></video>';
            $(this).parent().find(".char_img").addClass("video").find(".char_video").html(getVideo);
        }
        return false;
    });

    //음성
    $(".btn_voice").on("click", function() {
        var getVoice = $(this).data("audio");
        if(getVoice != "") {
            $(".audio_wrap").html('<audio src="' + getVoice + '?ver=20230623" autoplay></audio>');
        }
        return false;
    });

    //feature
    if($("#feature_slide").length > 0) {
        new Swiper($("#feature_slide").get(0), {
            autoplay: false,
            loop: true,
            delay: 4000,
            spaceBetween: 60,
            slidesPerView: "auto",
            centeredSlides: true,
            navigation: {
                prevEl: "#btn_feature_prev",
                nextEl: "#btn_feature_next"
            },
            breakpoints: {
                780: {
                    spaceBetween: 80
                }
            }
        });
    }

    $("#feature_slide .btn_feature").on("click", function() {
        var getImg = $(this).data("img");
        $("body").addClass("popup");
        $("#popup_feature").fadeIn(200).find(".feature").attr("src", getImg);
        return false;
    });
    $("#popup_feature .btn_close").on("click", function() {
        $("body").removeClass("popup");
        $("#popup_feature").fadeOut(200);
        return false;
    });

    //media
    if($(".media_tab_wrap").length > 0) {
        var btnMediaTab = $(".media_tab .btn_tab").on("click", function() {
            btnMediaTab.removeClass("active");
            var getTab = $(this).addClass("active").data("tab");
            $(".media_tab_wrap .tab_panel").removeClass("active");
            $(".media_tab_wrap .tab_panel." + getTab).addClass("active");
            return false;
        });

        $(".media_tab_wrap .tab_panel").each(function(key) {
            var slideLength = $(this).find(".media_slide_thumb .btn_thumb").length;
            var mediaSlideWrap = $(this).find(".media_slide");
            var mediaSlide = new Swiper($(this).find(".media_slide").get(0), {
                autoplay: false,
                loop: false,
                delay: 4000,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                allowTouchMove: false,
                slidesPerView: 1
            });

            var mainSlideThumb = new Swiper($(this).find(".media_slide_thumb").get(0), {
                autoplay: false,
                loop: false,
                delay: 4000,
                spaceBetween: 12,
                slidesPerView: 3.35,
                slidesOffsetBefore: 30,
                slidesOffsetAfter: 30,
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: true,
                },
                breakpoints: {
                    780: {
                        slidesPerView: 5,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        scrollbar: false
                    }
                }
            });

            var btnSlideThumb = $(this).find(".media_slide_thumb .btn_thumb").on("click", function() {
                btnSlideThumb.removeClass("active");
                $(this).addClass("active");
                var getIdx = btnSlideThumb.index($(this));
                mediaSlide.slideTo(getIdx);
                return false;
            });
            btnSlideThumb.eq(0).addClass("active");

            $(this).find(".btn_slide").on("click", function() {
                btnSlideThumb.removeClass("active");
                $(this).addClass("active");
                var getIdx = mediaSlide.realIndex;
                var nextIdx = -1;
                if($(this).hasClass("prev")) {
                    nextIdx = getIdx -= 1;
                    if(nextIdx < 0) {
                        nextIdx = slideLength - 1;
                        mainSlideThumb.slideTo(nextIdx);
                    }
                    else {
                        mainSlideThumb.slidePrev();
                    }
                }
                else if($(this).hasClass("next")) {
                    nextIdx = getIdx += 1;
                    if(nextIdx >= slideLength) {
                        nextIdx = 0;
                        mainSlideThumb.slideTo(nextIdx);
                    }
                    else {
                        mainSlideThumb.slideNext();
                    }
                }
                if(nextIdx > -1) {
                    btnSlideThumb.eq(nextIdx).trigger("click");
                }
                return false;
            });
        });

        //영상 플레이
        $(".media_slide .btn_video").on("click", function() {
            var getYoutube = $(this).data("youtube");
            $("#popup_video").fadeIn(200).find(".video_frame").html('<iframe src="https://www.youtube.com/embed/' + getYoutube + '?autoplay=1&mute=1" autoplay frameborder="0" allowfullscreen="" class="video"></iframe>');
            return false;
        });

        //이미지 팝업
        $(".media_slide .btn_image").on("click", function() {
            var getImage = $(this).parent().find(".download_image").html();
            $("body").addClass("popup");
            $("#popup_media").fadeIn(200).find(".image_box").html(getImage);
            return false;
        });
        $("#popup_media .btn_close").on("click", function() {
            $("body").removeClass("popup");
            $("#popup_media").fadeOut(200);
            return false;
        });
    }

    //팝업닫기
    $(".popup_window").on("click", function(e) {
        if($(e.target).hasClass("popup_window") || $(e.target).hasClass("video_wrap") || $(e.target).hasClass("media_box")) {
            $(e.target).closest(".popup_window").find(".btn_close").trigger("click");
        }
    });
});

function animate(type, tab) {
    $(".content_wrap .animate").removeClass("on");
    $("#header.animate, #content.animate, #footer.animate").addClass("on");
    $(".content_top").find(".animate").addClass("on");

    if(tab == "char") {
        $(".content_wrap[data-tab='" + tab + "']").find(".char_slide_wrap.active .swiper-slide-active .animate").addClass("on");
        $(".content_wrap[data-tab='" + tab + "']").find(".char_slide_wrap.active .thumb_slide.animate").addClass("on");
        $(".content_wrap[data-tab='" + tab + "']").find(".title_box.animate").addClass("on");
        $(".content_wrap[data-tab='" + tab + "']").find(".char_nation.animate").addClass("on");
    }
    else {
        $(".content_wrap[data-tab='" + tab + "']").find(".animate").addClass("on");
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
