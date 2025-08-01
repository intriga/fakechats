$(document).ready(function() {
    $('.bf_chat_profile').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".fileinput-preview img").attr("src");
        jQuery(".hangouts-received-profile img").attr("src", img_src);
    });
    $('#options input[type="text"], #options textarea').keyup(function() {
        var thisData = $(this).attr("data-edit");
        if (thisData) {
            var thisValue = $(this).val();
            thisData = thisData.replace("edit-", "");
            if (thisValue == '') {
                thisValue = '...';
            }
            if (thisData == 'likes' && thisValue == '...') {
                $(".post_likes").css('display', 'none');
                $(".post_write_comment").css('display', 'none');
            } else if (thisData == 'likes' && thisValue != '...') {
                $(".post_likes").css('display', 'block');
                $(".post_write_comment").css('display', 'block');
            }
            $(".text-" + thisData).html(thisValue);
            if (thisData == 'name') {
                $(".theName").text(thisValue);
            }
        }
    });
    $('#left-panel input[name="ch_rtl"]').change(function() {
        var thisValue = $(this).val();
        if (thisValue == 'ltr') {
            $('#download').css('direction', 'ltr');
            $('#download .pull-left').attr('style', 'float:left !important');
            $('#download .pull-right').attr('style', 'float:right !important');
            $('.ltr').show();
            $('.rtl').hide();
            $('.message-received .message-container').css({
                'margin-right': 'auto',
                'margin-left': '0',
                'padding-right': '50px',
            });
            $('.message-received .message-avatar').css({
                'right': 'auto',
                'left': '0'
            });
            $('.message-received .message-footer').css({
                'padding-left': '58px',
                'padding-right': '50px'
            });
            $('.tw .message-sent .message-avatar').css({
                'left': 'auto',
                'right': '0'
            });
            $('.message-sent .message-container').css({
                'margin-left': 'auto',
                'margin-right': '0'
            });
            $('.tw .message-sent .message-footer').css({
                'float': 'right',
                'padding-left': '50px',
                'padding-right': '58px'
            });
            $('.message-received .message-bubble').removeClass('Caret-right').addClass('Caret-left');
            $('.message-sent .message-bubble').removeClass('Caret-left').addClass('Caret-right');
            $('.modal-footer').css({
                'text-align': 'right'
            });
            $('.tweet-action').css({
                'margin-left': '0px'
            });
        } else {
            $('#download .pull-left,#download .pull-right,.tweet-action,.modal-footer,.tw .message-sent .message-footer,.message-sent .message-container,.tw .message-sent .message-avatar,.message-received .message-container,.message-received .message-footer,.message-received .message-avatar').removeAttr('style');
            $('#download').css('direction', 'rtl');
            $('.rtl').show();
            $('.ltr').hide();
            $('.message-received .message-bubble').removeClass('Caret-left').addClass('Caret-right');
            $('.message-sent .message-bubble').removeClass('Caret-right').addClass('Caret-left');
        }
    });
    $('#profile1_name').keyup(function() {
        var text = $(this).val();
        var comment1 = "";
        var count = "";
        var bad_word = "";
        for (var i = 0; i < bad.length; i++) {
            var comment1 = text.search(bad[i]);
            if (comment1 > 0) {
                bad_word = bad[i];
            }
        }
        text1 = text.replace(bad_word, '');
        var count = text1.length;
        if (count > 18) {
            var res = text1.substr(0, 14);
            var res1 = res + '...';
            $(".name-name").text(res1);
        } else {
            $(".name-name").text(text1);
        }
    });
    $("#visiblefooter").click(function() {
        if ($('input#visiblefooter').is(':checked')) {
            $(".all_footer_wp").hide();
        } else {
            $(".all_footer_wp").show();
        }
    });
    $("#visibleHeader").click(function() {
        if ($('input#visibleHeader').is(':checked')) {
            $(".all_header_wp").hide();
        } else {
            $(".all_header_wp").show();
        }
    });
    $("#online").click(function() {
        if ($('input#online').is(':checked')) {
            $(".header-title").hide();
        } else {
            $(".header-title").show();
        }
    });
    $('input[type=radio][name=visibleforLayout]').change(function() {
        if (this.value == 'android') {
            jQuery(".whatsapp-android-header").show();
            jQuery(".whatsapp-ios-header").hide();
            jQuery(".whatsapp-content").addClass("whatsapp-android-content");
        } else if (this.value == 'iphone') {
            jQuery(".whatsapp-android-header").hide();
            jQuery(".whatsapp-ios-header").show();
            jQuery(".whatsapp-content").removeClass("whatsapp-android-content")
        }
    });
    $("#edit-tagname").keyup(function() {
        var count = $(this).val();
        $(".header-title").text("@" + count);
    });
    $("#edit-2-Clock").keyup(function() {
        var count = $(this).val();
        $(".status-time").text(count);
    });
    $("#Battery_percent").keyup(function() {
        var count = $(this).val();
        $(".battery-level").removeClass("red");
        if (count <= 15) {
            $(".battery-level").addClass("red");
        }
        $(".battery-level").css("width", count + "%");
        $(".battery-status").text(count + "%");
    });
    $("#edit-Status").keyup(function() {
        var count = $(this).val();
        $(".header-title").text(count);
    });
    $("#active_now").keyup(function() {
        var count = $(this).val();
        $(".active-now").text(count);
    });
});

function addComment(type) {
    var read_img = "";
    if ($("input[name='read'][value='read']").prop("checked")) {
        read_img = 'Seen';
    }
    if ($("input[name='read'][value='unread']").prop("checked")) {
        read_img = '';
    }
    var profileimg = $('#' + type).attr('src');
    var comment = $('textarea#' + type + '_message').val();
    var date = $('input#' + type + '_date').val();
    var ch_rtl = $('#left-panel input[name="ch_rtl"]:radio:checked').val();
    if (ch_rtl == 'ltr') {
        rtl_r_av = ' style="right: auto;  left: 0;"';
        rtl_r_m = ' style="margin-right: auto; margin-left: 0; padding-right: 50px"';
        rtl_r_mf = ' style="padding-left: 58px; padding-right: 50px"';
        rtl_s_av = ' style="right: 0;  left: auto;"';
        rtl_s_m = ' style="margin-left: auto; margin-right: 0"';
        rtl_s_mf = ' style="float: right; padding-left: 50px; padding-right: 58px"';
    } else {
        rtl_r_av = rtl_s_av = rtl_r_m = rtl_r_mf = rtl_s_m = rtl_s_mf = '';
    }
    if (type == 'profile1') {
        var where = 'received';
        var Caret = 'left';
    } else if (type == 'profile2') {
        var where = 'sent';
        var Caret = 'right';
    }
    var time_1 = jQuery("#time-profile1").val();
    var time_2 = jQuery("#time-profile2").val();
    var profileimg1 = '';
    var base_url = $('#js_url').data('base_url');
    if ($('.fileinput-preview img').attr('src') == undefined) {
        profileimg1 = base_url + 'assets/images/profile.jpg';
    } else {
        profileimg1 = $('.fileinput-preview img').attr('src');
    }
    if (comment > '') {
		var str1 = "";
        if (hasWhiteSpace(comment)) {
            str1 = '<p>' + comment + '<p>';
        } else {
            str1 = '<p style="word-break:break-all;">' + comment + '<p>';
        }
        if (where == 'received') {
            var str = '<div class="message message-received is-not ">' + '<div class="hangouts-received-profile">' + '<img src="' + profileimg1 + '" alt="Profile" class="profile_received">' + '</div>' + '<div class="message-container u-table hangouts-messenger-android-received whatsapp-received">' + '<div class="message-message u-tableCell u-alignBottom">' + '<div class="message-bubble Caret Caret-right whatsapp-caret">' + '<div class="message-text hangouts-messenger-android-text">' + ' <div class="chat-left-caret">' + '<img src="/assets/images/hangouts-chat-left-caret.png" alt="hangouts chat left caret">' + '</div>' + str1 + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="message-footer">' + '<span class="message-footerItem">' + '<div class="hangouts-messenger-ios-received-status">' + '<span>' + time_1 + '</span>' + '</div>' + '</span>' + '</div>' + '<div class="clearfix"></div>' + '</div>';
        } else {
            var str = '<div class="message message-sent is-not">' + '<div class="message-container u-table whatsapp-sent hangouts-messenger-android-sent">' + '<div class="message-message u-tableCell u-alignBottom">' + ' <div class="message-bubble Caret Caret-left whatsapp-caret">' + '<div class="message-text hangouts-messenger-android-text">' + '<div class="chat-right-caret">' + '<img src="/assets/images/hangouts-chat-right-caret.png" alt="hangouts chat right caret">' + '</div>' +  str1  + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="message-footer">' + '<div class="message-footerItem">' + '<div class="hangouts-messenger-android-send-status">' + '<span>' + time_2 + '</span>' + '</div>' + '</div>' + '</div>' + '<div class="clearfix"></div>' + '</div>';
        }
        var item = $(str).hide();
        $('.modal-body').append(item);
        if ($(".modal-body .remove").length > 0) {
            $('.modal-body .remove').fadeTo(250, 0, function() {
                $(".modal-body .remove").remove();
                item.fadeIn(500);
            });
        } else {
            item.fadeIn(500);
        }
        return false;
    }
};