(function () {
    if (document.URL.indexOf("//dev.") > -1 || document.URL.indexOf("localhost.") > -1) {
        return;
    }

    function getCookieValue(arglen) {
        var endstr = document.cookie.indexOf(";", arglen);
        if (endstr == -1)
            endstr = document.cookie.length;
        return document.cookie.substring(arglen, endstr);
    }

    function getCookie(name) {
        var arg = name + "=";
        var arglen = arg.length;
        var cookielen = document.cookie.length;
        var i = 0;
        var j;
        while (i < cookielen) {
            j = i + arglen;
            if (document.cookie.substring(i, j) == arg)
                return getCookieValue(j);
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break;
        }
        return null;
    }

    //var yes_cookieinfo = getCookie("ClubAuth");
    //var yesdata = "&key=" + yes_cookieinfo + "&refe=" + escape(document.referrer) + "&random=" + Math.random();

    //window.setTimeout(
	//	function () {
	//	    var el = document.createElement("img");
	//	    el.style.display = "none";
	//	    el.style.width = "0px";
	//	    el.style.height = "0px";
	//	    el.src = "http://webclick.yeshj.com/clickgather.ashx?counter=listen" + yesdata;
	//	    document.body.appendChild(el);
	//	}, 2000);
})();
