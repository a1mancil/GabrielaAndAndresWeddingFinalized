function initMap() {
    var e = { lat: 22.5932759, lng: 88.27027720000001 },
        t = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 15, center: e, scrollwheel: !1 });
    new google.maps.Marker({ position: e, map: t });
}
function initBBSRMap() {
    var e = { lat: 20.305826, lng: 85.85480189999998 },
        t = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 15, center: e, scrollwheel: !1 });
    new google.maps.Marker({ position: e, map: t });
}
function alert_markup(e, t) {
    return '<div class="alert alert-' + e + '" role="alert">' + t + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
$(document).ready(function () {
    $(".wp1").waypoint(
        function () {
            $(".wp1").addClass("animated fadeInLeft");
        },
        { offset: "75%" }
    ),
        $(".wp2").waypoint(
            function () {
                $(".wp2").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".wp3").waypoint(
            function () {
                $(".wp3").addClass("animated fadeInLeft");
            },
            { offset: "75%" }
        ),
        $(".wp4").waypoint(
            function () {
                $(".wp4").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".wp5").waypoint(
            function () {
                $(".wp5").addClass("animated fadeInLeft");
            },
            { offset: "75%" }
        ),
        $(".wp6").waypoint(
            function () {
                $(".wp6").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".wp7").waypoint(
            function () {
                $(".wp7").addClass("animated fadeInUp");
            },
            { offset: "75%" }
        ),
        $(".wp8").waypoint(
            function () {
                $(".wp8").addClass("animated fadeInLeft");
            },
            { offset: "75%" }
        ),
        $(".wp9").waypoint(
            function () {
                $(".wp9").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".flexslider").flexslider({ animation: "slide" }),
        $(".single_image").fancybox({ padding: 4 }),
        $(".fancybox").fancybox({ padding: 4, width: 1e3, height: 800 }),
        $('[data-toggle="tooltip"]').tooltip(),
        $(".nav-toggle").click(function () {
            $(this).toggleClass("active"), $(".header-nav").toggleClass("open"), event.preventDefault();
        }),
        $(".header-nav li a").click(function () {
            $(".nav-toggle").toggleClass("active"), $(".header-nav").toggleClass("open");
        }),
        $(function () {
            $(window).scroll(function () {
                20 <= $(window).scrollTop()
                    ? ($("section.navigation").addClass("fixed"), $("header").css({ "border-bottom": "none", padding: "35px 0" }), $("header .member-actions").css({ top: "26px" }), $("header .navicon").css({ top: "34px" }))
                    : ($("section.navigation").removeClass("fixed"),
                      $("header").css({ "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)", padding: "50px 0" }),
                      $("header .member-actions").css({ top: "41px" }),
                      $("header .navicon").css({ top: "48px" }));
            });
        }),
        $(function () {
            $("a[href*=#]:not([href=#])").click(function () {
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                    var e = $(this.hash);
                    if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({ scrollTop: e.offset().top - 90 }, 2e3), !1;
                }
            });
        });
    var e = document.getElementsByClassName("share-bar"),
        t = document.createElement("script");
    (t.type = "text/javascript"), (t.async = !0), (t.src = "https://apis.google.com/js/platform.js");
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(t, a);
    for (var n = 0; n < e.length; n++) {
        var o =
            '<iframe allowtransparency="true" frameborder="0" scrolling="no"src="https://platform.twitter.com/widgets/tweet_button.html?url=' +
            encodeURIComponent(window.location) +
            "&amp;text=" +
            encodeURIComponent(document.title) +
            '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"style="width:105px; height:21px;"></iframe><iframe src="//www.facebook.com/plugins/like.php?href=' +
            encodeURIComponent(window.location) +
            '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe><div class="g-plusone" data-size="medium"></div>';
        (e[n].innerHTML = o), (e[n].style.display = "inline-block");
    }
    $(".player").YTPlayer(),
        $("#btn-show-map").click(function () {
            $("#map-content").toggleClass("toggle-map-content"), $("#btn-show-content").toggleClass("toggle-map-content");
        }),
        $("#btn-show-content").click(function () {
            $("#map-content").toggleClass("toggle-map-content"), $("#btn-show-content").toggleClass("toggle-map-content");
        });
    var r = createCalendar({
        options: { class: "", id: "" },
        data: {
            title: "Andres and Gabriela's Wedding",
            start: new Date('Oct 28, 2023 13:00'),
            end: new Date('Oct 29, 2023 00:00'),
            address: 'San Diego, California',
            description: "Mass | Misa: 'Our Lady of Mount Carmel' - 13541 Stoney Creek Rd, San Diego, CA 92129\n\n" 
                        +"Reception | Recepción: 'BLVD Hall' - 4265 El Cajon Blvd, San Diego, CA 92105"
        },
    });
    $("#add-to-cal").html(r),
        $("#rsvp-form").on("submit", function (e) {
            e.preventDefault();
            var t = $(this).serialize();
            console.log("rsvp form submitted");
     
            $("#rsvp-Button").prop('disabled', true)  

            $("#alert-wrapper")
            .html(
                alert_markup
                 ("info", "<strong>Just a sec! | ¡Un segundo!</strong> We are saving your details! | ¡Estamos guardando tus datos!")),
                "b0e53b10c1f55ede516b240036b88f40" !== MD5($("#invite_code").val()) && "2ac7f43695eb0479d5846bb38eec59cc" !== MD5($("#invite_code").val())
                    ? $("#alert-wrapper").html(alert_markup("danger", "<strong>Sorry! | ¡Lo siento! </strong> Your invite code is incorrect | Su código de invitación es incorrecto"))
                    : $.post("https://script.google.com/macros/s/AKfycbwYu-NC_43CC3mfcOFdsgOnyJI5SfqBivg3lExQ_7uKm-KUo7J4m4TbqJZWJ4p0yV0X-A/exec", t)
                          .done(function (e) {
                            console.log(e), "error" === e.result ? $("#alert-wrapper").html(alert_markup("danger", e.message)) : ($("#alert-wrapper").html(""), $("#rsvp-modal").modal("show"));
                                    //$("#rsvp-Button").css('display','inline-block');
                            $("#rsvp-Button").prop('disabled', false);
                          })
                          .fail(function (e) {
                              console.log(e), $("#alert-wrapper").html(alert_markup("danger", "<strong>Sorry! | ¡Lo siento!</strong> There is some issue with the server | Hay algún problema con el servidor"));
                              $("#rsvp-Button").prop('disabled', false);
                           });
            
            

        });
        //$("#rsvp-form").reset();
});
var MD5 = function (e) {
    function l(e, t) {
        return (e << t) | (e >>> (32 - t));
    }
    function c(e, t) {
        var a, n, o, r, i;
        return (
            (o = 2147483648 & e),
            (r = 2147483648 & t),
            (i = (1073741823 & e) + (1073741823 & t)),
            (a = 1073741824 & e) & (n = 1073741824 & t) ? 2147483648 ^ i ^ o ^ r : a | n ? (1073741824 & i ? 3221225472 ^ i ^ o ^ r : 1073741824 ^ i ^ o ^ r) : i ^ o ^ r
        );
    }
    function t(e, t, a, n, o, r, i) {
        var s;
        return (e = c(e, c(c(((s = t) & a) | (~s & n), o), i))), c(l(e, r), t);
    }
    function a(e, t, a, n, o, r, i) {
        var s;
        return (e = c(e, c(c((t & (s = n)) | (a & ~s), o), i))), c(l(e, r), t);
    }
    function n(e, t, a, n, o, r, i) {
        return (e = c(e, c(c(t ^ a ^ n, o), i))), c(l(e, r), t);
    }
    function o(e, t, a, n, o, r, i) {
        return (e = c(e, c(c(a ^ (t | ~n), o), i))), c(l(e, r), t);
    }
    function r(e) {
        var t,
            a = "",
            n = "";
        for (t = 0; t <= 3; t++) a += (n = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(n.length - 2, 2);
        return a;
    }
    var i,
        s,
        p,
        d,
        m,
        f,
        g,
        h,
        u,
        w = Array();
    for (
        w = (function (e) {
            for (var t, a = e.length, n = a + 8, o = 16 * (1 + (n - (n % 64)) / 64), r = Array(o - 1), i = 0, s = 0; s < a; ) (i = (s % 4) * 8), (r[(t = (s - (s % 4)) / 4)] = r[t] | (e.charCodeAt(s) << i)), s++;
            return (i = (s % 4) * 8), (r[(t = (s - (s % 4)) / 4)] = r[t] | (128 << i)), (r[o - 2] = a << 3), (r[o - 1] = a >>> 29), r;
        })(
            (e = (function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", a = 0; a < e.length; a++) {
                    var n = e.charCodeAt(a);
                    n < 128
                        ? (t += String.fromCharCode(n))
                        : (127 < n && n < 2048 ? (t += String.fromCharCode((n >> 6) | 192)) : ((t += String.fromCharCode((n >> 12) | 224)), (t += String.fromCharCode(((n >> 6) & 63) | 128))), (t += String.fromCharCode((63 & n) | 128)));
                }
                return t;
            })(e))
        ),
            f = 1732584193,
            g = 4023233417,
            h = 2562383102,
            u = 271733878,
            i = 0;
        i < w.length;
        i += 16
    )
        (f = t((s = f), (p = g), (d = h), (m = u), w[i + 0], 7, 3614090360)),
            (u = t(u, f, g, h, w[i + 1], 12, 3905402710)),
            (h = t(h, u, f, g, w[i + 2], 17, 606105819)),
            (g = t(g, h, u, f, w[i + 3], 22, 3250441966)),
            (f = t(f, g, h, u, w[i + 4], 7, 4118548399)),
            (u = t(u, f, g, h, w[i + 5], 12, 1200080426)),
            (h = t(h, u, f, g, w[i + 6], 17, 2821735955)),
            (g = t(g, h, u, f, w[i + 7], 22, 4249261313)),
            (f = t(f, g, h, u, w[i + 8], 7, 1770035416)),
            (u = t(u, f, g, h, w[i + 9], 12, 2336552879)),
            (h = t(h, u, f, g, w[i + 10], 17, 4294925233)),
            (g = t(g, h, u, f, w[i + 11], 22, 2304563134)),
            (f = t(f, g, h, u, w[i + 12], 7, 1804603682)),
            (u = t(u, f, g, h, w[i + 13], 12, 4254626195)),
            (h = t(h, u, f, g, w[i + 14], 17, 2792965006)),
            (f = a(f, (g = t(g, h, u, f, w[i + 15], 22, 1236535329)), h, u, w[i + 1], 5, 4129170786)),
            (u = a(u, f, g, h, w[i + 6], 9, 3225465664)),
            (h = a(h, u, f, g, w[i + 11], 14, 643717713)),
            (g = a(g, h, u, f, w[i + 0], 20, 3921069994)),
            (f = a(f, g, h, u, w[i + 5], 5, 3593408605)),
            (u = a(u, f, g, h, w[i + 10], 9, 38016083)),
            (h = a(h, u, f, g, w[i + 15], 14, 3634488961)),
            (g = a(g, h, u, f, w[i + 4], 20, 3889429448)),
            (f = a(f, g, h, u, w[i + 9], 5, 568446438)),
            (u = a(u, f, g, h, w[i + 14], 9, 3275163606)),
            (h = a(h, u, f, g, w[i + 3], 14, 4107603335)),
            (g = a(g, h, u, f, w[i + 8], 20, 1163531501)),
            (f = a(f, g, h, u, w[i + 13], 5, 2850285829)),
            (u = a(u, f, g, h, w[i + 2], 9, 4243563512)),
            (h = a(h, u, f, g, w[i + 7], 14, 1735328473)),
            (f = n(f, (g = a(g, h, u, f, w[i + 12], 20, 2368359562)), h, u, w[i + 5], 4, 4294588738)),
            (u = n(u, f, g, h, w[i + 8], 11, 2272392833)),
            (h = n(h, u, f, g, w[i + 11], 16, 1839030562)),
            (g = n(g, h, u, f, w[i + 14], 23, 4259657740)),
            (f = n(f, g, h, u, w[i + 1], 4, 2763975236)),
            (u = n(u, f, g, h, w[i + 4], 11, 1272893353)),
            (h = n(h, u, f, g, w[i + 7], 16, 4139469664)),
            (g = n(g, h, u, f, w[i + 10], 23, 3200236656)),
            (f = n(f, g, h, u, w[i + 13], 4, 681279174)),
            (u = n(u, f, g, h, w[i + 0], 11, 3936430074)),
            (h = n(h, u, f, g, w[i + 3], 16, 3572445317)),
            (g = n(g, h, u, f, w[i + 6], 23, 76029189)),
            (f = n(f, g, h, u, w[i + 9], 4, 3654602809)),
            (u = n(u, f, g, h, w[i + 12], 11, 3873151461)),
            (h = n(h, u, f, g, w[i + 15], 16, 530742520)),
            (f = o(f, (g = n(g, h, u, f, w[i + 2], 23, 3299628645)), h, u, w[i + 0], 6, 4096336452)),
            (u = o(u, f, g, h, w[i + 7], 10, 1126891415)),
            (h = o(h, u, f, g, w[i + 14], 15, 2878612391)),
            (g = o(g, h, u, f, w[i + 5], 21, 4237533241)),
            (f = o(f, g, h, u, w[i + 12], 6, 1700485571)),
            (u = o(u, f, g, h, w[i + 3], 10, 2399980690)),
            (h = o(h, u, f, g, w[i + 10], 15, 4293915773)),
            (g = o(g, h, u, f, w[i + 1], 21, 2240044497)),
            (f = o(f, g, h, u, w[i + 8], 6, 1873313359)),
            (u = o(u, f, g, h, w[i + 15], 10, 4264355552)),
            (h = o(h, u, f, g, w[i + 6], 15, 2734768916)),
            (g = o(g, h, u, f, w[i + 13], 21, 1309151649)),
            (f = o(f, g, h, u, w[i + 4], 6, 4149444226)),
            (u = o(u, f, g, h, w[i + 11], 10, 3174756917)),
            (h = o(h, u, f, g, w[i + 2], 15, 718787259)),
            (g = o(g, h, u, f, w[i + 9], 21, 3951481745)),
            (f = c(f, s)),
            (g = c(g, p)),
            (h = c(h, d)),
            (u = c(u, m));
    return (r(f) + r(g) + r(h) + r(u)).toLowerCase();
};
