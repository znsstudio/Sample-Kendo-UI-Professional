(function (global) {
    var application,
        mobileSkin = "",
        defaultChartTheme = "silver",
        app = global.app = global.app || {};

    document.addEventListener("DOMContentLoaded", function() {
    }, false);
    
    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();
        if (typeof kendo !== "undefined" ) {
            application = new kendo.mobile.Application(document.body, { transition: "", layout: "mobile-tabstrip"});
        } else {
            document.body.innerHTML = "To run this sample, install Kendo UI Professional manually. For more information, see the sample readme.";
        }
    }, false);
    
    app.chartsTheme = defaultChartTheme;

    //Skin change function is for the demo. On real project only one theme should be chosen.
    app.changeSkin = function (e) {
        if (e.sender.element.text() === "Flat") {
            e.sender.element.text("Native");
            global.app.chartsTheme = "flat";
            mobileSkin = "flat";
        } else {
            e.sender.element.text("Flat");
            global.app.chartsTheme = defaultChartTheme;
            mobileSkin = "";
        }

        application.skin(mobileSkin);
        application.view().show();
    };

    app.emToPx = function (input) {
        var emSize = parseFloat($("body").css("font-size"));
        return (emSize * input);
    };

    app.makeUrlAbsolute = function (url) {
        var anchorEl = document.createElement("a");
        anchorEl.href = url;
        return anchorEl.href;
    };
})(window);