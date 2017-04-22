//topbanner
/* global $ */
(function(global){
    'use strict';
    var $ = global.jQuery;
    var TopBannerCookie = {
        set: function(e, a, g, f, d, b) {
            var c;
            null != g && "" != g && (c = new Date, c.setTime(c.getTime() + 1E3 * g));
            document.cookie = escape(e) + "=" + escape(a) + (c ? "; expires=" + c.toGMTString() : "") + (f ? "; path=" + f : "/") + (d ? "; domain=" + d : "") + (b ? "; secure" : "")
        },
        get: function(e) {
            for (var a = document.cookie.split("; "), g = 0; g < a.length; g++) {
                var f =
                a[g].split("=");
                if (f[0] == e)
                    return unescape(f[1])
            }
            return ""
        },
        remove: function(e) {
            var a = new Date;
            a.setTime(a.getTime() - 1);
            document.cookie = e + "=" + TopBannerCookie.get(e) + ";expires=" + a.toGMTString()
        }
    };

    global.TopBanner = {
        optionSource: {},
        setTopBanner:function (option){
            var opt = {
                Title:'',
                IconUrl:'',
                Content:'',
                Link:'',
                imgLocationX:'',
                imgLocationY:'',
                StartDate:''
            };
            $.extend(opt,option || '');
            global.TopBanner.optionSource = opt;


            var cookiename = global.TopBanner.optionSource.Title+new Date(global.TopBanner.optionSource.StartDate).getTime();
            if (TopBannerCookie.get(cookiename) == '1') {
                return;
            }

            var top_banner_html = '<div class="lamu_banner"><div class="top_banner"><div class="top_cont"><a href="'+opt.Link+'" rel="nofollow" class="t_cont" target="_blank">content</a><a href="javascript:;" class="t_close" id="t_close">close</a></div></div>';
                top_banner_html+='</div>';
            $('#wrapper').before(top_banner_html);

            var seconds = new Date().getSeconds();
            var datakey = opt.Title + '大广告';

            $('.top_banner').
                    css({
                        'background-image': "url('"+opt.IconUrl+"')",
                        'background-position': 'center 0',
                        'background-repeat': 'no-repeat'
                    });

            if(!!opt.Content){
                $('.top_banner,.top_cont').css('height',parseInt(opt.Content));
            }

            setTimeout(function () {
                $('.top_banner').slideDown(300);
            }, 500);
            $('.top_cont a').bind('click', function () {
                var o = $(this);
                var className = o.attr('class');
                ga_track_event(opt.Title + '大广告', datakey + '_' + className, '', 0);
            });
            // setTimeout(function () {
            //     TopBanner.closeBanner();
            // }, 1000 * 8);
            this.bindEvent();

            if(typeof(ht) !== 'undefined'){
                ht.sendCustomEvent('top_banner_show');
            }

        },

        closeBanner:function() {
            $('.top_banner').slideUp(300);
        },
        bindEvent: function(){
            $('#t_close').live('click',function(){
                TopBannerCookie.set(global.TopBanner.optionSource.Title+new Date(global.TopBanner.optionSource.StartDate).getTime(), '1', 300 * 24 * 60 * 60, '/');
                TopBanner.closeBanner();

                if(typeof(ht) !== 'undefined'){
                    ht.sendCustomEvent('top_banner_close');
                }
            });

            $('.t_cont').live('click',function(){
                if(typeof(ht) !== 'undefined'){
                    ht.sendCustomEvent('top_banner_click');
                }
            });
        }
    };
})(this);


$(document).ready(function () {
    'use strict';

    //iconURL为背景图
    var cateKey = $('input.TopBanner:first').val(),
        parentCateKey = $('input.TopBanner:first').attr('parentCateKey'),
        api_site = location.host.match(/qa/) ? 'qaapisite' : location.host.match(/yz/) ? 'yzapisite' : 'api.site';

    if(!!parentCateKey){
        $.ajax({
            type: 'GET',
            url: 'https://'+ api_site +'.hujiang.com/LaMu/Image/lamu_'+cateKey+'/lamu_'+parentCateKey+'/',
            contentType: 'application/json; charset=utf-8',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (result) {
                if (result.Value) {
                    var oDate = new Date().getTime(),
                        startDate = new Date(result.Value.StartDate).getTime(),
                        endDate = result.Value.EndDate && new Date(result.Value.EndDate).getTime() || null;

                    if(oDate > startDate){
                        if(!endDate || endDate && oDate < endDate) {
                            TopBanner.setTopBanner(result.Value);
                        }
                    }

                    if($('.lamu_banner').length>1){
                        $('.lamu_banner:not(:first)').remove();
                    }

                    //没有icon
                    if(!result.Value.Content){
                        $('.t_icon').remove();
                    }
                }
            }
        });
    }
});


