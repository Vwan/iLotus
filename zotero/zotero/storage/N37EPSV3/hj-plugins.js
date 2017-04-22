
var HJPlugins = HJPlugins || function () {
    return {
        append: function (el) {
            var id = "p_footer_more";
            var more = document.getElementById(id);
            if (!more) {
                more = document.createElement("div");
                more.id = id;
                document.body.appendChild(more);
            }
            if (typeof (el) == 'string') {
                more.insertAdjacentHTML('beforeEnd', el);
            }
            else {
                more.appendChild(el);
            }
        },

        //分析请求字串
        parseQuery: function (query) {
            var str = (query || "").replace(/^#/, "");
            arr = str.split('&');
            var params = {};
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('=');
                var name = arr2[0].toLowerCase();
                var value = decodeURIComponent(arr2[1]);
                if (value.match(/%[0-9A-F]{2}/)) {
                    value = decodeURIComponent(value);
                }
                params[name] = value;
            }
            return params;

        },

        BDShareSlide: function (options) {
            try {
                var defaults = {
                    bdimg: 1, //浮动按钮风格 0-8
                    bdtop: 250 //浮窗高度 默认100px
                };

                var options = $.extend(defaults, options);

                var s1 = document.createElement("script");
                s1.id = "bdshare_slide_js";
                s1.text = "window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"slide\":{\"type\":\"slide\",\"bdImg\":\"" + options.bdimg + "\",\"bdPos\":\"right\",\"bdTop\":\"" + options.bdtop + "\"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];";
                HJPlugins.append(s1);
            } catch (error) {

            }
        },

        BDShareImg: function (container) {
            try {
                var s1 = document.createElement("div");
                s1.innerHTML = "<div class=\"bdsharebuttonbox\"><a href=\"#\"class=\"bds_qzone\"data-cmd=\"qzone\"title=\"分享到QQ空间\"></a><a href=\"#\"class=\"bds_tsina\"data-cmd=\"tsina\"title=\"分享到新浪微博\"></a><a href=\"#\"class=\"bds_tqq\"data-cmd=\"tqq\"title=\"分享到腾讯微博\"></a><a href=\"#\"class=\"bds_renren\"data-cmd=\"renren\"title=\"分享到人人网\"></a><a href=\"#\"class=\"bds_weixin\"data-cmd=\"weixin\"title=\"分享到微信\"></a><a href=\"#\"class=\"bds_more\"data-cmd=\"more\"></a></div>";

                var s2 = document.createElement("script");
                s2.text = "window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"share\":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];";

                $(container).append(s1);
                $(container).append(s2);
            } catch (error) {
            }
        },

        hjqrcode: function (opts,obj) {
            var defaults = {
                width: 110,
                qrcode: window.location.href,
                sitename: "m.hujiang.com",
                top:130,
                title: "扫码触屏 精彩随身",
                qrkey: "",
                qrcodeimg: ""
            };

            var options = $.extend({}, defaults, opts);

            try {
                addCssByLink('https://common.hjfile.cn/css/hjqrcode.css');
                var isWebkit = 'WebkitAppearance' in document.documentElement.style;
                var renderWay = '';
                if (isWebkit) {
                    renderWay = 'canvas';
                } else {
                    renderWay = 'table';
                }

                var langs = getLangs();
                if(langs == "fr"){
                    $(obj).append("<img src='http://i2.w.hjfile.cn/doc/201507/23eb9784c9da43dea75d8b3f4829d42d.jpg' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>扫码关注微信号<br/>粉丝福利多</div>");
                } else if (langs == "jp") {
                    $(obj).append("<img src='http://i2.w.hjfile.cn/doc/201511/cd58b58b07aa4ff5afdb4b31cd5d0c47.jpg' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>加沪江日语殿为好友<br/>组队学习 名师解惑</div>");
                }else if(langs == "de"){
                    $(obj).append("<img src='http://i2.w.yun.hjfile.cn/doc/201508/cc83c034-88a4-4ece-9297-95afcf74464f_00.jpg' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>扫码关注德语君微信</div>");
                }else if(langs == "es"){
                    $(obj).append("<img src='http://i2.w.yun.hjfile.cn/doc/201508/cc83c034-88a4-4ece-9297-95afcf74464f_02.jpg' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>扫码关注西语君微信</div>");
                }else if(langs == "th"){
                    $(obj).append("<img src='http://i2.w.yun.hjfile.cn/doc/201508/cc83c034-88a4-4ece-9297-95afcf74464f_01.jpg' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>扫码关注泰语君微信</div>");
                }else if(langs == "it"){
                    $(obj).append("<img src='http://i2.w.hjfile.cn/doc/201510/60820c1f6b5f4c78a744bd7a9d8a77e1.png' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>扫码关注意语君微信</div>");
                }else if(langs == "en"){
                    $(obj).append("<img src='http://i2.w.hjfile.cn/doc/201512/a5499a2b82e74df5af39642e5c73e550.png' style='width:110px;' />")
                        .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>扫一扫 获得个性化<br />英语学习计划</div>");
                }
                else {
                    //channel统计，并生成短连接
                    if (!!opts.qrcodeimg) {
                        //直接生成图片
                        $(obj).append("<img src='" + opts.qrcodeimg + "' />")
                            .css({ "width": options.width, "top": options.top + 'px' })
                            .append("<div class='qr_title'>" + options.title + "<br/>" + options.sitename + "</div>");

                    } else {
                        GetStatisticsUrl(options, function (qrCodeUrl) {

                            $(obj).qrcode({
                                render: renderWay,
                                width: options.width,
                                height: options.width,
                                text: qrCodeUrl
                            }).css({ "width": options.width, "top": options.top + 'px' }).attr("data-url", options.qrcode)
                            .append("<div class='qr_title'>" + options.title + "<br/>" + options.sitename + "</div>");
                        });
                    }
                }

            } catch (error) {

            }
        },

        hjqrcodeGeneration: function (opts, obj) {
            var defaults = {
                width: 150,
                qrcode: window.location.href
            };

            var options = $.extend({}, defaults, opts);

            try {
                addCssByLink('https://common.hjfile.cn/css/hjqrcode.css');
                var isWebkit = 'WebkitAppearance' in document.documentElement.style;
                var renderWay = '';
                if (isWebkit) {
                    renderWay = 'canvas';
                } else {
                    renderWay = 'table';
                }
                //channel统计，并生成短连接

                GetStatisticsUrl(options, function (qrCodeUrl) {

                    $(obj).qrcode({
                        render: renderWay,
                        width: options.width,
                        height: options.width,
                        text: qrCodeUrl
                    }).css({ "width": options.width });
                });

            } catch (error) {

            }
        },

        qr_close: function (o) {
            $(o).parent().hide();
            ht.sendCustomEvent('pc_qrcode_close');
        }

    };
}();


$(document).ready(function () {

    $("#plugin_bdshare").each(function () {
        var args = HJPlugins.parseQuery($(this).attr("data-args"));
        HJPlugins.BDShareSlide(args);
    });

    $(".plugin_bdshare_img").each(function () {
        HJPlugins.BDShareImg(this);
    });

    $('.plugin_qrcode').each(function () {
        var that = this;
        setTimeout(function(){
            if($('.lamu_banner').length>0){
                return false;
            }
            else{
                var args = HJPlugins.parseQuery($(that).attr("data-args"));
                $(that).append("<a onclick=\"HJPlugins.qr_close(this);\" href=\"javascript:void(0);\" class=\"qr_close\" title=\"点击关闭\"><img src=\"http://i2.w.yun.hjfile.cn/doc/201404/69cad619917c4d6cbb728fd3d49c6111.png\" /></a>");
                HJPlugins.hjqrcode(args,that);
            }
        },3000);
    })
});

function addCssByLink(url) {
    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);
}

function getLangs() {
    var array = location.host.match(/\w*?(www|jp|en|kr|fr|es|de|th|ru|it)\.(hujiang|hjenglish)\.\w+$/) || [];
    var langs = array[1] || '';
    var domain = array[2] || 'hujiang';
    if(langs === 'www') {
        if(domain === 'hujiang') {
            langs = 'all';
        } else if(domain === 'hjenglish') {
            langs = 'en';
        }
    }
    return langs;
}

function GetStatisticsUrl(opts, callback) {
    var qrkey = opts.qrkey;
    var url = opts.qrcode;
    var langs = getLangs();
    var key = "site_" + langs + "_hjqrcode";
    if (qrkey != "") {
        key = qrkey;
    }
    var tongjiUrl = "http://channel.hujiang.com/ch_click.aspx?ch_source=" + key + "&page=" + url;
    if (langs == "en" ||
        langs == "jp" ||
        langs == "kr" ||
        langs == "fr" ||
        langs == "es" ||
        langs == "de" ||
        langs == "th" ||
        langs == "ru" ||
        langs == "xyz" ||
        langs == "cn" ||
        langs == "xx" ||
        langs == "zx" ||
        langs == "gk" ||
        langs == "lx" ||
        langs == "ye"
        ) {
        if (url.indexOf("?") != -1) {
            tongjiUrl = url + "&ch_source=" + key;
        } else {
            tongjiUrl = url + "?ch_source=" + key;
        }
    } 

    callback(tongjiUrl);
    /*
    var apiSinaShortUrl = "http://api.weibo.com/2/short_url/shorten.json";
    
    $.ajax({
        type: "GET",
        url: apiSinaShortUrl,
        data: { source: "1681459862", url_long: tongjiUrl },
        dataType: "jsonp",
        jsonp: "callback",
        success: function (json) {
            if (json != null && json.data != null && json.data.urls.length > 0 && json.data.urls[0].url_short != "") {
                callback(json.data.urls[0].url_short);
            } else {
                callback(tongjiUrl);
            }
        },
        error: function () {
            callback(tongjiUrl);
        }
    });
    */
}

//用于对一长串字串生成一个类似md5标识的简单方法
function toCode(str, length) {
    var str = str || "0";
    var length = length || 16; //最大长度16位
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        num += str.charCodeAt(i) * i;
    }
    return num.toString(16).substr(0, length);
}