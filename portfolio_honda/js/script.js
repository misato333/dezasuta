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
