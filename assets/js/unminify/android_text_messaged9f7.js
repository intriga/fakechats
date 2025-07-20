$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#visiblefooter").click(function () {
        if ($('input#visiblefooter').is(':checked')) {
            $(".all_footer_wp").hide()
        } else {
            $(".all_footer_wp").show()
        }
    });
    $("#visibleHeader").click(function () {
        if ($('input#visibleHeader').is(':checked')) {
            $(".all_header_wp").hide()
        } else {
            $(".all_header_wp").show()
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


    $("input[type=radio][name=icon-bg]").change(function () {
        if ($("input#pink-bg").is(":checked")) {
            $(".message-avatar").addClass("pink-bg");
            $(".message-avatar").removeClass("green-bg orange-bg yellow-bg purpole-bg default-bg")
        } else if ($("input#green-bg").is(":checked")) {
            $(".message-avatar").addClass("green-bg");
            $(".message-avatar").removeClass("orange-bg yellow-bg purpole-bg pink-bg default-bg")
        } else if ($("input#orange-bg").is(":checked")) {
            $(".message-avatar").addClass("orange-bg");
            $(".message-avatar").removeClass("green-bg yellow-bg purpole-bg pink-bg default-bg")
        } else if ($("input#yellow-bg").is(":checked")) {
            $(".message-avatar").addClass("yellow-bg");
            $(".message-avatar").removeClass("green-bg orange-bg purpole-bg pink-bg default-bg")
        } else if ($("input#purpole-bg").is(":checked")) {
            $(".message-avatar").addClass("purpole-bg");
            $(".message-avatar").removeClass("green-bg orange-bg yellow-bg pink-bg default-bg")
        } else if ($("input#default-bg").is(":checked")) {
            $(".message-avatar").addClass("default-bg");
            $(".message-avatar").removeClass("green-bg orange-bg yellow-bg pink-bg purpole-bg")
        } else {
            $(".message-avatar").removeClass("green-bg orange-bg yellow-bg purpole-bg pink-bg default-bg")
        }
    });

});


$("#d_mode").click(function () {
    if ($("input#d_mode").is(":checked")) {
        $(".android-msg").addClass('dark-theme');
    } else {
        $(".android-msg").removeClass('dark-theme');
    }
});

$("#battery_options").change(function () {
    $('.battery-container').removeClass('battery-horizontal battery-vertical-one battery-vertical-two');
    $('.battery-container').addClass($(this).val());
});

$("#networ_speed").change(function () {
    $('.show-network').removeClass('n5g n4g n3g n2g nwifi');
    $('.show-network').addClass($(this).val());
});

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

$("#d_sim").click(function () {
    if ($("input#d_sim").is(":checked")) {
        $(".network-two").removeClass('hide');
        $(".sim_option_grp").addClass('show');
        $(".android_dual_icon").addClass('add');
    } else {
        $(".network-two").addClass('hide');
        $(".sim_option_grp").removeClass('show');
        $(".android_dual_icon").removeClass('add');
        $('#sim_1').prop('checked', false);
        $('#sim_2').prop('checked', false);
        $('.ft_txt_msg').text("Text Message");
    }
});

$("#bt_per").click(function () {
    if ($(this).is(":checked")) {
        $(".battery-container").removeClass('hide-percentage');
    } else {
        $(".battery-container").addClass('hide-percentage');
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

// limited word for profile name start
$('#profile_name').keyup(function () {
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
    $(".name-text1").text(text1);
    var count = text1.length;
    if (count > 13) {
        var res = text1.substr(0, 12);
        var res1 = res + '...';
        $(".name-text").text(res1);
    } else {
        $(".name-text").text(text1);
    }
});


// limited word for profile name end

// person 1 edit start
function removeDiv(elem) {
    $(elem).parent('div').remove();
}

$('.btn-crop-profile1').click(function () {
    $profileCrop1.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (resp) {
        $('.facebook_profile_pic_img').attr('src', resp);
        $('#crop-profile-modal1').modal('hide');
        $('.img-profile-main-tag1').removeClass('hide');
        $('#crop-profile1').addClass('hide');
        var base_url = $('#js_data').data('base_url');
        $('.whatsapp_privew_profile1').attr('src', base_url + 'assets/images/addimgbg.jpg');
        $("#profile-img1").val('');
    });
});


$("#profile-img1").on("change", function () {
    profileCrop1(this);
    $(".message-avatar").addClass("add");

});

var $profileCrop1;
function profileCrop1(input) {
    var ext = $(input).val().split('.').pop();
    if (ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'jpeg' || ext.toLowerCase() == 'png' || ext.toLowerCase() == 'svg') {
        if (input.files && input.files[0]) {
            $('#crop-profile1').attr('style', 'width: 265px; height: 155px;');
            $('#crop-profile1').removeClass('hide');
            $('.img-profile-main-tag1').addClass('hide');
            var reader = new FileReader();
            reader.onload = function (e) {
                $profileCrop1.croppie('bind', {
                    url: e.target.result,
                }).then(function () {
                });
            }
            reader.readAsDataURL(input.files[0]);
            $('#crop-profile-modal1').modal('show');
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

$profileCrop1 = $('#crop-profile1').croppie({
    viewport: {
        width: 150,
        height: 150,
        type: 'circle'
    },
    showZoomer: true,
    enableExif: false
});

$(".p-close-btn-modal").on("click", function () {
    $('#profile-img1').val('');
    $('#crop-profile1').addClass('hide');
    $('.img-profile-main-tag1').removeClass('hide');
});

$('.btn-crop-profile1').click(function () {
    $profileCrop1.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (resp) {
        $('.person-profile').attr('src', resp);
        $('#crop-profile-modal1').modal('hide');
        $('.img-profile-main-tag1').removeClass('hide');
        $('#crop-profile1').addClass('hide');
        var base_url = $('#js_data').data('base_url');
        $('.whatsapp_privew_profile1').attr('src', base_url + 'assets/images/addimgbg.jpg');
        $("#profile-img1").val('');
    });
});
// person 1 edit end
// delete parent div start
function removeDiv(elem) {
    $(elem).parent('div').remove();
}
// delete parent div start

$("#chat_date").change(function () {
    if ($(this).val() == 'otherdate') {
        $(".message-date-input").show();
    } else {
        $(".message-date-input").hide();
    }
});

// chat modal js start
$('.ins-send-btn').click(function () {
    var date_regex = /^(Today|Yesterday|(0?[1-9]|[12][0-9]|3[01])\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4})$/;
    $messageText = $('.message-input').val();
    $messageTime = onTimeChange($(".message-time-input").val());
    $messageSendType = $("input[name='message-send-type']:checked").val();
    $messageBoxId = $(".message-box-id").val();
    $messageImage = $(".hidden-message-image").val();
    if ($("#chat_date").val() == 'otherdate') {
        var dateString = $(".message-date-input").val();
        var dateParts = dateString.split("-");
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var fulldate = new Date(dateString);
        var day = weekday[fulldate.getDay()];
        var date = fulldate.getDate();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var formattedDate = day + " " + date + " " + months[fulldate.getMonth()];
        $messageDate = formattedDate;
    } else {
        $messageDate = $("#chat_date").val();
    }
    console.log($messageDate);

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
        $msg_delivered = $("input[name='msg_delivered']:checked").val();


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
            'message_date': $messageDate,
            'tabname': $tabname,
            'message_image': $messageImage,
            'msg_delivered': $msg_delivered,
        };
        console.log($data);
        var msg1 = getMessageBoxHtml($data);
        $(".android-msg-body").append(msg1);
        console.log('isd');
        $('.close-btn').click();
    } else {
        console.log('else');
    }
});

function getMessageBoxHtml($data) {
    var base_url = $('#js_data').data('base_url');
    var messageSendType = ($data.message_send_type == 'receive') ? 'received' : 'sent';
    var rightleft = ($data.message_send_type == 'sent') ? 'left' : 'right';
    var sentclass = ($data.message_send_type == 'sent') ? 'text-sent' : '';
    var message_text = ($data.message_text != '') ? $data.message_text : '';
    $num = Number($('.message-box-num').val());
    var msg_delivered = ($data.msg_delivered == 'delivered') ? 'show' : 'hide';
    var messageTime = onTimeChange($(".message-time-input").val());


    var today = ($data.message_date != 'None') ? '<div class="date-container input-main-div"><p class="text-center edit-text text-gray" onclick="editText($(this));"><span class="chattime' + ($num + 1) + '-text">' + $data.message_date + ', ' + $data.message_time + '</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text chattime' + ($num + 1) + '-input check-bad-word insmessage-input" value="' + $data.message_date + ' ' + $data.message_time + '" data-class="chattime' + ($num + 1) + '" style="display: none;"><button class="remove btn-remove" onclick="removeDiv(this)"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div>' : '';

    if ($data.tabname == 'text') {
        $image = "";
        if ($data.message_image != '') {
            var img_url = $data.message_image;

            $image = '<div id="message-box-num' + ($num + 1) + '"   class="message message-' + messageSendType + ' gallery-img"><div class="message-container u-table insta-sent-table"><div class="message-message u-tableCell u-alignBottom"><div class="message-bubble Caret Caret-' + rightleft + '"><div class="msg-image text-gallery-image"><img class="msg-img" src="'
                + img_url + '" /><div class="modal-title-img"><label class="input-img"><i class="fa fa-pencil" aria-hidden="true"></i><input type="file" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div></div><div class="message-share"><span class="send-post"></span></div> <div class="pop-editer"><button class="btn-remove delete-btn" onclick="deletebtn(' + ($num + 1) + ');" data-num="' + ($num + 1) + '"><i class="fa fa-trash"></i></button></div></div></div></div><div class="message-footer text-message-footer-delivered ' + msg_delivered + ' input-main-div"><div class="message-footerItem " data-num="' + ($num + 1)
                + '"><p class="edit-text"><span class="time-text">' + messageTime + '</span> <i class="fa fa-pencil" aria-hidden="true"></i></p> <p class="sms_text">&#x2022; SMS</p> </div><input type="text" class="main-input-text time-input" data-class="time" value="12:43PM" style="display: none;"></div></div></div>';
            $('.message-box-num').val(($num + 1));
        }

        $num = Number($('.message-box-num').val());
        $msg = "";
        if (message_text != '') {
            $msg = '<div id="message-box-num' + ($num + 1) + '" class="message message-' + messageSendType + '"><div class="message-container u-table text-messenger-' + messageSendType + ' text-messenger-android"><div class="message-message u-tableCell u-alignBottom"><div class="message-bubble Caret Caret-' + rightleft + ' input-main-div"><div class="message-text  edit-text ' + sentclass + ' text-messenger-android-text" onclick="editText($(this));"><p class="instextmsg' + ($num + 1) + '-text">'
                + message_text + '</p><i class="fa fa-pencil" aria-hidden="true"></i></div><textarea class="text-name main-input-text insmessage-input instextmsg' + ($num + 1) + '-input check-bad-word" data-class="instextmsg' + ($num + 1) + '" style="display: none;">' + message_text + '</textarea></div><div class="pop-editer"><button class="btn-remove delete-btn" onclick="deletebtn(' + ($num + 1) + ');" data-num="' + ($num + 1) + '"><i class="fa fa-trash"></i></button></div></div></div><div class="message-footer text-message-footer-delivered ' + msg_delivered + ' input-main-div"><div class="message-footerItem " data-num="' + ($num + 1)
                + '"><p class="edit-text"><span class="time-text">' + messageTime + '</span> <i class="fa fa-pencil" aria-hidden="true"></i></p> <p class="sms_text">&#x2022; SMS</p> </div><input type="text" class="main-input-text time-input" data-class="time" value="12:43PM" style="display: none;"></div></div>';
            $('.message-box-num').val(($num + 1));

        }
        html = $msg + $image;

    }
    //  console.log($data);
    return today + html;

}
// chat modal js end

function postChangeOrUpload($this, event) {
    event.stopPropagation();
    $img_src = getImagePath($this, event);
    $imgTag = $this.parents('.text-gallery-image').find('img');
    console.log($img_src);
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

$("input[name='message-image-input']").on("change", function (event) {
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
        jQuery(".file-preview").html("<img height='100'  src='" + img_src + "'>");
        jQuery(".hidden-message-image").val(img_src);
    }
});


// delete message start
function deletebtn($this) {
    if (confirm('Are you sure you want to delete this message?')) {
        $('#message-box-num' + $this).remove();
    }
}

function resetForm() {
    var base_url = $('#js_data').data('base_url');
    $('#chat_modal input[type="text"], #chat_modal input[type="file"], #chat_modal textarea').val('');
    $('#chat_modal #msg_seen').prop('checked', false);
    $('#chat_modal #msg_delivered').prop('checked', false);
    $('#chat_modal #chat_date').prop('selected', false);
    $('#chat_modal #chat_date option:eq(0)').prop('selected', false);
    $('#chat_modal #postprofile_upload, #postimage_upload, #reelimage_upload,#chat_modal #reelprofile_upload').parents('label').find('img').attr('src', base_url + 'assets/images/addimgbg.jpg');
    $('.file-preview').html('');
    $('.file-preview').hide();
    $('#chat_modal .tab-content .tab-pane').removeClass('active in').addClass('fade');
    $('#chat_modal .tab-content #text_msg').addClass('active in').removeClass('fade');
    $("#chat_date").val('None');
    $(".message-date-input").hide();

    jQuery(".hidden-message-image").val('');
}


$("input[type=radio][name=sim_opt]").change(function () {
    if ($("input#sim_1").is(":checked")) {
        $('.ft_txt_msg').text("Text (SIM1)");
        $('.sim_no').text("1");
    } else {
        $('.sim_no').text("2");
        $('.ft_txt_msg').text("Text (SIM2)");
    }
});


$("#preview").click(function() {
    $('body').addClass('body-fixed');
    $(this).attr("disabled", "disabled");
    $html = ($('#download').html()).replace(/\onclick/g, 'data-onclick');
    $html = ($html).replace(/\data-target/g, 'data-t');
    $('#preview-modal-content').html($html);
    
    jQuery("#preview-modal .fa.fa-pencil,#preview-modal .fa.fa-cloud-upload,#preview-modal .fa.fa-times-circle,#preview-modal .btn-remove").remove();
    // jQuery("#preview-modal .edit-text").removeClass('edit-text');
    jQuery("#preview-modal .nav-pills a").removeAttr('data-toggle').removeAttr('href');
    jQuery("#preview-modal .all_footer_wp").removeAttr('data-target');
    $('#preview-modal').show();
});

$(".close-preview").click(function() {
    $('#preview-modal').hide();
    $('body').removeClass('body-fixed');
    
    $("#preview").removeAttr("disabled");
    $('#preview-modal-content').html('');
});