
mw.centralNotice.insertBanner( {"bannerName":"April2017MaintenanceNotice_Anon","bannerHtml":"\n\u003Cstyle\u003E\n\n/* Main banner container. Banner: background gradient, border colour and width and adding a margin between banner and article header*/\n/* Important -- background gradient -- If you change one you must change all*/\n.cnotice {\n    position: relative;\n    overflow: hidden;\n    background: -moz-linear-gradient(top, rgba(251,250,249,1) 0%, rgba(254,254,253,1) 20%, rgba(254,254,253,1) 23%, rgba(254,254,253,1) 27%, rgba(240,240,240,1) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgba(251,250,249,1) 0%, rgba(254,254,253,1) 20%, rgba(254,254,253,1) 23%, rgba(254,254,253,1) 27%, rgba(240,240,240,1) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(251,250,249,1) 0%, rgba(254,254,253,1) 20%, rgba(254,254,253,1) 23%, rgba(254,254,253,1) 27%, rgba(240,240,240,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#f2f2f2',GradientType=0 ); /* IE6-9 */\n    border: 1px solid #E67506;\n    margin-bottom: 1em;\n    cursor: pointer;\n    color: #222;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n\n/* Sets the minimum banner height. If img + logo-container margins \u003E height. Banner will be larger*/\n#cnotice-main {\n    display: table;\n    width: 100%;\n    height: 80px; /* need to set height for height 100% to work on elements within it */\n}\n\n.cnotice-message-container,\n.cnotice-logo-container {\n    display: table-cell;\n    height: 100%;\n    vertical-align: middle;\n}\n\n/* --- Main message --- */\n.cnotice-message {\n    position: relative;\n    margin: 0;\n    color: #4D4D4D;\n    line-height: 1.2;\n    font-weight: bold;\n    padding: 11px 10px 11px 10px;\n}\n\n@media (min-width: 1200px) {\n    .cnotice-message {\n         padding: 11px 180px 11px 10px;\n    }\n}\n\nbody.rtl .cnotice-message {\n    padding: 11px 40px 11px 140px;\n    background-position: right 10px top 10px;\n}\n\n.cnotice-message p {\n    margin: 0;\n    font-family: Arial, sans-serif;\n    font-style: bold;\n    font-size: 14px;\n    opacity: 1;\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n@media (min-width: 1200px) {\n    .cnotice-message p { font-size: 16px; }\n}\n\n\n/* --- Logo Image text --- */\n.cnotice-logo-container {\n    width: 10%;\n    padding: .5em 1.25em .5em .9em;\n}\n\nbody.rtl .cnotice-logo-container {\n    padding: .5em 1.25em .5em .9em\n}\n\n.cnotice-logo-container img {\n    opacity: 1;\n    display: block;\n    margin: 0 auto;\n}\n\n/* --- Close Options --- */\n\n#cnotice-toggle-box-options {\n    display: inline-block;\n    position: absolute;\n    right: .5em;\n    top: .5em;\n    font-size: .8em;\n    text-transform: uppercase;\n}\n\nbody.rtl #cnotice-toggle-box-options {\n    right: auto;\n    left: .5em;\n}\n\n#cnotice-toggle-box {\n    display: inline-block;\n    cursor: pointer;\n    opacity: .5;\n}\n\n#cnotice-toggle-box:hover { opacity: 1; }\n\n#cnotice-toggle-box-x {\n    background: url('//upload.wikimedia.org/wikipedia/donate/3/32/Close-thin.png') no-repeat center center;\n    width: 9px;\n    height: 9px;\n    float: right;\n    display: block;\n    margin: .2em .4em;\n}\n\nbody.rtl #cnotice-toggle-box-x {\n    float: left;\n}\n\n/* --- Full Banner Link --- */\n.cnotice a.cnotice-full-banner-click {\n    display: block;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.cnotice a.cnotice-full-banner-click:hover {\n    text-decoration: underline\n}\n\n.cnotice-button {\n    background-color: #4caf50; /* Green */\n    border: none;\n    display: none;\n    border-radius: 4px;\n    color: white;\n    padding: 10px 10px;\n    text-align: center;\n    font-weight: bold;\n    text-decoration: none;\n    font-size: 12px;\n    margin: 4px 2px;\n    -webkit-transition-duration: 0.4s; /* Safari */\n    transition-duration: 0.4s;\n    cursor: pointer;\n    z-index: 999;\n}\n\n@media (min-width: 1200px) {\n    .cnotice-button {\n        display: inline-block;\n    }\n}\n@media (max-width: 1200px) {\n    .cnotice-button {\n        width: 25%;\n        margin: auto;\n        margin-top: 10px;\n    }\n}\n\n/* --- Buttons --- */\n.cnotice a.cnotice-buttonlink {\n    cursor: pointer;\n    text-decoration: none;\n    color: black;\n}\n\n.cnotice a.cnotice-buttonlink:hover {\n    color: white;\n}\n\n.cnotice-button1 {\n    background-color: #0082c0;\n    color: white;\n    position: static;\n    top: 45%;\n    right: 5%;\n    transform: translateY(-45%);\n    min-width: 110px;\n}\n\n.rtl .cnotice-button1 {\n    left: 23px;\n    right: auto;\n}\n@media (min-width: 1200px) { .cnotice-button1 { position: absolute; } }\n\n.cnotice-button1:hover {\n    background-color: #447FF5;\n}\n\n#cnotice-translation-link {\n  position: absolute;\n  right: 95px;\n  top: 5px;\n  font-size: 0.8em;\n  white-space: nowrap;\n}\n\n#cnotice-translation-link:hover {\n  text-decoration: underline;\n}\n\n.rtl #cnotice-translation-link {\n  text-align: left;\n  left: 95px;\n}\n\u003C/style\u003E\n\n\u003Cdiv class=\"cnotice\" id=\"April2017MaintenanceNotice_Anon\"\u003E\n    \u003Ca class=\"cnotice-full-banner-click external text\" href=\"//blog.wikimedia.org/2017/04/18/codfw-temporary-editing-pause/\"\u003E\n        \u003Cdiv id=\"cnotice-main\"\u003E\n            \u003Cdiv class=\"cnotice-logo-container\"\u003E\n                \u003Cimg src=\"//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Under_construction_icon-orange.svg/60px-Under_construction_icon-orange.svg.png\" alt=\"Banner logo\"\u003E\n            \u003C/div\u003E\n            \u003Cdiv class=\"cnotice-message-container\"\u003E\n                \u003Cdiv class=\"cnotice-message\"\u003E\n                    \u003Cp\u003E\n                        Our servers will be undergoing planned maintenance between 1400UTC - 1500UTC on 19 April 2017\u003C/br\u003EDuring this time you might not be able to save any edits.\n                    \u003C/p\u003E\n                \u003C/div\u003E\n            \u003C/div\u003E\n        \u003C/div\u003E\n    \u003C/a\u003E\n    \u003Ca class=\"cnotice-buttonlink\" href=\"//blog.wikimedia.org/2017/04/18/codfw-temporary-editing-pause/\"\u003E\u003Cdiv class=\"cnotice-button cnotice-button1\"\u003EMore information\u003C/div\u003E\u003C/a\u003E\n    \u003Cdiv id=\"cnotice-toggle-box-options\"\u003E\n        \u003Cspan id=\"cnotice-toggle-box\" onclick=\"mw.centralNotice.hideBanner(); return false;\"\u003E\n            Close\n            \u003Cspan id=\"cnotice-toggle-box-x\"\u003E\u003C/span\u003E\n        \u003C/span\u003E\n    \u003C/div\u003E\n\u003C/div\u003E","campaign":"April2017MaintenanceNotice","category":"April2017MaintenanceNotice"} );