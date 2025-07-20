var base_url = $('#js_data').data('base_url');
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user = getCookie("favorite_username");
    if (user != "") {} else {}
}
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
$(".favorite_view").click(function() {
    var favorite_list = getCookie("favorite_username");
    var a = favorite_list.split(",");
    var unique = a.filter(function(itm, i, a) {
        return i == a.indexOf(itm);
    });
    var li = "";
    if (unique != "") {
        $.each(unique, function(i, e) {
            if (e != "") {
                li += '<li class="select-name" id="' + e + '"><span class="fav_class">' + e + '</span><span class="remove" data-remove-val="' + e + '"><i class="fa fa-minus"></i></span></li>';
            }
        });
        $(".delete_all").show();
        $("#favorite-selected-list").html(li);
    } else {
        $(".delete_all").hide();
        $("#favorite-selected-list").html('<li class="select-name no_data"><span>Sorry - no results found</span></li>');
    }
});

$(document).on("click", ".remove", function(e) {
    var removeItem = $(this).data('remove-val');
    var array = [];
    var favorite_list = getCookie("favorite_username");
    var y = favorite_list.split(",");
    y = jQuery.grep(y, function(value) {
        if (value != removeItem) {
            array.push(value);
        }
    });
    setCookie("favorite_username", array, 30);

    favorite_liboox = $('.selected');
    jQuery.grep(favorite_liboox, function(value) {
        if (value.getAttribute('data-favorite-name') == removeItem) {
            value.classList.remove('selected','rf');
        }
    });

    e.preventDefault();
    $(this).parent('li').remove();
    if($('#favorite-selected-list').html().trim() == ''){
        $("#favorite-selected-list").html("<li class='empty-list'>Empty Favorite List</li>");
    }
    x--;
});
$(document).on("click", ".delete_all", function(e) {
    var txt;
    var r = confirm("Are you sure you want to delete?");
    if (r == true) {
        $("#favorite-selected-list").html("<li class='empty-list'>Empty Favorite List</li>");
        setCookie("favorite_username", "", 30);
        favorite_liboox = $('.selected');
        jQuery.grep(favorite_liboox, function(value) {
            value.classList.remove('selected','rf');
        });
    }
});
function find_username_available() {
    var base_url = $('#js_data').data('base_url');
    var user = $('#username_availability').val();
    if (user != "") {
        $("#username_availability").removeClass('required');
        var spinner = '<div class="social-alert facebook free-alert"><i class="fa fa-facebook" aria-hidden="true"></i><a href="#" title="" class="social-name">Facebook</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>';
        $(".facebook-available").html('<div class="social-alert facebook free-alert"><i class="fa fa-facebook" aria-hidden="true"></i><a href="#" title="" class="social-name">Facebook</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".twitter-available").html('<div class="social-alert twitter free-alert"><i class="fa fa-twitter" aria-hidden="true"></i><a href="#" title="" class="social-name">twitter</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".youtube-available").html('<div class="social-alert youtube free-alert"><i class="fa fa-youtube-play" aria-hidden="true"></i><a href="#" title="" class="social-name">youtube</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".pinterest-available").html('<div class="social-alert pinterest free-alert"><i class="fa fa-pinterest" aria-hidden="true"></i><a href="#" title="" class="social-name">pinterest</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".vimeo-available").html('<div class="social-alert vimeo free-alert"><i class="fa fa-vimeo" aria-hidden="true"></i><a href="#" title="" class="social-name">vimeo</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".github-available").html('<div class="social-alert github free-alert"><i class="fa fa-github" aria-hidden="true"></i><a href="#" title="" class="social-name">github</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".flicker-available").html('<div class="social-alert flickr free-alert"><i class="fa fa-flickr" aria-hidden="true"></i><a href="#" title="" class="social-name">flickr</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".reddit-available").html('<div class="social-alert reddit free-alert"><i class="fa fa-reddit" aria-hidden="true"></i><a href="#" title="" class="social-name">reddit</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".wordpress-available").html('<div class="social-alert wordpress free-alert"><i class="fa fa-wordpress" aria-hidden="true"></i><a href="#" title="" class="social-name">wordpress</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".etsy-available").html('<div class="social-alert etsy free-alert"><i class="fa fa-etsy" aria-hidden="true"></i><a href="#" title="" class="social-name">etsy</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".soundcloud-available").html('<div class="social-alert soundcloud free-alert"><i class="fa fa-soundcloud" aria-hidden="true"></i><a href="#" title="" class="social-name">soundcloud</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".px500-available").html('<div class="social-alert px500 free-alert"><i class="fa fa-500px check-fa" aria-hidden="true"></i><a href="#" title="" class="social-name">px500</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".behance-available").html('<div class="social-alert behance free-alert"><i class="fa fa-behance" aria-hidden="true"></i><a href="#" title="" class="social-name">behance</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".tumblr-available").html('<div class="social-alert tumblr free-alert"><i class="fa fa-tumblr" aria-hidden="true"></i><a href="#" title="" class="social-name">tumblr</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".myspace-available").html('<div class="social-alert myspace free-alert"><i class="fa fa-myspace" aria-hidden="true"></i><a href="#" title="" class="social-name">myspace</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".meetup-available").html('<div class="social-alert meetup free-alert"><i class="fa fa-meetup" aria-hidden="true"></i><a href="#" title="" class="social-name">meetup</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".dribbble-available").html('<div class="social-alert dribbble free-alert"><i class="fa fa-dribbble" aria-hidden="true"></i><a href="#" title="" class="social-name">dribbble</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".aboutme-available").html('<div class="social-alert aboutme free-alert"><i class="fa fa-aboutme" aria-hidden="true"></i><a href="#" title="" class="social-name">aboutme</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".venmo-available").html('<div class="social-alert venmo free-alert"><i class="fa fa-venmo" aria-hidden="true"></i><a href="#" title="" class="social-name">venmo</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".kinja-available").html('<div class="social-alert kinja free-alert"><i class="fa fa-kinja" aria-hidden="true"></i><a href="#" title="" class="social-name">kinja</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".mix-available").html('<div class="social-alert mix free-alert"><i class="fa fa-mix" aria-hidden="true"></i><a href="#" title="" class="social-name">mix</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".deviantart-available").html('<div class="social-alert deviantart free-alert"><i class="fa fa-deviantart" aria-hidden="true"></i><a href="#" title="" class="social-name">deviantart</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".livejournal-available").html('<div class="social-alert livejournal free-alert"><i class="fa fa-livejournal" aria-hidden="true"></i><a href="#" title="" class="social-name">livejournal</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".ifttt-available").html('<div class="social-alert ifttt free-alert"><i class="fa fa-ifttt" aria-hidden="true"></i><a href="#" title="" class="social-name">ifttt</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".disqus-available").html('<div class="social-alert disqus free-alert"><i class="fa fa-disqus" aria-hidden="true"></i><a href="#" title="" class="social-name">disqus</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".twitch-available").html('<div class="social-alert twitch free-alert"><i class="fa fa-twitch" aria-hidden="true"></i><a href="#" title="" class="social-name">twitch</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".cashapp-available").html('<div class="social-alert cashapp free-alert"><i class="fa fa-cashapp" aria-hidden="true"></i><a href="#" title="" class="social-name">cashapp</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".ello-available").html('<div class="social-alert ello free-alert"><i class="fa fa-ello" aria-hidden="true"></i><a href="#" title="" class="social-name">ello</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".feedburner-available").html('<div class="social-alert feedburner free-alert"><i class="fa fa-feedburner" aria-hidden="true"></i><a href="#" title="" class="social-name">feedburner</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".blogger-available").html('<div class="social-alert blogger free-alert"><i class="fa fa-blogger" aria-hidden="true"></i><a href="#" title="" class="social-name">blogger</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".org-available").html('<div class="social-alert org free-alert"><i class="fa fa-org" aria-hidden="true"></i><a href="#" title="" class="social-name">org</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".co-available").html('<div class="social-alert co free-alert"><i class="fa fa-co" aria-hidden="true"></i><a href="#" title="" class="social-name">co</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".io-available").html('<div class="social-alert io free-alert"><i class="fa fa-io" aria-hidden="true"></i><a href="#" title="" class="social-name">io</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".us-available").html('<div class="social-alert us free-alert"><i class="fa fa-us" aria-hidden="true"></i><a href="#" title="" class="social-name">us</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".cc-available").html('<div class="social-alert cc free-alert"><i class="fa fa-cc" aria-hidden="true"></i><a href="#" title="" class="social-name">cc</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".me-available").html('<div class="social-alert me free-alert"><i class="fa fa-me" aria-hidden="true"></i><a href="#" title="" class="social-name">me</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".biz-available").html('<div class="social-alert biz free-alert"><i class="fa fa-biz" aria-hidden="true"></i><a href="#" title="" class="social-name">biz</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".info-available").html('<div class="social-alert info free-alert"><i class="fa fa-info" aria-hidden="true"></i><a href="#" title="" class="social-name">info</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".de-available").html('<div class="social-alert de free-alert"><i class="fa fa-de" aria-hidden="true"></i><a href="#" title="" class="social-name">de</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".at-available").html('<div class="social-alert at free-alert"><i class="fa fa-at" aria-hidden="true"></i><a href="#" title="" class="social-name">at</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".eu-available").html('<div class="social-alert eu free-alert"><i class="fa fa-eu" aria-hidden="true"></i><a href="#" title="" class="social-name">eu</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".ru-available").html('<div class="social-alert ru free-alert"><i class="fa fa-ru" aria-hidden="true"></i><a href="#" title="" class="social-name">ru</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".jp-available").html('<div class="social-alert jp free-alert"><i class="fa fa-jp" aria-hidden="true"></i><a href="#" title="" class="social-name">jp</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".mobi-available").html('<div class="social-alert mobi free-alert"><i class="fa fa-mobi" aria-hidden="true"></i><a href="#" title="" class="social-name">mobi</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".in-available").html('<div class="social-alert in free-alert"><i class="fa fa-in" aria-hidden="true"></i><a href="#" title="" class="social-name">in</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".xyz-available").html('<div class="social-alert xyz free-alert"><i class="fa fa-xyz" aria-hidden="true"></i><a href="#" title="" class="social-name">xyz</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".uk-available").html('<div class="social-alert uk free-alert"><i class="fa fa-uk" aria-hidden="true"></i><a href="#" title="" class="social-name">uk</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".ca-available").html('<div class="social-alert ca free-alert"><i class="fa fa-ca" aria-hidden="true"></i><a href="#" title="" class="social-name">ca</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".ws-available").html('<div class="social-alert ws free-alert"><i class="fa fa-ws" aria-hidden="true"></i><a href="#" title="" class="social-name">ws</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".ee-available").html('<div class="social-alert ee free-alert"><i class="fa fa-ee" aria-hidden="true"></i><a href="#" title="" class="social-name">ee</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".do-available").html('<div class="social-alert do free-alert"><i class="fa fa-do" aria-hidden="true"></i><a href="#" title="" class="social-name">do</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".cn-available").html('<div class="social-alert cn free-alert"><i class="fa fa-cn" aria-hidden="true"></i><a href="#" title="" class="social-name">cn</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".instagram-available").html('<div class="social-alert instagram free-alert"><i class="fa fa-instagram" aria-hidden="true"></i><a href="#" title="" class="social-name">instagram</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".snapchat-available").html('<div class="social-alert snapchat free-alert"><i class="fa fa-snapchat" aria-hidden="true"></i><a href="#" title="" class="social-name">snapchat</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $(".spotify-available").html('<div class="social-alert spotify free-alert"><i class="fa fa-spotify" aria-hidden="true"></i><a href="#" title="" class="social-name">spotify</a><div class="spinner-bar"><i class="fa fa-spinner" aria-hidden="true"></i></div></div>');
        $.post(base_url + 'check', {
            username: user,
            social: "facebook"
        }, function(data) {
            $(".facebook-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "twitter"
        }, function(data) {
            $(".twitter-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "youtube"
        }, function(data) {
            $(".youtube-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "pinterest"
        }, function(data) {
            $(".pinterest-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "vimeo"
        }, function(data) {
            $(".vimeo-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "github"
        }, function(data) {
            $(".github-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "flickr"
        }, function(data) {
            $(".flicker-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "reddit"
        }, function(data) {
            $(".reddit-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "wordpress"
        }, function(data) {
            $(".wordpress-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "etsy"
        }, function(data) {
            $(".etsy-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "soundcloud"
        }, function(data) {
            $(".soundcloud-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "500px"
        }, function(data) {
            $(".px500-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "behance"
        }, function(data) {
            $(".behance-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "tumblr"
        }, function(data) {
            $(".tumblr-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "myspace"
        }, function(data) {
            $(".myspace-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "meetup"
        }, function(data) {
            $(".meetup-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "dribbble"
        }, function(data) {
            $(".dribbble-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "aboutme"
        }, function(data) {
            $(".aboutme-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "venmo"
        }, function(data) {
            $(".venmo-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "kinja"
        }, function(data) {
            $(".kinja-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "mix"
        }, function(data) {
            $(".mix-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "deviantart"
        }, function(data) {
            $(".deviantart-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "livejournal"
        }, function(data) {
            $(".livejournal-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "ifttt"
        }, function(data) {
            $(".ifttt-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "disqus"
        }, function(data) {
            $(".disqus-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "twitch"
        }, function(data) {
            $(".twitch-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "cashapp"
        }, function(data) {
            $(".cashapp-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "ello"
        }, function(data) {
            $(".ello-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "feedburner"
        }, function(data) {
            $(".feedburner-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "blogger"
        }, function(data) {
            $(".blogger-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "org"
        }, function(data) {
            $(".org-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "co"
        }, function(data) {
            $(".co-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "io"
        }, function(data) {
            $(".io-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "us"
        }, function(data) {
            $(".us-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "cc"
        }, function(data) {
            $(".cc-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "me"
        }, function(data) {
            $(".me-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "biz"
        }, function(data) {
            $(".biz-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "info"
        }, function(data) {
            $(".info-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "de"
        }, function(data) {
            $(".de-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "at"
        }, function(data) {
            $(".at-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "eu"
        }, function(data) {
            $(".eu-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "ru"
        }, function(data) {
            $(".ru-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "jp"
        }, function(data) {
            $(".jp-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "mobi"
        }, function(data) {
            $(".mobi-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "in"
        }, function(data) {
            $(".in-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "xyz"
        }, function(data) {
            $(".xyz-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "uk"
        }, function(data) {
            $(".uk-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "ca"
        }, function(data) {
            $(".ca-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "ws"
        }, function(data) {
            $(".ws-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "ee"
        }, function(data) {
            $(".ee-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "do"
        }, function(data) {
            $(".do-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "cn"
        }, function(data) {
            $(".cn-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "instagram"
        }, function(data) {
            $(".instagram-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "snapchat"
        }, function(data) {
            $(".snapchat-available").html(data.output);
        }, 'json');
        $.post(base_url + 'check', {
            username: user,
            social: "spotify"
        }, function(data) {
            $(".spotify-available").html(data.output);
        }, 'json');
    } else {
        $("#username_availability").addClass('required');
    }
}
$(document).ready(function() {
    $(document).on('click', '.heart', function() {
        $(this).toggleClass("selected");
        var favorite_username = getCookie("favorite_username");
        if($(this).hasClass('rf')){
            var a = $(this).data("favorite-name");
            var abc = favorite_username.split(',');
            abc = abc.filter(e => e !== a);
        }else{
            var abc = [];
            abc.push(favorite_username);
            var a = $(this).data("favorite-name");
            abc.push(a);
        }
        console.log(abc);
        setCookie("favorite_username", abc, 30);
        jQuery(this).toggleClass("rf");
    });
    $(document).on('click', '.category_name', function() {
        $("#username_availability").val($(this).text());
        jQuery('html,body').animate({
            scrollTop: $(".username-check").offset().top
        }, 500);
    });
    jQuery("#username_availability").keypress(function(e) {
        var search = $(this).val();
        if (search !== "") {
            if (e.which == 13) {
                find_username_available();
            }
        }
    });
    $(document).on('click', '#find_username_available', function() {
        find_username_available();
    });
});
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function fileExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}
function ReverseString(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Not valid';
    }
    const revArray = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join('');
}
function username_check() {
    var base_url = $('#js_data').data('base_url');
    $.ajax({
        url: base_url + 'check',
        type: "POST",
        data: {
            username: "abc"
        },
        success: function(response) {
            console.log(response);
        },
    });
}
function username_generate() {
    var base_url = $("#js_data").data('base_url');
    var category_type = $("#category_type").val();
    var li = "";
    var json_file = base_url + '/assets/json/' + category_type + '.json';
    $.getJSON(json_file, function(data_result) {
        var data_arr1 = [];
        if ($("#lk").val() != "") {
            var lk = $("#lk").val();
            var lk_lenght = lk.length;
            var f_str = "",
                f_res_start = "",
                f_res_end = "",
                incStr = "";
            var filterText = $("input[name='filterText']:checked").val();
            for (var p = 0; p < data_result.length; p++) {
                f_str = data_result[p];
                if (filterText == "start") {
                    f_res_start = f_str.slice(0, lk_lenght);
                    if (lk == f_res_start) {
                        data_arr1.push(data_result[p]);
                    }
                } else if (filterText == "end") {
                    f_res_end = f_str.substr(f_str.length - lk_lenght);
                    if (lk == f_res_end) {
                        data_arr1.push(data_result[p]);
                    }
                } else {
                    if (f_str.includes(lk) == true) {
                        data_arr1.push(data_result[p]);
                    }
                }
            }
            var data = data_arr1;
        } else {
            var data = data_result;
        }
        var select_special_characters = "";
        if ($("#select_special_characters").val() != "") {
            select_special_characters = $("#select_special_characters").val();
        }
        var data_arr = [];
        if ($("#start_letter").val() == '0') {
            var json = data;
            var str = "",
                res = "";
            var chars_lenght = $("#chars_lenght").val();
            for (var j = 0; j < json.length; j++) {
                if (chars_lenght != "0" && chars_lenght != "") {
                    str = data[j];
                    res = str.length;
                    var length_match = $("#length_match").val();
                    if (length_match != "0" && length_match != "") {
                        if (res == chars_lenght) {
                            data_arr.push(data[j]);
                        }
                    } else {
                        if (res <= chars_lenght) {
                            data_arr.push(data[j]);
                        }
                    }
                } else {
                    data_arr.push(data[j]);
                }
            }
        } else {
            var json = data;
            var str = "",
                res = "",
                res1 = "";
            var chars_lenght = $("#chars_lenght").val();
            console.log("letter " + chars_lenght);
            for (var j = 0; j < json.length; j++) {
                var toLower = $("#start_letter").val().toLowerCase();
                str = data[j];
                res = str.substr(0, 1);
                if (res == toLower) {
                    res1 = str.length;
                    var length_match = $("#length_match").val();
                    if (length_match != "0" && length_match != "") {
                        if (res1 == chars_lenght) {
                            data_arr.push(data[j]);
                        }
                    } else {
                        if (chars_lenght != "0" && chars_lenght != "") {
                            if (res1 <= chars_lenght) {
                                data_arr.push(data[j]);
                            }
                        } else {
                            data_arr.push(data[j]);
                        }
                    }
                }
            }
        }
        shuffle(data_arr);
        var abc = "";
        var n = "";
        var n_dot = "";
        var span_add = "";
        var word_position = $("#word_position").val();
        var c = 70;
        if (c <= data_arr.length) {
            var c1 = c;
        } else {
            var c1 = data_arr.length;
        }
        for (var i = 0; i < c1; i++) {
            if ($("#plural").is(":checked")) {
                var newValue = pluralize(data_arr[i]);
            } else {
                var newValue = data_arr[i];
            }
            myStringArray = newValue;
            myStringArrayOrig = newValue;
            if ($("#user_name_gen").val() != "") {
                var user_name_gen = $("#user_name_gen").val();
                if ($("#reverse").is(":checked")) {
                    var reversed_user_name_gen = ReverseString(user_name_gen);
                    var reversed_newValue = ReverseString(newValue);
                } else {
                    var reversed_user_name_gen = user_name_gen;
                    var reversed_newValue = newValue;
                }
                if (word_position == "first") {
                    if (select_special_characters == "@" || select_special_characters == "#") {
                        span_add = '<span style="color:#fff;">' + select_special_characters + reversed_user_name_gen + '</span><span style="color:yellow;">' + reversed_newValue + '</span>';
                        n = select_special_characters + reversed_user_name_gen + "" + reversed_newValue;
                        n_dot = select_special_characters + reversed_user_name_gen + "." + reversed_newValue;
                    } else {
                        span_add = '<span style="color:#fff;">' + reversed_user_name_gen + select_special_characters + '</span><span style="color:yellow;">' + reversed_newValue + '</span>';
                        n = reversed_user_name_gen + select_special_characters + "" + reversed_newValue;
                        n_dot = reversed_user_name_gen + select_special_characters + "." + reversed_newValue;
                    }
                } else if (word_position == "second") {
                    if (select_special_characters == "@" || select_special_characters == "#") {
                        span_add = '<span style="color:#fff;">' + select_special_characters + reversed_newValue + '</span><span style="color:yellow;">' + reversed_user_name_gen + '</span>';
                        n = select_special_characters + reversed_newValue + "" + reversed_user_name_gen;
                        n_dot = select_special_characters + reversed_newValue + "." + reversed_user_name_gen;
                    } else {
                        span_add = '<span style="color:#fff;">' + reversed_newValue + '</span><span style="color:yellow;">' + select_special_characters + reversed_user_name_gen + '</span>';
                        n = reversed_newValue + select_special_characters + "" + reversed_user_name_gen;
                        n_dot = reversed_newValue + select_special_characters + "." + reversed_user_name_gen;
                    }
                } else {
                    var word_position_arr = Math.floor((Math.random() * 2) + 1);
                    if (word_position_arr == "1") {
                        if (select_special_characters == "@" || select_special_characters == "#") {
                            span_add = '<span style="color:yellow;">' + select_special_characters + reversed_user_name_gen + '</span><span style="color:#fff;">' + reversed_newValue + '</span>';
                            n = select_special_characters + reversed_user_name_gen + "" + reversed_newValue;
                            n_dot = select_special_characters + reversed_user_name_gen + "." + reversed_newValue;
                        } else {
                            span_add = '<span style="color:yellow;">' + reversed_user_name_gen + '</span><span style="color:#fff;">' + select_special_characters + reversed_newValue + '</span>';
                            n = reversed_user_name_gen + select_special_characters + "" + reversed_newValue;
                            n_dot = reversed_user_name_gen + select_special_characters + "." + reversed_newValue;
                        }
                    } else if (word_position_arr == "2") {
                        if (select_special_characters == "@" || select_special_characters == "#") {
                            span_add = '<span style="color:#fff;">' + select_special_characters + reversed_newValue + '</span><span style="color:yellow;">' + reversed_user_name_gen + '</span>';
                            n = select_special_characters + reversed_newValue + "" + reversed_user_name_gen;
                            n_dot = select_special_characters + reversed_newValue + "." + reversed_user_name_gen;
                        } else {
                            span_add = '<span style="color:#fff;">' + reversed_newValue + '</span><span style="color:yellow;">' + select_special_characters + reversed_user_name_gen + '</span>';
                            n = reversed_newValue + select_special_characters + "" + reversed_user_name_gen;
                            n_dot = reversed_newValue + select_special_characters + "." + reversed_user_name_gen;
                        }
                    }
                }
            } else {
                if ($("#reverse").is(":checked")) {
                    var reversed_newValue = ReverseString(newValue);
                } else {
                    var reversed_newValue = newValue;
                }
                if (select_special_characters == "@" || select_special_characters == "#") {
                    span_add = '<span style="color:#fff;">' + select_special_characters + reversed_newValue + '</span>';
                    n = select_special_characters + reversed_newValue;
                    n_dot = select_special_characters + reversed_newValue;
                } else {
                    span_add = '<span style="color:#fff;">' + reversed_newValue + '</span>';
                    n = reversed_newValue;
                    n_dot = reversed_newValue;
                }
            }
            li += '<li class="select-name" id="' + n_dot + '"><span class="heart" data-favorite-name="' + n + '"><i class="fa fa-heart"></i></span><span class="category_name">' + span_add + '</span></li>';
            if (c == i) {
                abc += '"' + n_dot + '"';
            } else {
                abc += '"' + n_dot + '",';
            }
        }
        var script = document.createElement("script");
        script.setAttribute('type', 'text/javascript');
        var code = 'var myStringArray=[' + abc + '];var myStringArrayOrig=[' + abc + '];ShowAll(myStringArray);rebuild();';
        script.text = code;
        document.body.appendChild(script);
        if ($("#nice_font").is(":checked")) {
            var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
            $("#list_username").css("background-color", randomColor);
            $("#list_username").css("font-weight", "800");
            $("#list_username").css("font-size", "40px");
            console.log("s");
            var select_font_style = $("#select_font_style").val();
            if (select_font_style != "") {
                $("#list_username").css("font-family", select_font_style);
            }
        } else {
            var select_font_style = $("#select_font_style").val();
            if (select_font_style != "") {
                $("#list_username").css("background-color", "#000000");
                $("#list_username").css("font-weight", "");
                $("#list_username").css("font-size", "");
                $("#list_username").css("font-family", select_font_style);
                $("#list_username").css("font-size", "15px");
            }
        }
        if (li != "") {
            $("#list_username").html(li);
        } else {
            $("#list_username").html("<li>Sorry - no results found<li>");
        }
    });
}
$(document).ready(function() {
    username_generate();
});
$("#username_generate_btn").click(function() {
    username_generate();
});
function SortLen(arr, ascYN) {
    arr.sort(function(a, b) {
        if (ascYN) return a.length - b.length;
        else return b.length - a.length;
    });
}
function SortAZ(arr) {
    arr.sort(function(a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });
}
function SortZA(arr) {
    arr.sort(function(a, b) {
        if (a > b) return -1;
        else if (a < b) return 1;
        return 0;
    });
}
function ShowAll(arr) {
    return;
}
$(".download_txt_file").click(function() {
    copy($('ul#list_username').find('li'));
    var txt_data = "";
    $("#list_username .select-name .category_name").each(function() {
        txt_data += $(this).text() + "\n";
    });
    var category_type = $('#category_type').val();
    download(txt_data, category_type + ".txt", "text/plain")
});
$(".download_txt_file_view").click(function() {
    var txt_data = "";
    $("#favorite-selected-list .select-name .fav_class").each(function() {
        txt_data += $(this).text() + "\n";
    });
    var category_type = $('#category_type').val();
    download(txt_data, "favorite.txt", "text/plain")
});
function rebuild() {
    var listing = document.getElementById("list_username");
    var arrayLength = myStringArray.length;
    listing.innerHTML = "";
    for (var i = 0; i < arrayLength; i++) {
        username = myStringArray[i];
        username_length = username.length;
        dot_pos = username.indexOf(".");
        word1 = username.substr(0, dot_pos);
        word2 = username.substr(dot_pos + 1, username_length - dot_pos);
        span_add = '<span style="color:#fff;">' + word1 + '</span><span style="color:yellow;">' + word2 + '</span>';
        li_var = '<li class="select-name" id="' + username + '"><span class="heart" data-favorite-name="' + word1 + word2 + '"><i class="fa fa-heart"></i></span><span class="category_name">' + span_add + '</span></li>';
        listing.innerHTML += li_var;
    }
}
function rebuildOrig() {
    var listing = document.getElementById("list_username");
    var arrayLength = myStringArrayOrig.length;
    listing.innerHTML = "";
    for (var i = 0; i < arrayLength; i++) {
        username = myStringArrayOrig[i];
        username_length = username.length;
        dot_pos = username.indexOf(".");
        word1 = username.substr(0, dot_pos);
        word2 = username.substr(dot_pos + 1, username_length - dot_pos);
        span_add = '<span style="color:#fff;">' + word1 + '</span><span style="color:yellow;">' + word2 + '</span>';
        li_var = '<li class="select-name" id="' + username + '" ><span class="heart" data-favorite-name="' + word1 + word2 + '"><i class="fa fa-heart"></i></span><span class="category_name">' + span_add + '</span></li>';
        listing.innerHTML += li_var;
    }
}
function copyToClipboard1(element) {
    var $temp = $("<li>");
    var brRegex = /<br\s*[\/]?>/gi;
    $("body").append($temp);
    $temp.val($(element).html().replace(brRegex, "\r\n")).select();
    document.execCommand("copy");
    $temp.remove();
}
function copy(element) {
    var $temp = $("<textarea/>");
    $("body").append($temp);
    var values = $(element).map(function() {
        return $(this).text();
    }).get().join('\n');
    console.log(values);
    var clone = $(element).parent().clone();
    $(clone).find('br').replaceWith("\n");
    $temp.val(values).select();
    document.execCommand("copy");
    $temp.remove();
}
if (document.getElementById("lk") !== null) {
    $(document).ready(function() {
        var bla = $('#lk').val();
        if (bla.length > 0) {
            $('#showDiv').show();
        } else {
            $('#showDiv').hide();
        }
    });
    $('#lk').bind('keyup change', function() {
        if (this.value.length > 0) {
            $('#showDiv').show();
        } else {
            $('#showDiv').hide();
        }
    });
}
$(document).ready(function() {
    $(".heart-toggle").click(function() {
        $(".heart").fadeToggle(300);
    });
    $(".sort-filter").click(function() {
        $(".sort-list").toggleClass("show");
    });
    $(".username-tab1").click(function() {
        $(".get-tab-value").val("Username Generator1");
    });
    $(".username-tab2").click(function() {
        $(".get-tab-value").val("Username Generator2");
    });
    $(".username-tab3").click(function() {
        $(".get-tab-value").val("Username Generator3");
    });
    $(".tabs-btn").click(function() {
        $(".tabs").toggleClass("show");
    })
    $(".tablinks").click(function() {
        $(".tabs").removeClass("show");
    });
    $(".favorite_view").click(function() {
        $(".username-generator1-model").css("display", "block");
    })
    $(".model-close").click(function() {
        $(".username-generator1-model").css("display", "none");
    })
    var modal_UN = document.getElementById("Username_Modal");
    window.onclick = function(event) {
        if (event.target == modal_UN) {
            modal_UN.style.display = "none";
        }
    }
});


function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function sanitizeTagName(tag) {
    return tag
        .toLowerCase()
        .replace(/\s+/g, '_')         // Replace spaces with _
        .replace(/[()]/g, '')         // Remove parentheses
        .replace(/[^a-z0-9_]/g, '');  // Remove other special characters
}

function downloadAll($type = 'downloadJson') {
    let first_name = $('#first_name').val();
    let middle_name = $('#middle_name').val();
    let surnames = $('#surnames').val();
    let gender = ($('#gender').val() != '' && $('#gender').val() != null && $('#gender').val() != undefined && $('#gender').val() != 'm') ? 'Female' : 'Male';
    let birth_year = $('#birth_year').val();
    let location = $('#location').val();
    let job = $('#job').val();
    let likes = $('#likes').val();
    let adj1 = $('#adj1').val();
    let adj2 = $('#adj2').val();
    let adj3 = $('#adj3').val();

    let data = [
        {
            "First name": first_name,
            "Middle name": middle_name,
            "Last name": surnames,
            "Gender": gender,
            "Year of birth (yyyy)": birth_year,
            "A location": location,
            "An occupation": job,
            "Something you like": likes,
            "Three adjectives to describe him or her": adj1 + ', ' + adj2 + ', ' + adj3,
        }
    ];

    if($type == 'downloadJson') {
        const json = JSON.stringify(data, null, 2);
        downloadFile(json, 'data.json', 'application/json');
    }

    if($type == 'downloadXml') {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<data>\n';
        data.forEach(item => {
            xml += '  <item>\n';
            for (const key in item) {
                xml += `    <${sanitizeTagName(key)}>${item[key]}</${sanitizeTagName(key)}>\n`;
            }
            xml += '  </item>\n';
        });
        xml += '</data>';
        downloadFile(xml, 'data.xml', 'application/xml');
    }

    if($type == 'downloadCsv') {
        const keys = Object.keys(data[0]);
        const rows = data.map(obj => keys.map(k => `"${obj[k]}"`).join(','));
        const csv = [keys.join(','), ...rows].join('\n');
        downloadFile(csv, 'data.csv', 'text/csv');
    }
}

