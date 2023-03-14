jQuery(document).ready(function () {
    "use strict";
    $(window).on("load", function () {
        $("#preloader").fadeOut(300)
    }), $(window).on("load", function () {
        $(".scrolling").on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), $(".navbar-collapse").removeClass("show");
            var o = $(this).attr("href");
            $(o).velocity("scroll", {duration: 800, offset: -50, easing: "easeOutExpo", mobileHA: !1})
        });
        var o = $(".header"), s = o.find(".navbar"), t = 0, a = $(".navbar-sticky");
        $(window).scroll(function () {
            var e = $(this).scrollTop();
            t < e ? a.addClass("navbar-scrollUp") : a.removeClass("navbar-scrollUp"), t = e, s.hasClass("navbar-sticky") && ($(this).scrollTop() <= 500 || $(this).width() <= 300) ? (s.removeClass("navbar-scrollUp"), s.removeClass("navbar-sticky").appendTo(o), o.css("height", "auto")) : !s.hasClass("navbar-sticky") && 300 < $(this).width() && 500 < $(this).scrollTop() && (o.css("height", o.height()), s.addClass("navbar-scrollUp"), s.css({opacity: "0"}).addClass("navbar-sticky"), s.appendTo($("body")).animate({opacity: 1}))
        }), $(window).trigger("resize"), $(window).trigger("scroll")
    })
}), 750 < $(".navbar").width() && ($(".nav .dropdown").on("mouseover", function () {
    "use strict";
    $(this).addClass("show")
}), $(".nav .dropdown").on("mouseleave", function () {
    "use strict";
    $(this).removeClass("show")
})), $(".nav-category .dropdown-submenu ").hover(function () {
    "use strict";
    $(this).addClass("show")
}, function () {
    "use strict";
    $(this).removeClass("show")
});
var sidebar = $(".sidebar");
0 != sidebar.length && ($(".sidebar .nav > .has-sub > a").click(function () {
    $(this).parent().siblings().removeClass("expand"), $(this).parent().toggleClass("expand")
}), $(".sidebar .nav > .has-sub .has-sub > a").click(function () {
    $(this).parent().toggleClass("expand")
})), $(window).width() < 768 && ($("#sidebarToggle").on("click", function () {
    $("body").css("overflow", "hidden"), $("body").prepend('<div class="mobile-sticky-body-overlay"></div>')
}), $(document).on("click", ".mobile-sticky-body-overlay", function (e) {
    $(this).remove(), $("#body").removeClass("sidebarMobileIn"), $("body").css("overflow", "auto")
})), $(window).width() < 768 && $(document).on("click", "#sidebarToggle", function (e) {
    e.preventDefault();
    var o = "sidebarMobileIn", s = "#body";
    $(s).hasClass(o) ? $(s).removeClass(o) : $(s).addClass(o)
}), jQuery(document).ready(function () {
    "use strict";
    $(".searchBox a").on("click", function () {
        $(".searchBox .dropdown-menu").toggleClass("display-block"), $(".searchBox a i").toggleClass("fa-times").toggleClass("fa-search")
    }), $("#searchButton").on("click", function (e) {
        e.preventDefault(), $("#searchbox").toggleClass("visibleIt")
    })
});
var bannerV1 = $("#rev_slider_25_1");
0 !== bannerV1.length && $("#rev_slider_25_1").show().revolution({
    sliderType: "standard",
    jsFileLocation: "//revs.iamabdus.com/revslider/public/assets/js/",
    sliderLayout: "fullwidth",
    dottedOverlay: "none",
    delay: 9e3,
    navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "on",
        touch: {
            touchenabled: "on",
            touchOnDesktop: "on",
            swipe_threshold: 0,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: !1
        },
        arrows: {
            style: "custom",
            enable: !0,
            hide_onmobile: !0,
            hide_under: 0,
            hide_onleave: !0,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: "",
            left: {h_align: "left", v_align: "center", h_offset: 20, v_offset: 0},
            right: {h_align: "right", v_align: "center", h_offset: 20, v_offset: 0}
        },
        bullets: {
            enable: !0,
            hide_onmobile: !1,
            style: "hesperiden",
            hide_onleave: !1,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 20,
            space: 5,
            tmp: ""
        }
    },
    responsiveLevels: [1240, 1025, 778, 480],
    visibilityLevels: [1240, 1025, 778, 480],
    gridwidth: [1170, 1025, 769, 480],
    gridheight: [526, 460, 345, 345],
    lazyType: "none",
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: !1,
    fallbacks: {simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1}
}), jQuery(document).ready(function () {
    "use strict";
    var e = $(".featuredProductsSlider");
    0 !== e.length && e.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !1,
        infinite: !0,
        dots: !1,
        autoplaySpeed: 2e3,
        responsive: [{breakpoint: 1200, settings: {slidesToShow: 4, slidesToScroll: 1}}, {
            breakpoint: 992,
            settings: {slidesToShow: 3, slidesToScroll: 1}
        }, {breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 1}}, {
            breakpoint: 480,
            settings: {slidesToShow: 3.139, slidesToScroll: 1}
        }]
    });
    var o = $(".banner_slider");
    0 !== o.length && o.slick({
        autoplay: !1,
        autoplaySpeed: 1e4,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: !1,
        dots: !0,
        pauseOnDotsHover: !0,
        cssEase: "linear",
        fade: !0,
        draggable: !1,
        arrows: !0,
        appendDots: ".banner_slider_wrapper",
        appendArrows: ".banner_slider_inner",
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>'
    });
    var s = $(".featured_collection_slider");
    0 !== s.length && s.slick({
        dots: !1,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{breakpoint: 9999, settings: "unslick"}, {
            breakpoint: 768,
            settings: {slidesToShow: 2.092, slidesToScroll: 1}
        }]
    }), $(window).on("resize", function () {
        0 !== s.length && s.slick("resize")
    });
    var t = $(".partnersLogoSlider");
    0 !== t.length && t.slick({
        autoplay: !1,
        autoplaySpeed: 2e3,
        dots: !1,
        arrows: !1,
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: !0,
        responsive: [{breakpoint: 1200, settings: {slidesToShow: 4}}, {
            breakpoint: 992,
            settings: {slidesToShow: 3}
        }, {breakpoint: 768, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
            breakpoint: 670,
            settings: {slidesToShow: 2, slidesToScroll: 2}
        }]
    });
    var a = $(".featuredCollectionSlider");
    0 !== a.length && a.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: !0,
        autoplay: !1,
        infinite: !0,
        dots: !1,
        autoplaySpeed: 4e3,
        responsive: [{breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}}, {
            breakpoint: 670,
            settings: {slidesToShow: 1, slidesToScroll: 1}
        }, {breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 2}}]
    });
    var i = $(".dealSlider");
    0 !== i.length && i.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !1,
        infinite: !0,
        dots: !1,
        autoplaySpeed: 3e3,
        responsive: [{breakpoint: 670, settings: {slidesToShow: 1, slidesToScroll: 1}}]
    });
    var n = $(".testimonialSlider");
    0 !== n.length && n.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !1,
        infinite: !0,
        dots: !1,
        autoplaySpeed: 5e3,
        responsive: [{breakpoint: 480, settings: {autoplay: !1, arrows: !1}}]
    });
    var l = $(".categorySlider");
    0 !== l.length && l.slick({dots: !1, speed: 1e3, arrows: !0});
    var r = $(".testimoni-carousel");
    0 !== r.length && r.slick({arrows: !1, autoplay: !1, infinite: !0, dots: !1, autoplaySpeed: 3e3});
    var d = $(".productGallery");
    0 !== d.length && d.slick({
        arrows: !0,
        autoplay: !1,
        infinite: !0,
        dots: !1,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3e3,
        responsive: [{breakpoint: 768, settings: {slidesToShow: 2}}, {
            breakpoint: 480,
            settings: {arrows: !1, slidesToShow: 1}
        }]
    }), 0 !== $("#rev_slider_26_1").length && $("#rev_slider_26_1").show().revolution({
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            touch: {
                touchenabled: "on",
                touchOnDesktop: "on",
                swipe_threshold: 0,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: !1
            },
            arrows: {
                style: "custom",
                enable: !0,
                hide_onmobile: !0,
                hide_under: 0,
                hide_onleave: !0,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: "",
                left: {h_align: "left", v_align: "center", h_offset: 20, v_offset: 0},
                right: {h_align: "right", v_align: "center", h_offset: 20, v_offset: 0}
            }
        },
        responsiveLevels: [1240, 1025, 778, 480],
        visibilityLevels: [1240, 1025, 778, 480],
        gridwidth: [1170, 1025, 769, 480],
        gridheight: [631, 518, 431, 400],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1}
    });
    var c = $("#simple_timer");
    0 != c.length && c.syotimer({year: 2022, month: 10, day: 9, hour: 20, minute: 30});
    var h = $(".slider_timer");
    0 != h.length && h.syotimer({
        year: 2022,
        month: 10,
        day: 9,
        hour: 20,
        minute: 30
    }), $("[data-toast]").on("click", function () {
        var e = $(this), o = e.data("toast-type"), s = e.data("toast-icon"), t = (e.data("toast-position"), {
            class: "iziToast-" + o || "",
            title: e.data("toast-title") || "Title",
            message: e.data("toast-message") || "toast message",
            animateInside: !1,
            position: "topRight",
            progressBar: !1,
            icon: s,
            timeout: 3200,
            transitionIn: "fadeInLeft",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut"
        });
        iziToast.show(t)
    }), $(".btn-wishlist").on("click", function () {
        var e = $(this).data("iteration") || 1, o = {
            title: "Product",
            animateInside: !1,
            position: "topRight",
            progressBar: !1,
            timeout: 3200,
            transitionIn: "fadeInLeft",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut"
        };
        switch (e) {
            case 1:
                $(this).addClass("active"), o.class = "iziToast-info", o.message = "added to your wishlist!", o.icon = "icon-bell";
                break;
            case 2:
                $(this).removeClass("active"), o.class = "iziToast-danger", o.message = "removed from your wishlist!", o.icon = "icon-ban"
        }
        iziToast.show(o), 2 < ++e && (e = 1), $(this).data("iteration", e)
    });
    var u = $(".select-drop");
    0 != u.length && u.selectbox();
    var f = $(".add-rating-default");
    0 !== f.length && f.rateYo({
        starWidth: "14px",
        spacing: "5px",
        normalFill: "#969696",
        ratedFill: "#fec701",
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width=24 height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
    });
    var p = $(".add-rating-large");
    0 !== p.length && p.rateYo({
        starWidth: "20px",
        spacing: "5px",
        normalFill: "#969696",
        ratedFill: "#fec701",
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width=24 height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
    }), $(".incr-btn").on("click", function (e) {
        var o = $(this), s = 0, t = o.parent().find(".quantity").val();
        o.parent().find('.incr-btn[data-action="decrease"]').removeClass("inactive"), "increase" === o.data("action") ? s = parseFloat(t) + 1 : 1 < t ? s = parseFloat(t) - 1 : (s = 1, o.addClass("inactive")), o.parent().find(".quantity").val(s), e.preventDefault()
    }), $(".share-all .social-link").on("click", function () {
        $(this).toggleClass("enable"), $(".share-all .all-link").toggleClass("active")
    });
    var v = document.getElementById("slider-non-linear-step");
    v && noUiSlider.create(v, {connect: !0, start: [20, 300], range: {min: [20], max: [300]}});
    var g, m = [document.getElementById("lower-value"), document.getElementById("upper-value")];
    document.getElementById("price-range") && v.noUiSlider.on("update", function (e, o) {
        m[o].innerHTML = "$" + Math.floor(e[o])
    }), function (t) {
        t("#thumbcarousel").carousel(0);
        var a = t("#thumbcarousel .item");
        t("#carousel").on("slide.bs.carousel", function (e) {
            var o = t(e.relatedTarget).data("thumb"), s = a.index(a.filter(".active").get(0));
            o < s ? (t("#thumbcarousel").one("slid.bs.carousel", function (e) {
                t("#thumbcarousel").carousel(o)
            }), s === a.length - 1 ? t("#thumbcarousel").carousel("next") : t("#thumbcarousel").carousel(numThumbItems - 1)) : t("#thumbcarousel").carousel(o)
        })
    }(jQuery), $(".quick-view .btn-block").click(function () {
        $(".quick-view").modal("hide")
    }), $(".video-box i").on("click", function () {
        var e = '<iframe class="embed-responsive-item"  allowfullscreen src="' + $(this).attr("data-video") + '"></iframe>';
        $(this).replaceWith(e)
    }), $(".f-cat").addClass("active"), $(".filtering select").change(function () {
        var e;
        "cat-all" == $(this).val() ? ($(".filter-cat-results .f-cat").addClass("active"), g = "cat-all") : (e = $(this).val(), g != e && ($(".filter-cat-results .f-cat").removeClass("active"), $(".filter-cat-results .f-cat").filter('[data-cat="' + e + '"]').addClass("active"), g = e))
    }), $(document).ready(function (e) {
        $(".showonhover").click(function () {
            $("#selectfile").trigger("click")
        })
    }), $(document).ready(function (e) {
        $(".profileAttachInner2").click(function () {
            $("#selectfile2").trigger("click")
        })
    }), $(document).ready(function (e) {
        $(".profileAttachInner3").click(function () {
            $("#selectfile3").trigger("click")
        })
    });
    var w = $("#faqAccordion .panel-heading i.fa");
    $("#faqAccordion .panel-heading").click(function () {
        w.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var b = $("#accordionOne .panel-heading i.fa");
    $("#accordionOne .panel-heading").click(function () {
        b.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var y = $("#accordionTwo .panel-heading i.fa");
    $("#accordionTwo .panel-heading").click(function () {
        y.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var k = $("#togglesOne .panel-heading i.fa");
    $("#togglesOne .panel-heading").click(function () {
        k.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    });
    var _ = $("#togglesTwo .panel-heading i.fa");
    $("#togglesTwo .panel-heading").click(function () {
        _.removeClass("fa-chevron-down").addClass("fa-chevron-up"), $(this).find("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
    }), $('[data-toggle="tooltip"]').tooltip(), $("#map").length && google.maps.event.addDomListener(window, "load", function () {
        var e = {zoom: 14, scrollwheel: !1, center: new google.maps.LatLng(53.385873, -1.471471), styles: []},
            o = new google.maps.Map(document.getElementById("map"), e);
        new google.maps.Marker({position: {lat: 53.385873, lng: -1.471471}, map: o, icon: "assets/img/marker.png"})
    })
});
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-71155940-3"]), _gaq.push(["_trackPageview"]), function () {
    var e = document.createElement("script");
    e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(e, o)
}();