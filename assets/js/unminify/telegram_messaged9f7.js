$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var base_url = $('#js_data').data('base_url');
    $("input[type=radio][name=visibleforLayout]").change(function () {
        if (this.value == "android") {
            jQuery(".android-header").show();
            jQuery(".android-footer").show();
            jQuery(".ios-header ").hide();
            jQuery(".ios-footer ").hide();
            jQuery(".chats-android-header-bottom").show();
            jQuery(".chats-iphone-header-bottom").hide();
            $('.telegram-chat').addClass('android');
            $('.telegram-chat').removeClass('iphone');
        } else if (this.value == "iphone") {
            jQuery(".android-header").hide();
            jQuery(".ios-header").show();
            jQuery(".android-footer").hide();
            jQuery(".ios-footer").show();
            jQuery(".chats-android-header-bottom").hide();
            jQuery(".chats-iphone-header-bottom").show();
            $('.telegram-chat').addClass('iphone');
            $('.telegram-chat').removeClass('android');
        }
    });
    $('#left-panel input[name="ch_rtl"]').change(function () {
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
            })
        } else {
            $('#download .pull-left,#download .pull-right,.tweet-action,.modal-footer,.tw .message-sent .message-footer,.message-sent .message-container,.tw .message-sent .message-avatar,.message-received .message-container,.message-received .message-footer,.message-received .message-avatar').removeAttr('style');
            $('#download').css('direction', 'rtl');
            $('.rtl').show();
            $('.ltr').hide();
            $('.message-received .message-bubble').removeClass('Caret-left').addClass('Caret-right');
            $('.message-sent .message-bubble').removeClass('Caret-right').addClass('Caret-left')
        }
    });
    $("#visiblefooter").click(function () {
        if ($('input#visiblefooter').is(':checked')) {
            $(".all_footer_wp").hide()
        } else {
            $(".all_footer_wp").show()
        }
    });
    $("#visibleHeader").click(function () {
        if ($('input#visibleHeader').is(':checked')) {
            $(".all_header_wp").hide();
        } else {
            $(".all_header_wp").show();
        }
    });
});
$("#networ_speed").change(function () {
    $('.show-network').removeClass('n5g n4g n3g n2g nwifi');
    $('.show-network').addClass($(this).val());
});
$("#d_mode").click(function () {
    if ($("input#d_mode").is(":checked")) {
        $(".telegram").addClass('dark-theme');
    } else {
        $(".telegram").removeClass('dark-theme');
    }
});
$("input[type=radio][name=visibleforLayout]").change(function () {
    if (this.value == "android") {
        $(".battery-status").text($('#Battery_percent').val() + '%');
    } else if (this.value == "iphone") {
        $(".battery-status").text($('#Battery_percent').val());
    }
});
$("#Battery_percent").keyup(function () {
    var count = $('#Battery_percent').val();
    if (count > 100) count = 100;
    if (count < 0) count = 0;
    $('#Battery_percent').val(count);
    $(".battery-level").css("width", count + "%");
    if ($("input#iphone_wp").is(":checked")) {
        $(".battery-status").text(count);
    } else {
        $(".battery-status").text(count + "%");
    }
});
$("#bt_per").click(function () {
    if ($(this).is(":checked")) {
        $(".battery-container").removeClass('hide-percentage');
    } else {
        $(".battery-container").addClass('hide-percentage');
    }
});
$("#d_sim").click(function () {
    if ($("input#d_sim").is(":checked")) {
        $(".network-two").removeClass('hide');
        $(".phone-network").addClass('sim2');
    } else {
        $(".network-two").addClass('hide');
        $(".phone-network").removeClass('sim2');
    }
});
$("#active").click(function () {
    if ($("input#active").is(":checked")) {
        $('.seen-time').hide();
        $('.online-text').addClass("show-text");
    } else {
        $('.seen-time').show();
        $('.online-text').removeClass("show-text");
    }
})
$("#edit-2-Clock").keyup(function () {
    var count = ($('#time-format').prop('checked')) ? onTimeChangein24($(this).val()) : onTimeChange($(this).val());
    $(".status-time").text(count);
});
$("#edit-2-Clock").change(function () {
    var count = ($('#time-format').prop('checked')) ? onTimeChangein24($(this).val()) : onTimeChange($(this).val());
    $(".status-time").text(count);
});
$("#time-format").change(function () {
    if ($(this).prop('checked')) {
        var count = onTimeChangein24($('#edit-2-Clock').val());
        $('.msg-time').each(function (i, v) {
            $(this).text(onTimeChangein24($(this).data('time')));
        });
    } else {
        var count = onTimeChange($('#edit-2-Clock').val());
        $('.msg-time').each(function (i, v) {
            $(this).text(onTimeChange($(this).data('time')));
        });
    }
    $(".status-time").text(count);
});
$("#battery_options").change(function () {
    $('.battery-container').removeClass('battery-horizontal battery-vertical-one battery-vertical-two');
    $('.battery-container').addClass($(this).val());
});
$("#chat_date").change(function () {
    if ($(this).val() == 'otherdate') {
        $(".message-date-input").show();
    } else {
        $(".message-date-input").hide();
    }
});
$('input[name="message-send-type"]').click(function () {
    var v = $(this).val();
    if (v == 'Receive') {
        $('.msg_seen_option').addClass('hide');
        $('.msg_sent_option').addClass('hide');
        $('.fa-paint-brush').addClass('add-brush');
        $('#reelprofiletext').attr('style', 'color: #3674d1');
    } else {
        $('.msg_seen_option').removeClass('hide');
        $('.msg_sent_option').removeClass('hide');
        $('.fa-paint-brush').removeClass('add-brush');
        $('#reelprofiletext').removeAttr('style');
    }
});
// edit text start
$(document).on("click", ".edit-text", function (event) {
    editText($(this));
});
$(document).click(function (e) {
    if ($(e.target).is('.input-main-div,.input-main-div *')) {
        return;
    } else {
        $('.edit-text').show();
        $('.main-input-text,.date-info-icon').hide();
    }
    $('.main-input-text').keyup(function (e) {
        $(this).val(remvoeBadWord($(this).val()));
        inputKeyUp($(this), e);
    });
});
function inputKeyUp($this, $e) {
    if ($e.which == 13) {
        $('.edit-text').show();
        $('.main-input-text,.date-info-icon').hide();
    } else {
        var res1 = '';
        var text = text1 = $this.val();
        var count = text.length;
        if (count > 16) {
            if (!$this.hasClass("insmessage-input")) {
                var res = text1.substr(0, 16);
                res1 += res + "...";
            } else {
                res1 += text1;
            }
        } else {
            res1 += text1;
        }
        $nameClass = $this.data('class');
        if ($nameClass.replace(/[0-9]/g, '') == 'date') {
            if (text != '') {
                if (text.match(date_regex)) {
                    $('.' + $nameClass + '-text').text(text);
                    $('.' + $nameClass + '-input').val(text);
                    if (text != 'Today' && text != 'Yesterday') {
                        idate = getIdate(new Date(text));
                    } else {
                        idate = text;
                    }
                    $('.iphone-' + $nameClass + '-text').text(idate);
                    $('.iphone-' + $nameClass + '-input').val(idate);
                }
            }
        } else {
            $('.' + $nameClass + '-text').text(res1);
            $('.' + $nameClass + '-input').val(res1);
        }
    }
}
$('.main-input-text').keyup(function (e) {
    $(this).val(remvoeBadWord($(this).val()));
    inputKeyUp($(this), e);
});
function editText($this) {
    $('.edit-text').show();
    $('.main-input-text').hide();
    $('.main-input-text,.date-info-icon').hide();
    $this.hide();
    $this.parents('.input-main-div').find('.main-input-text,.date-info-icon').show().select();
}
// edit text end
// person 1 edit start
function removeDiv(elem) {
    if (confirm('Are you sure you want to delete this message?')) {
        $(elem).parent('div').remove();
    }
}
$('.btn-crop-profile').click(function () {
    $profileCrop1.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (resp) {
        $('.facebook_profile_pic_img').attr('src', resp);
        $('#crop-profile-modal').modal('hide');
        $('.img-profile-main-tag').removeClass('hide');
        $('#crop-profile').addClass('hide');
        var base_url = $('#js_data').data('base_url');
        $('.telegram_profile').attr('src', base_url + 'assets/images/addimgbg.jpg');
        $("#profile-img").val('');
    });
});
$("#profile-img").on("change", function () {
    profileCrop(this)
});
var $profileCrop1;
function profileCrop(input) {
    var ext = $(input).val().split('.').pop();
    if (ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'jpeg' || ext.toLowerCase() == 'png' || ext.toLowerCase() == 'svg') {
        if (input.files && input.files[0]) {
            $('#crop-profile').attr('style', 'width: 265px; height: 155px;');
            $('#crop-profile').removeClass('hide');
            $('.img-profile-main-tag').addClass('hide');
            var reader = new FileReader();
            reader.onload = function (e) {
                $profileCrop1.croppie('bind', {
                    url: e.target.result,
                }).then(function () {
                });
            }
            reader.readAsDataURL(input.files[0]);
            $('#crop-profile-modal').modal('show');
        } else {
            $(input).val('');
            $('.error_msg').html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
            $('.error_msg').attr('style', 'display:flex');
            setTimeout(function () {
                $('.error_msg').attr('style', 'display:none');
            }, 6000);
        }
    } else {
        $(input).val('');
        $('.error_msg').html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        $('.error_msg').attr('style', 'display:flex');
        setTimeout(function () {
            $('.error_msg').attr('style', 'display:none');
        }, 6000);
    }
}
$profileCrop1 = $('#crop-profile').croppie({
    viewport: {
        width: 150,
        height: 150,
        type: 'circle'
    },
    showZoomer: true,
    enableExif: false
});
$(".p-close-btn-modal").on("click", function () {
    $('#profile-img').val('');
    $('#crop-profile').addClass('hide');
    $('.img-profile-main-tag').removeClass('hide');
});
$('.btn-crop-profile').click(function () {
    $profileCrop1.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (resp) {
        $('.person-profile').attr('src', resp);
        $('#crop-profile-modal').modal('hide');
        $('.img-profile-main-tag').removeClass('hide');
        $('#crop-profile').addClass('hide');
        var base_url = $('#js_data').data('base_url');
        $('.telegram_profile').attr('src', base_url + 'assets/images/addimgbg.jpg');
        $("#profile-img").val('');
    });
});
// person 1 edit end
/* Message Sender Name Color */
$(".select-name-color").on("click", function (e) {
    $('.pop-color-picker').attr('style', 'display: grid');
});
$colorCode = '#3674d1';
$(".pop-color-picker .color-box").on("click", function (e) {
    $colorCode = $(this).find('span').data('color');
    $('.hidden-color-code').val($colorCode);
    $('#reelprofiletext').attr('style', 'color: ' + $colorCode);
    // $(this).addClass('active');
    $('.pop-color-picker').hide();
});
$('.color-pop-close-btn').click(function () {
    $('.pop-color-picker').hide();
});
/* Message Sender Name Color */
$('#postprofile_upload').change(function () {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.telegram-person-profile').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        $('.telegram-person-profile').attr('src', base_url + 'assets/images/addimgbg.jpg');
    }
});
// chat js start
$("input[name='reelimage_upload']").on("change", function (event) {
    event.stopPropagation();
    $img_src = getImagePath($(this), event);
    if ($img_src == 'error') {
        $(this).val('');
        $('.error_msg').html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        $('.error_msg').attr('style', 'display:flax');
        setTimeout(function () {
            $('.error_msg').attr('style', 'display:none');
        }, 6000);
    } else {
        var img_src = $img_src;
        jQuery(".fileinput-new").hide();
        jQuery(".file-exists").show();
        jQuery(".preview-reel-img").attr("src", img_src);
        jQuery(".hidden-message-image").val(img_src);
    }
});
$("input[name='message-image-input']").on("change", function (event) {
    event.stopPropagation();
    $img_src = getImagePath($(this), event);
    if ($img_src == 'error') {
        $(this).val('');
        $('.error_msg').html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        jQuery(".file-preview-opt").hide();
        $('.error_msg').attr('style', 'display:flax');
        setTimeout(function () {
            $('.error_msg').attr('style', 'display:none');
        }, 6000);
    } else {
        var img_src = $img_src;
        jQuery(".fileinput-new").hide();
        jQuery(".file-exists").show();
        jQuery(".file-preview").html("<img height='100'  src='" + img_src + "'>");
        jQuery(".hidden-message-image").val(img_src);
        jQuery(".file-preview-opt").show();
    }
});
$('.ins-send-btn').click(function () {
    var date_regex = /^(Today|Yesterday|(0?[1-9]|[12][0-9]|3[01])\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4})$/;
    $messageText = $('.message-input').val();
    $messageTime = $(".message-time-input").val();
    $messageTime = onTimeChange($(".message-time-input").val());
    $messageColor = $(".hidden-color-code").val();
    $messageImage = $(".hidden-message-image").val();
    $messageSendType = $("input[name='message-send-type']:checked").val();
    $messageBoxId = $(".message-box-id").val();
    $reelprofiletext = $("#reelprofiletext").val();
    $reelimagetext = $("#reelimagetext").val();
    $rverifyprofle = $("input[name='rverifyprofle']:checked").val();
    $rsavepost = $("input[name='rsavepost']:checked").val();
    $reelimage = $("#reelimage").val();
    $postprofilename = $("#postprofilename").val();
    if ($("#chat_date").val() == 'otherdate') {
        console.log("askdmasd", new Date().getFullYear());
        var dateString = $(".message-date-input").val();
        var dateParts = dateString.split("-");
        var year = parseInt(dateParts[0]);
        var month = parseInt(dateParts[1]);
        var day = parseInt(dateParts[2]);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // var formattedDate = months[month - 1] + " " + day ;
        if (new Date().getFullYear() == year) {
            var formattedDate = months[month - 1] + " " + day;
        }
        else {
            var formattedDate = months[month - 1] + " " + day + " , " + year;
        }
        $messageDate = formattedDate;
    } else {
        $messageDate = $("#chat_date").val();
    }
    if ($messageSendType == "Receive" && $colorCode != '') {
        $("#reelprofiletext").attr('style', 'color : ' + $colorCode);
    }
    $flag = 0;
    if ($messageText.trim() == '' && $messageImage == '') {
        $('.message-input').addClass('error');
        $flag++;
    } else {
        $('.message-input').removeClass('error');
    }
    if ($messageTime.trim() == '') {
        $('.message-time-input').addClass('error');
        $flag++;
    } else {
        $('.message-time-input').removeClass('error');
    }
    if ($messageDate != '') {
        if ($messageDate.match(date_regex)) {
            $messageDate = $messageDate;
            $('.message-date-input').removeClass('error');
            $('.error-msg').html('').hide()
        } else {
        }
    }
    if ($flag == 0) {
        $messageSendType = ($messageSendType == 'Receive') ? 'receive' : 'sent';
        $msg_seen = $("input[name='msg_sent_seen']:checked").val();
        $msg_sent = $("input[name='msg_sent_seen']:checked").val();
        $videoimage = $("input[name='setimage']:checked").val();
        $tabname = "text";
        if ($('#text_msg').hasClass('active')) {
            $tabname = "text";
        } else if ($('#post_msg').hasClass('active')) {
            $tabname = "post";
        } else if ($('#reel_msg').hasClass('active')) {
            $tabname = "reel";
        }
        $data = {
            'message_box_id': $messageBoxId,
            'message_text': $messageText,
            'message_time': $messageTime,
            'message_send_type': $messageSendType,
            'message_image': $messageImage,
            'message_date': $messageDate,
            'msg_seen': $msg_seen,
            'msg_sent': $msg_sent,
            'videoimage': $videoimage,
            'tabname': $tabname,
            'reelprofiletext': $reelprofiletext,
            'reelimagetext': $reelimagetext,
            'rverifyprofle': $rverifyprofle,
            'rsavepost': $rsavepost,
            'reelimage': $reelimage,
        };
        var msg1 = getMessageBoxHtml($data);
        $(".telegram-body").append(msg1);
        $('.close-btn').click();
    } else {
        console.log('else');
    }
});
function deletebtn($this) {
    if (confirm('Are you sure you want to delete this message?')) {
        $('#message-box-num' + $this).remove();
    }
}
function likebtn($this) {
    var n = $($this).data('num');
    $($this).toggleClass('active');
    if ($($this).hasClass('active')) {
        $($this).html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $('#message-box-num' + n).find('.message-like').addClass('show');
        $('#message-box-num' + n).find('.message-like').removeClass('hide');
        $('#message-box-num' + n).addClass('like');
    } else {
        $($this).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $('#message-box-num' + n).find('.message-like').removeClass('show');
        $('#message-box-num' + n).find('.message-like').addClass('hide');
        $('#message-box-num' + n).removeClass('like');
    }
}
function getMessageBoxHtml($data) {
    var base_url = $('#js_data').data('base_url');
    var messageSendType = ($data.message_send_type == 'receive') ? 'received' : 'sent';
    var rightleft = ($data.message_send_type == 'sent') ? 'left' : 'right';
    var sentclass = ($data.message_send_type == 'sent') ? 'telegram-sent' : '';
    var messageSendclass = ($data.message_send_type == 'sent') ? 'fb-table' : 'insta-table';
    var message_text = ($data.message_text != '') ? $data.message_text : '';
    var msg_seen = ($data.msg_seen == 'seen' && messageSendType == 'sent') ? 'show' : 'hide';
    var msg_sent = ($data.msg_sent == 'sent' && messageSendType == 'sent') ? 'show' : 'hide';
    var messageTime = onTimeChange($(".message-time-input").val());
    $num = Number($('.message-box-num').val());
    var onclick = "$('#profile-img').click();$('#crop-profile-modal').modal('show')";
    $colorCode = $('#message-box' + $num).find('.reelproname' + ($num + 1) + '-text').data('color');
    var videoimage = ($data.videoimage == 'video') ? '<div class="video-icon-bg"><span class="tg-video-icon"></span></div><span class="tg-dots"></span>' : ' ';
    var shape_image = ($data.message_send_type == 'receive') ? '<div class="telegram-received-carat received-carat"><img src="../assets/images/telegram-received-icon.png"  alt="shape" class="light"><img src="../assets/images/telegram-received-icon-dark.png"  alt="shape" class="dark"></div>' : ($data.message_send_type == 'sent') ? '<div class="telegram-sent-carat sent-carat"><img src="../assets/images/telegram-sender-icon.png"  alt="shape" class="light"><img src="../assets/images/telegram-sender-icon-dark.png"  alt="shape" class="dark"></div>' : '';
    var today = ($data.message_date != 'None') ? '<div class="main-time-div input-main-div"><p class="edit-text" onclick="editText($(this));" ><span class="chattime-text' + ($num + 1) + '-text">' + $data.message_date + ' </span> <i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text chattime-text' + ($num + 1) + '-input check-bad-word insmessage-input" value="' + $data.message_date + ' "  data-class="chattime-text' + ($num + 1) + '" style="display: none;"><button class="remove-text btn-remove" onclick="removeDiv(this)" ><i class="fa fa-times-circle" aria-hidden="true"></i></button></div>' : '';
    if ($data.tabname == 'text') {
        $image = "";
        if ($data.message_image != '') {
            var img_url = $data.message_image;
            $image = '<div id="message-box-num' + ($num + 1) + '"   class="message message-' + messageSendType + ' message-img">'
                + '<div class="message-container u-table telegram-sent"><div class="message-message u-tableCell u-alignBottom">'
                + '<div class="message-bubble Caret Caret-' + rightleft + ' tg-gallery-image"><div class="tg-text tg-image telegram-gallery-image"><img class="post" src="' + img_url + '" /><div class="modal-title-img"><label class="input-img"><i class="fa fa-pencil" aria-hidden="true" ></i><input type="file" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div>' + videoimage + '</div><div class="telegram-meassage-time-status input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="sendtime' + ($num + 1) + '-text">' + messageTime + '</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text sendtime' + ($num + 1) + '-input" data-class="sendtime' + ($num + 1) + '" value="' + messageTime + '" style="display: none;"><div class="message-footer tel-message-footer ' + msg_sent + '"><div class="message-status telegram-meassage-status" data-num="' + ($num + 1)
                + '"></div></div><div class="message-footer tel-message-footer-seen ' + msg_seen + '"><div class="message-status telegram-meassage-status" data-num="' + ($num + 1) + '"></div></div></div></div><div class="message-share"><span class="send-post"></span></div> <div class="pop-editer"><button class="delete-btn btn-remove" onclick="deletebtn(' + ($num + 1) + ');" data-num="' + ($num + 1) + '"><i class="fa fa-trash"></i></button></div></div></div></div>';
            $('.message-box-num').val(($num + 1));
        }
        $num = Number($('.message-box-num').val());
        $msg = "";
        if (message_text != '') {
            $msg = '<div id="message-box-num'
                + ($num + 1) + '" class="message message-' + messageSendType + ' ">'
                + '<div class="message-container u-table telegram-' + messageSendType + '"><div class="message-message u-tableCell u-alignBottom">'
                + '<div class="message-bubble Caret Caret-' + rightleft + ' "><div class="message-text telegram-text">'
                + '<div class="input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="teletextmsg' + ($num + 1) + '-text">' + message_text + '</span><i class="fa fa-pencil" aria-hidden="true"></i><span class="add-space"></span></p> '
                + '<textarea class="text-name main-input-text insmessage-input teletextmsg' + ($num + 1) + '-input check-bad-word" data-class="teletextmsg' + ($num + 1) + '" style="display: none;">' + message_text + '</textarea></div>'
                + '<div class="telegram-meassage-time-status input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="sendtime' + ($num + 1) + '-text">' + messageTime + '</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text sendtime' + ($num + 1) + '-input" data-class="sendtime' + ($num + 1) + '" value="' + messageTime + '" style="display: none;"><div class="message-footer tel-message-footer ' + msg_sent + '"><div class="message-status telegram-meassage-status" data-num="' + ($num + 1)
                + '"></div></div><div class="message-footer tel-message-footer-seen ' + msg_seen + '"><div class="message-status telegram-meassage-status" data-num="' + ($num + 1) + '"></div></div></div></div>' + shape_image + '</div></div><div class="pop-editer"><button class="delete-btn btn-remove" onclick="deletebtn(' + ($num + 1) + ');" data-num="' + ($num + 1) + '"><i class="fa fa-trash"></i></button></div></div></div></div>';
            $('.message-box-num').val(($num + 1));
        }
        html = $image + $msg;
    } else if ($data.tabname == 'reel') {
        var img_url = $data.message_image;
        html = '<div id="message-box-num' + ($num + 1) + '" class="message message-' + messageSendType + ' message-img "><div class="message-container u-table fb-sent-table telegram-sent"> <div class="message-message u-tableCell u-alignBottom"><div class="message-bubble Caret Caret-' + rightleft + ' tg-gallery-image"><div class="tg-text tg-image telegram_post"><div class="telegram-post"><div class="post-header"><p class="forwarded-text" style="color : ' + $messageColor + '" data-color="' + $messageColor + '">Forwarded from</p> <div class="input-main-div forward_from"><div class="modal-title-img"> <label class="input-img"> <i class="fa fa-pencil" aria-hidden="true"></i> <input type="file" class="img-input" data-box_num="' + ($num + 1) + '" name="post-img" onchange="getTempImage(this)">  <img class="preview-profile" src="'
            + $('.telegram-person-profile').attr('src') + '" alt="Profie image"></label></div>  <span class="edit-text" onclick="editText($(this));" style="display: block;"><span class="reelsdes reelproname' + ($num + 1) + '-text" style="color : ' + $messageColor + '" data-color="' + $messageColor + '">' + $("#reelprofiletext").val() +
            '</span><i class="fa fa-pencil" aria-hidden="true" style="color : ' + $messageColor + '" data-color="' + $messageColor + '"></i></span><textarea class="text-name main-input-text insmessage-input reelproname' + ($num + 1) + '-input check-bad-word" data-class="reelproname' + ($num + 1) +
            '"  style="display: none;">' + $("#reelprofiletext").val()
            + '</textarea></div></div><div class="post-img telegram-gallery-image"><div class="download_opt"><div class="option_down"><div class="download_icon"></div><div><div class="input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="vtime' + ($num + 1) + '-text">2:26:02</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text vtime' + ($num + 1) + '-input" data-class="vtime' + ($num + 1) + '" value="2:26:02" style="display: none;"> </div><div class="input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="vgb' + ($num + 1) + '-text">2.59 GB</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text vgb' + ($num + 1) + '-input" data-class="vgb' + ($num + 1) +
            '" value="2.59 GB" style="display: none;"></div></div></div><div class="post_more"></div></div><div class="video-icon"><div class="video"></div></div><img src="' + $('.preview-reel-img').attr('src')
            + '" alt="reel Image"><div class="modal-title-img"><label class="input-img"><i class="fa fa-pencil" aria-hidden="true"></i><input type="file" class="img-input" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div></div> <div class="post-footer "><div class="input-main-div"><div class="edit-text ft-text" onclick="editText($(this));" style="display: inline-block;"><span class="reelsdes reeldesc' + ($num + 1) + '-text" >' + $("#reelimagetext").val() +
            '</span><i class="fa fa-pencil" aria-hidden="true"></i><span class="add-space"></span></div><textarea class="text-name main-input-text insmessage-input reeldesc' + ($num + 1) + '-input check-bad-word" data-class="reeldesc' + ($num + 1) +
            '" style="display: none;">' + $("#reelimagetext").val()
            + '</textarea></div><div class="telegram-meassage-time-status"><div class="view input-main-div"><div class="view-icon"></div><p class="edit-text"><span class="viewcount' + ($num + 1) + '-text">14.9K</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text viewcount' + ($num + 1) + '-input" data-class="viewcount' + ($num + 1) + '" value="14.9K" style="display: none;"> </div><div class="input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="sendtime' + ($num + 1) + '-text">' + messageTime + '</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text sendtime' + ($num + 1) + '-input" data-class="sendtime' + ($num + 1) + '" value="' + messageTime + '" style="display: none;"></div><div class="message-footer tel-message-footer ' + msg_sent + '"><div class="message-status telegram-meassage-status" data-num="' + ($num + 1)
            + '"></div></div><div class="message-footer tel-message-footer-seen ' + msg_seen + '"><div class="message-status telegram-meassage-status" data-num="' + ($num + 1) + '"></div></div></div></div></div>' + shape_image + '</div>  <div class="share-image"><div class="android-share"></div></div><div class="pop-editer"><button class="delete-btn btn-remove" onclick="deletebtn(' + ($num + 1) + ');" data-num="' + ($num + 1) + '"><i class="fa fa-trash"></i></button></div></div></div></div> </div></div>';
        $('.message-box-num').val(($num + 1));
    }
    return today + html;
}
function getTempImage($this) {
    var $box_num = $($this).data('box_num');
    var file = $this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#message-box-num' + $box_num).find('.preview-profile').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        $('#message-box-num' + $box_num).find('.preview-profile').attr('src', base_url + 'assets/images/insta-profile-pic.jpg');
    }
}
// chat js end
function postChangeOrUpload($this, event) {
    event.stopPropagation();
    $img_src = getImagePath($this, event);
    $imgTag = $this.parents('.telegram-gallery-image').find('img');
    // console.log($img_src);
    if ($img_src == 'error') {
        $this.val('');
        $('.error_msg').html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        $('.error_msg').attr('style', 'display:flax');
        setTimeout(function () {
            $('.error_msg').attr('style', 'display:none');
        }, 6000);
    } else {
        $imgTag.attr('src', $img_src);
    }
}
// reset form start
function resetForm() {
    var base_url = $('#js_data').data('base_url');
    $('#chat_modal input[type="text"], #chat_modal input[type="file"], #chat_modal textarea').val('');
    $('#chat_modal #msg_seen').prop('checked', false);
    $('#chat_modal #msg_sent').prop('checked', true);
    $('#chat_modal #chat_date').prop('selected', false);
    $('#chat_modal #chat_date option:eq(0)').prop('selected', false);
    $('#chat_modal #postprofile_upload, #postimage_upload, #reelimage_upload,#chat_modal #reelprofile_upload').parents('label').find('img').attr('src', base_url + 'assets/images/addimgbg.jpg');
    $('.file-preview').html('');
    $('.file-preview').hide();
    $('#chat_modal .nav-tabs .nav-item,#chat_modal .nav-tabs .nav-item .nav-link').removeClass('active');
    $('#chat_modal .nav-tabs .nav-item:eq(0), #chat_modal .nav-tabs .nav-item:eq(0) .nav-link').addClass('active');
    $('#chat_modal .tab-content .tab-pane').removeClass('active in').addClass('fade');
    $('#chat_modal .tab-content #text_msg').addClass('active in').removeClass('fade');
    $('.file-preview-opt').hide();
    $("#chat_date").val('None');
    $(".message-date-input").hide();
    if ($('.main-modal-div').data('mode') == 'close') {
        $('body').addClass('body-fixed');
        $('.main-modal-div').data('mode', 'open').show();
    }
    jQuery(".hidden-message-image").val('');
}
$("#preview").click(function () {
    $("body").addClass("body-fixed");
    $(this).attr("disabled", "disabled");
    $html = ($html = $("#download")
        .html()
        .replace(/\onclick/g, "data-onclick")).replace(/\data-target/g, "data-t");
    $("#preview-modal-content").html($html);
    jQuery("#preview-modal .fa.fa-pencil,#preview-modal .fa.fa-cloud-upload,#preview-modal .fa.fa-times-circle,#preview-modal .btn-remove").remove();
    jQuery("#preview-modal .edit-text").removeClass("edit-text");
    jQuery("#preview-modal .all_footer_wp").removeAttr("data-target");
    $("#preview-modal").show();
});
$(".close-preview").click(function () {
    $("#preview-modal").hide();
    $("body").removeClass("body-fixed");
    $("#preview").removeAttr("disabled");
    $("#preview-modal-content").html("");
});
// reset form end;