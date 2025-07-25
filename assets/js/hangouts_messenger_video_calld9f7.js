$(document).ready(function() {
    $('#person_3').hide();
    $('#person_4').hide();
    $('.whatsapp_pro_img1').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".hangouts_profile_call_fullscreen").css("background-image", "url(" + img_src + ")");
        $('#person_2').show();
    });
    $('.whatsapp_pro_img2').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile2 img").attr("src");
        jQuery(".hangouts_profile_call_1").css("background-image", "url(" + img_src + ")");
        $('#person_2').show();
        $('#person_3').show();
    });
    $('.whatsapp_pro_img1').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".hangouts_profile_call_2").css("background-image", "url(" + img_src + ")");
        $('#person_2').show();
    });
    $('.whatsapp_pro_img3').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile3 img").attr("src");
        jQuery(".hangouts_profile_call_3").css("background-image", "url(" + img_src + ")");
        jQuery(".hangouts_profile_call_2").show(0);
        $('#person_2').show();
        $('#person_3').show();
        $('#person_4').show();
    });
    $('.whatsapp_pro_img4').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile4 img").attr("src");
        jQuery(".hangouts_profile_call_4").css("background-image", "url(" + img_src + ")");
        $('#person_2').show();
        $('#person_3').show();
        $('#person_4').show();
    });
    $('.whatsapp_pro_img1').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".profile_call_1 img").attr("src", img_src);
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
            jQuery(".whatsapp-text-img.received-carat").show();
            jQuery(".whatsapp-text-img.sent-carat").show();
            jQuery(".iphone-bottom.iphone-green-bottom").hide();
            jQuery(".iphone-bottom").hide();
            jQuery(".whatapp-ios-footer").hide();
            jQuery(".whatapp-android-footer").show();
        } else if (this.value == 'iphone') {
            jQuery(".whatsapp-android-header").hide();
            jQuery(".whatsapp-ios-header").show();
            jQuery(".whatsapp-content").removeClass("whatsapp-android-content");
            jQuery(".whatsapp-text-img.received-carat").hide();
            jQuery(".whatsapp-text-img.sent-carat").hide();
            jQuery(".iphone-bottom.iphone-green-bottom").show();
            jQuery(".iphone-bottom").show();
            jQuery(".whatapp-ios-footer").show();
            jQuery(".whatapp-android-footer").hide();
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
    var h_wp = "";
    var send_h = "";
    var f_wp = "";
    var send_f = "";
    if ($('input#android_wp').is(':checked')) {
        h_wp = '<div class="whatsapp-text-img received-carat"><img src="/assets/images/anroid-whatsapp-left-carat.png"></div>';
        send_h = '<div class="whatsapp-text-img sent-carat"><img src="/assets/images/anroid-whatsapp-right-carat.png"></div>';
        f_wp = '<div class="iphone-bottom" style="display:none"><img src="/assets/images/iphone-message-grey-bottom.png"></div>';
        send_f = '<div class="iphone-bottom iphone-green-bottom" style="display:none"><img src="/assets/images/iphone-message-green-bottom.png"></div>';
    } else {}
    if ($('input#iphone_wp').is(':checked')) {
        h_wp = '<div class="whatsapp-text-img received-carat" style="display:none"><img src="/assets/images/anroid-whatsapp-left-carat.png"></div>';
        send_h = '<div class="whatsapp-text-img sent-carat" style="display:none"><img src="/assets/images/anroid-whatsapp-right-carat.png"></div>';
        f_wp = '<div class="iphone-bottom"><img src="/assets/images/iphone-message-grey-bottom.png"></div>';
        send_f = '<div class="iphone-bottom iphone-green-bottom"><img src="/assets/images/iphone-message-green-bottom.png"></div>';
    } else {}
    var read = "";
    if ($('input#none').is(':checked')) {
        read = "";
    }
    if ($('input#unread').is(':checked')) {
        read = '<img src="/assets/images/check-sent.png">';
    }
    if ($('input#readone').is(':checked')) {
        read = '<img src="/assets/images/check-delivered.png">';
    }
    if ($('input#read').is(':checked')) {
        read = '<img src="/assets/images/check-read.png">';
    }
    var time_1 = jQuery("#time-profile1").val();
    var time_2 = jQuery("#time-profile2").val();
    '<div class="iphone-bottom"><img src="http://dev.fakedetail.com/assets/images/iphone-message-grey-bottom.png"></div>';
    if (comment > '') {
        if (where == 'received') {
            var str = '<div class="message message-received is-not">' + '<div class="message-container u-table whatsapp-received">' + '<div class="message-message u-tableCell u-alignBottom">' + '<div class="message-bubble Caret Caret-right whatsapp-caret">' + h_wp + '<div class="message-text whatsapp-text">' + '<p>' + comment + '</p>' + '<div class="message-read-status">' + '<span class="message_time">' + time_1 + '</span>' + '</div>' + '</div>' + f_wp + '</div>' + '</div>' + '</div>' + '</div>';
        } else {
            var str = '<div class="message message-sent is-not">' + '<div class="message-container u-table whatsapp-sent">' + '<div class="message-message u-tableCell u-alignBottom">' + '<div class="message-bubble Caret Caret-left whatsapp-caret">' + send_h + '<div class="message-text whatsapp-text">' + '<p>' + comment + '</p>' + '<div class="message-read-status">' + ' <span>' + time_2 + '</span>' + '  <div class="message-status">' + read + '</div>' + '</div>' + '</div>' + send_f + '</div>' + '</div>' + '</div>' + '</div>';
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
}
;