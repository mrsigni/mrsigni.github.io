$(document).ready(function(){function t(){window.onbeforeunload=null,setTimeout(function(){unload()},1e3)}$("a, button").click(function(){t()}),$("form").submit(function(){t()});var e=$(".signin");$("#signin, .js-open-signin").on("click",function(){e.addClass("open")}),$(".signin__close").on("click",function(){e.removeClass("open")});var n=$("#signinform"),o=$("#resetpassform");n.find("#signin-btn");var i=$(".form-alert"),p=n.find("a").attr("data-url"),g=n.find("a").attr("data-lpl"),u='Oops! No account was found with that email, please try again or <a href="" data-url="'+p+'" data-lpl="'+g+'">Create an account</a>';function r(a,s){i.html(s).fadeIn("fast"),a.addClass("invalid")}n.submit(function(){var a=$("#email"),s=$("#password"),m=a.val(),w=s.val();return a.add(s).removeClass("valid invalid"),m.trim()?/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(m.trim())?w.trim()?(a.removeClass("invalid"),i.html(u).fadeIn("fast"),!1):(a.removeClass("invalid"),r(s,"Oops! You forgot to enter a password"),!1):(r(a,"Uh oh! The email address is invalid"),!1):(r(a,"Oops! You forgot to enter an email address"),!1)}),o.submit(function(){var a=$("#emailreset"),s=a.val();return a.removeClass("valid invalid"),s.trim()?/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(s.trim())?(a.removeClass("invalid"),i.html(u),!1):(r(a,"Uh oh! The email address is invalid"),!1):(r(a,"Oops! You forgot to enter an email address"),!1)}),$("#forgotpass").on("click",function(){$(".signin__default").add(i).hide(),$("input").removeClass("invalid").val(""),$(".signin__resetpassword").fadeIn("slow")}),$("#signindefault").on("click",function(){$(".signin__resetpassword").add(i).hide(),$("input").removeClass("invalid").val(""),$(".signin__default").fadeIn("slow")}),$(document).click(function(a){$(a.target).closest(".signin, #signin").length||$("body").find(".signin").removeClass("active")})});var d=$(".modal"),c=$(".modal__inner"),_=$(".modal__content__title"),C=$(".modal__content__desc"),b=$(".modal__content__cta");$("#player");var l=$("#play");$(".player__os");$("#player-poster");$(".player__poster__state");var f=$("#player-loader");$("#iframe");var h=2500,v=function(t){var e=t.attr("data-trigger"),n,o,i;switch(e){case"default":n='Activate your <span class="primary-clr">FREE</span> Account!',o='You must create an account to live <span class="font-weight-bold">stream this match!</span>',i="Continue to Stream for FREE";break;case"watch-later":n="Record and Watch Later!",o='Sign up for <span class="font-weight-bold">Free</span> and <span class="font-weight-bold">record matches and watch them on your time!</span>',i="Create Free Account";break;case"watch-highlights":n="Watch Game Highlights!",o='Sign up for <span class="font-weight-bold">Free</span> and <span class="font-weight-bold">stream live matches</span> and <span class="font-weight-bold">watch previous match highlights!</span>',i="Create Free Account";break}_.html(n),C.html(o),b.html(i)},y=function(t){d.fadeIn(),v(t),setTimeout(function(){c.addClass("active")},250)};$(document).ready(function(){$(".preloader-overlay").removeClass("active"),setTimeout(function(){$(".preloader-overlay").hide()},1e3),$(".js-trigger").on("click",function(){y($(this))}),$(".modal__close").on("click",function(){c.removeClass("active"),setTimeout(function(){d.fadeOut()},250)});var t=navigator.userAgent.toLowerCase(),e=t.match(/(iphone|ipod|ipad)/);e&&$("video").prop("muted",!0),l.on("click",function(n){l.hide(),f.fadeIn(1e3),v($(this)),setTimeout(function(){d.show()},h),setTimeout(function(){c.addClass("active"),f.hide(),l.show()},h+250)})});$(document).ready(function(){$(".nav-teams a").each(function(){var t=$(this),e=t.attr("data-name");(e=="Albuquerque Isotopes"||e=="American"||e=="Canada U18"||e=="Memphis Redbirds"||e=="National"||e=="Northeastern Huskies"||e=="Omaha Storm Chasers"||e=="Rochester Red Wings"||e=="South Florida Bulls"||e=="Southeastern Fire")&&t.remove()})});
