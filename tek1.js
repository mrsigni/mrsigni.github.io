var js = {};
!function(g) {
    g(document).on("click", ".se-q", function() {
        var a = g(this).parents(".se-c");
        var c = a.find(".se-a");
        var b = a.find(".se-t");
        c.slideToggle(200);
        if (b.hasClass("se-o")) {
            b.removeClass("se-o")
        } else {
            b.addClass("se-o")
        }
    });
    g(document).on("click", "#top-page", function() {
        g("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false
    });
    g(document).on("click", "#discoverclic", function() {
        g(this).addClass("hidde");
        g("#closediscoverclic").removeClass("hidde");
        g("#discover").addClass("show");
        g("#requests").addClass("hidde");
        g(".requests_menu").addClass("hidde");
        g(".requests_menu_filter").removeClass("hidde")
    });
    g(document).on("click", "#closediscoverclic", function() {
        g(this).addClass("hidde");
        g("#discoverclic").removeClass("hidde");
        g("#discover").removeClass("show");
        g("#requests").removeClass("hidde");
        g(".requests_menu_filter").addClass("hidde");
        g(".requests_menu").removeClass("hidde")
    });
    g(document).on("click", ".filtermenu a", function() {
        var a = g(this).attr("data-type");
        g(".filtermenu a").removeClass("active");
        g(this).addClass("active");
        g("#type").val(a);
        return false
    });
    g(document).on("click", ".rmenu a", function() {
        var a = g(this).attr("data-tab");
        g(".rmenu a").removeClass("active");
        g(".tabox").removeClass("current");
        g(this).addClass("active");
        g("#" + a).addClass("current");
        return false
    });
    g(document).on("click", ".clicklogin", function() {
        g(".login_box ").show()
    });
    g(document).on("click", "#c_loginbox", function() {
        g(".login_box ").hide()
    });
    g(document).on("click", ".nav-resp", function() {
        g("#arch-menu").toggleClass("sidblock");
        g(".nav-resp").toggleClass("active")
    });
    g(document).on("click", ".nav-advc", function() {
        g("#advc-menu").toggleClass("advcblock");
        g(".nav-advc").toggleClass("dactive")
    });
    g(document).on("click", ".report-video", function() {
        g("#report-video").toggleClass("report-video-active");
        g(".report-video").toggleClass("report-video-dactive")
    });
    g(document).on("click", ".adduser", function() {
        g("#register_form").toggleClass("advcblock");
        g(".form_fondo").toggleClass("advcblock");
        g(".adduser").toggleClass("dellink")
    });
    g(document).on("click", ".search-resp", function() {
        g("#form-search-resp").toggleClass("formblock");
        g(".search-resp").toggleClass("active")
    });
    g(document).on("click", ".wide", function() {
        g("#playex").toggleClass("fullplayer");
        g(".sidebar").toggleClass("fullsidebar");
        g(".icons-enlarge2").toggleClass("icons-shrink2")
    });
    g(document).on("click", ".sources", function() {
        g(".sourceslist").toggleClass("sourcesfix");
        g(".listsormenu").toggleClass("icon-close2")
    });
    g(document).keyup(function(a) {
        if (a.keyCode == 27) {
            g(".login_box").hide(100);
            g("#result_edit_link").hide(100);
            g("#report-video").removeClass("report-video-active");
            g("#moda-report-video-error").removeClass("show");
            g("#moda-report-video-error").addClass("hidde")
        }
    });
    var f = ["#tvload", "#movload", "#featload", "#epiload", "#seaload", "#slallload", "#sltvload", "#slmovload", ".genreload"];
    g.each(f, function(a, b) {
        if (g(b).length >= 1) {
            g(".content").ready(function() {
                g(b).css("display", "none")
            });
            g(".content").load(function() {
                g(b).css("display", "none")
            })
        }
    });
    for (var e = 0, d = g(".items .item"), h = 0; h <= d.length; h++) {
        e > 3 ? (g(".items .item:nth-child(" + h + ") .dtinfo").addClass("right"),
        5 > e ? e++ : (e--,
        e--,
        e--,
        e--)) : (g(".items .item:nth-child(" + h + ") .dtinfo").addClass("left"),
        e++)
    }
    g.fn.exists = function() {
        return e(this).length > 0
    }
    ,
    js.model = {
        events: {},
        extend: function(a) {
            var i = g.extend({}, this, a);
            return g.each(i.events, function(j, c) {
                i._add_event(j, c)
            }),
            i
        },
        _add_event: function(a, m) {
            var l = this
              , k = a
              , j = ""
              , i = document;
            a.indexOf(" ") > 0 && (k = a.substr(0, a.indexOf(" ")),
            j = a.substr(a.indexOf(" ") + 1)),
            "resize" != k && "scroll" != k || (i = window),
            g(i).on(k, j, function(c) {
                c.$el = g(this),
                "function" == typeof l.event && (c = l.event(c)),
                l[m].apply(l, [c])
            })
        }
    },
    js.header = js.model.extend({
        $header: null,
        $sub_header: null,
        active: 0,
        hover: 0,
        show: 0,
        y: 0,
        opacity: 1,
        direction: "down",
        events: {
            ready: "ready",
            scroll: "scroll",
            "mouseenter #header": "mouseenter",
            "mouseleave #header": "mouseleave"
        },
        ready: function() {
            this.$header = g("#header"),
            this.$sub_header = g("#sub-header"),
            this.active = 1
        },
        mouseenter: function() {
            var a = g(window).scrollTop();
            this.hover = 1,
            this.opacity = 1,
            this.show = a,
            this.$header.stop().animate({
                opacity: 1
            }, 250)
        },
        mouseleave: function() {
            this.hover = 0
        },
        scroll: function() {
            if (this.active) {
                var a = g(window).scrollTop()
                  , m = a >= this.y ? "down" : "up"
                  , l = m !== this.direction
                  , k = (a - this.y,
                this.$sub_header.outerHeight());
                clearTimeout(this.t),
                70 > a && this.$header.removeClass("-white"),
                l && (0 == this.opacity && "up" == m ? (this.show = a,
                k > a ? this.show = 0 : this.show -= 70) : 1 == this.opacity && "down" == m && (this.show = a),
                this.show = Math.max(0, this.show)),
                this.$header.hasClass("-open") && (this.show = a),
                this.hover && (this.show = a);
                var j = a - this.show;
                j = Math.max(0, j),
                j = Math.min(j, 70);
                var i = (70 - j) / 70;
                this.$header.css("opacity", i),
                a > k ? this.$header.addClass("-white") : 0 == i && this.$header.removeClass("-white"),
                this.y = a,
                this.direction = m,
                this.opacity = i
            }
        }
    })
}(jQuery);
!function(e) {
    var c = (function() {
        var f = 0;
        return function(h, g) {
            clearTimeout(f);
            f = setTimeout(h, g)
        }
    }
    )();
    var d = false;
    enterActive = true;
    e('input[name="s"]').on("input", function() {
        var f = this.value;
        c(function() {
            if (f.length <= 2) {
                e(dtGonza.area).hide();
                e(dtGonza.button).find("span").removeClass("fa-spinner-third").removeClass("fa-spin");
                return
            }
            if (!d) {
                d = true;
                if (dtGonza.livesearchactive == true) {
                    e(dtGonza.button).find("span").addClass("fa-spinner-third").addClass("fa-spin");
                    e(dtGonza.area).find("ul").addClass("process").addClass("noselect");
                    e.ajax({
                        type: "GET",
                        url: dtGonza.api,
                        data: "keyword=" + f + "&nonce=" + dtGonza.nonce,
                        dataType: "json",
                        success: function(j) {
                            if (j.error) {
                                e(dtGonza.area).hide();
                                return
                            }
                            e(dtGonza.area).show();
                            var i = '<span class="icon-search-1">' + f + "</span>"
                              , k = dtGonza.more.replace("%s", i)
                              , h = '<li class="ctsx"><a class="more live_search_click" data-search="searchform">' + k + "</a></li>";
                            moreText2 = '<li class="ctsv"><a class="more live_search_click" data-search="form-search-resp">' + k + "</a></li>";
                            var g = [];
                            e.each(j, function(l, m) {
                                name = "";
                                date = "";
                                imdb = "";
                                if (m.extra["date"] !== false) {
                                    date = '<span class="release">(' + m.extra["date"] + ")</span>"
                                }
                                if (m.extra["imdb"] !== false) {
                                    imdb = '<div class="imdb"><span class="fas fa-star"></span> ' + m.extra["imdb"] + "</div>"
                                }
                                g.push('<li id="' + l + '"><a href="' + m.url + '" class="clearfix"><div class="poster"><img src="' + m.img + '" /></div><div class="title">' + m.title + date + "</div>" + imdb + "</a></li>")
                            });
                            e(dtGonza.area).html("<ul>" + g.join("") + h + "</ul>")
                        },
                        complete: function() {
                            d = false;
                            enterActive = false;
                            e(dtGonza.button).find("span").removeClass("fa-spinner-third").removeClass("fa-spin");
                            e(dtGonza.area).find("ul").removeClass("process").removeClass("noselect")
                        }
                    })
                }
            }
        }, 500)
    });
    e(document).on("click", ".live_search_click", function() {
        var f = e(this).data("search");
        if (f != false) {
            e("#" + f).submit()
        }
    });
    e(document).on("keypress", "#search-form", function(f) {
        if (enterActive) {
            return f.keyCode != 13
        }
    });
    e(document).click(function() {
        var f = e(event.target);
        if (e(event.target).closest(".lglossary").length == 0) {
            e(".items_glossary").hide();
            e(".lglossary").removeClass("active")
        } else {
            e(".items_glossary").show()
        }
    });
    e(document).on("click", ".post-request", function() {
        e(".post_request").show();
        e("#post_request_archive").html('<div class="load_event">' + dtAjax.loading + "</div>");
        var f = e(this).data("id");
        e.ajax({
            url: dtAjax.url,
            type: "POST",
            data: {
                id: f,
                action: "dbmovies_post_archive"
            },
            error: function(g) {
                console.log(g)
            },
            success: function(g) {
                e("#post_request_archive").html(g);
                e(".backdrop").click(function() {
                    e(".post_request").hide()
                })
            }
        })
    });
    function a(h, g, f) {
        e("#tmdb-" + h).html('<div class="itm-exists">' + dtAjax.loading + "</div>");
        e.ajax({
            url: dtAjax.url,
            type: "POST",
            data: {
                id: h,
                type: g,
                nonce: f,
                action: "dbmovies_post_requests"
            },
            error: function(i) {
                console.log(i)
            },
            success: function(i) {
                console.log(i);
                e("#tmdb-" + h).html('<div class="itm-exists">' + dtAjax.ready + "</div>")
            }
        })
    }
    function b() {
        var f = e("#term").val();
        var j = e("#page").val();
        var h = e("#type").val();
        var g = e("#nonce").val();
        var i = e("#action").val();
        e("#get_requests").find("span").addClass("fa-spinner-third").addClass("fa-spin");
        e.ajax({
            url: dtAjax.url,
            type: "POST",
            data: {
                type: h,
                term: f,
                page: j,
                nonce: g,
                action: i
            },
            error: function(k) {
                console.log(k)
            },
            success: function(k) {
                e("#get_requests").find("span").removeClass("fa-spinner-third").removeClass("fa-spin");
                e("#discover_results").html(k);
                e(".get_content_dbmovies").click(function() {
                    var n = e(this).data("id");
                    var m = e(this).data("type");
                    var l = e(this).data("nonce");
                    a(n, m, l)
                })
            }
        })
    }
    e("#discover_requests").keyup(function() {
        c(function() {
            b()
        }, 500);
        return false
    });
    e("#discover_requests").submit(function() {
        b();
        return false
    });
    e(document).on("click", ".lglossary", function() {
        var f = e(this).data("glossary");
        var g = e(this).data("type");
        e(".lglossary").removeClass("active");
        e(this).addClass("active");
        e(".items_glossary").show();
        e(".items_glossary").html('<div class="onloader"></div>');
        e.ajax({
            type: "GET",
            url: dtGonza.glossary,
            data: "term=" + f + "&nonce=" + dtGonza.nonce + "&type=" + g,
            dataType: "json",
            success: function(i) {
                if (i.error) {
                    e(".items_glossary").hide();
                    e(".lglossary").removeClass("active");
                    return
                }
                e(".items_glossary").show();
                var h = [];
                e.each(i, function(j, k) {
                    imdb = "";
                    if (k.imdb !== false) {
                        imdb = '<div class="rating"><i class="fas fa-star"></i> ' + k.imdb + "</div>"
                    }
                    h.push('<div id="' + j + '" class="item"><a href="' + k.url + '"><div class="poster"><img src="' + k.img + '"/>' + imdb + '</div></a><div class="data"><h3>' + k.title + "</h3><span>" + k.year + "</span></div></div>")
                });
                e(".items_glossary").html('<div class="items animation-2">' + h.join("") + "</div>")
            }
        })
    });
    e(document).keyup(function(f) {
        if (f.keyCode == 27) {
            e(".post_request").hide();
            e(".items_glossary").hide();
            e(".items_glossary").html(" ");
            e(".lglossary").removeClass("active")
        }
        if (f.keyCode == 39) {
            e("#nextpagination").trigger("click")
        }
        if (f.keyCode == 37) {
            e("#prevpagination").trigger("click")
        }
    })
}(jQuery);
!function(c, d) {
    "use strict";
    var e = !1
      , n = !1;
    if (d.querySelector)
        if (c.addEventListener)
            e = !0;
    if (c.wp = c.wp || {},
    !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function(e) {
            var t = e.data;
            if (t)
                if (t.secret || t.message || t.value)
                    if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                        for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++)
                            n[o].style.display = "none";
                        for (o = 0; o < s.length; o++)
                            if (r = s[o],
                            e.source === r.contentWindow) {
                                if (r.removeAttribute("style"),
                                "height" === t.message) {
                                    if (1e3 < (i = parseInt(t.value, 10)))
                                        i = 1e3;
                                    else if (~~i < 200)
                                        i = 200;
                                    r.height = i
                                }
                                if ("link" === t.message)
                                    if (a = d.createElement("a"),
                                    i = d.createElement("a"),
                                    a.href = r.getAttribute("src"),
                                    i.href = t.value,
                                    i.host === a.host)
                                        if (d.activeElement === r)
                                            c.top.location.href = t.value
                            }
                    }
        }
        ,
        e)
            c.addEventListener("message", c.wp.receiveEmbedMessage, !1),
            d.addEventListener("DOMContentLoaded", t, !1),
            c.addEventListener("load", t, !1);
    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret"))
                    t = Math.random().toString(36).substr(2, 10),
                    e.src += "#?secret=" + t,
                    e.setAttribute("data-secret", t);
                if (r || a)
                    (t = e.cloneNode(!0)).removeAttribute("security"),
                    e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
