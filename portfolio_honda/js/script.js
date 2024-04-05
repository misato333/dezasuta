(function (d) {
    var config = {
            kitId: "qcm6xmp",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

$(function () {
    $(".sp_btn, .sp_nav li").on("click", function () {
        $(".sp_nav").fadeToggle();
        $(".sp_btn").toggleClass("open");
    });
});

$(window).on("loading", function () {
    $(".loading").delay(500).fadeOut(500);
    $(".loading").delay(800).fadeOut(700);
});
setTimeout(function () {
    $(".loading").fadeOut(300);
}, 3000);

var flg = null;
var check_access = function () {
    // ★sessionStorageの値を判定
    if (sessionStorage.getItem("access_flg")) {
        // 2回目以降
        flg = 1;
    } else {
        // 1回目
        sessionStorage.setItem("access_flg", true);
        flg = 0;
    }
    return flg;
};

var $i = check_access();
if ($i == 0) {
    // 1回目アクセスの処理
} else {
    // 2回目アクセスの処理
}

// フェードイン
// aimation呼び出し
const scrollTrigger = document.querySelectorAll(".js-scroll-trigger");

// aimation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// aimation関数
function scrollAnimation(trigger) {
    window.addEventListener("scroll", function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll =
                    window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add("is-active");
            }
        }
    });
}
