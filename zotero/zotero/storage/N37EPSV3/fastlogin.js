var register_tooltip = {
    userID: 0,
    check: function () {
        var userID = parseInt(register_tooltip.userID);
        if (userID > 0) {
            $.ajax({
                type: "GET",
                url: "http://pass.hujiang.com/quick/account/?act=check_tooltip&userid=" + userID,
                data: "{}",
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                jsonp: "callback",
                success: function (result) {
                    if (result.data.showtips) {
                        //显示标签
                        var url = "http://pass.hujiang.com/q/profile/?returnurl=" + encodeURIComponent(document.location.href);
                        $(".pass_register_tooltip").show();
                        $(".pass_register_tooltip").attr("href", "http://pass.hujiang.com/q/profile/?template=ting&returnurl=" + encodeURIComponent(document.location.href));
                        $(".pass_register_tooltip").click(function () {
                            if (typeof SendEvent !== 'undefined') { SendEvent(2, 23) }
                        });
                    }
                }
            });
        }
    }
};

window.hjquicklogin = {
    init: function () {
        var me = this;

        $(".fastLogin").click(function () {
            me.doLogin();
        });
        $(".fastRegister").click(function () {
            me.doRegiste();
        });
    },

    doLogin: function () {
        HJPassport.show('login');
    },

    doRegiste: function () {
        HJPassport.show('register');
    }
};

var qlSource = "ting";

$(function () {
    var api_sld = "//pass";
    if (window.location.host == 'local.ting.hujiang.com' || window.location.host == 'ting2.hujiang.com')
        api_sld = '//pass2';

    if (typeof HJPassport !== 'undefined') {
        HJPassport.init({
            API_SLD: api_sld,
            source: qlSource
        });
        $(".fastLogin").click(function () {
            HJPassport.show('login');
        });
        $(".fastRegister").click(function () {
            HJPassport.show('register');
        });
    }
    window.hjquicklogin.init();
    //页面上需要给register_tooltip.userID 赋值
    register_tooltip.check();
});