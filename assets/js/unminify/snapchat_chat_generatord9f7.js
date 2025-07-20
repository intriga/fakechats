$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#js_data").data("base_url");
    $("input[type=radio][name=visibleforLayout]").change(function () {
        if ("android" == this.value) {
            jQuery(".android-header").show();
            jQuery(".ios-header ").hide();
            $(".snapchat-chat").removeClass("iphone");
            $(".ft-snapchat").removeClass("show");
        } else if ("iphone" == this.value) {
            jQuery(".android-header").hide();
            jQuery(".ios-header").show();
            $(".snapchat-chat").addClass("iphone");
            $(".ft-snapchat").addClass("show");
        }
    });
    $("#visiblefooter").click(function () {
        if ($("input#visiblefooter").is(":checked")) {
            $(".all_footer_wp").hide();
            $(".ft-snapchat").addClass("remove");
        } else {
            $(".all_footer_wp").show();
            $(".ft-snapchat").removeClass("remove");
        }
    });
    $("#visibleHeader").click(function () {
        $("input#visibleHeader").is(":checked") ? $(".all_header_wp").hide() : $(".all_header_wp").show();
    });
});
$("#edit-2-Clock").keyup(function () {
    var e = ($("#time-format").prop("checked") ? onTimeChangein24 : onTimeChange)($(this).val());
    $(".status-time").text(e);
});
$("#edit-2-Clock").change(function () {
    var e = ($("#time-format").prop("checked") ? onTimeChangein24 : onTimeChange)($(this).val());
    $(".status-time").text(e);
});
$("#time-format").change(function () {
    if ($(this).prop("checked")) {
        var e = onTimeChangein24($("#edit-2-Clock").val());
        $(".msg-time").each(function (e, a) {
            $(this).text(onTimeChangein24($(this).data("time")));
        });
    } else {
        e = onTimeChange($("#edit-2-Clock").val());
        $(".msg-time").each(function (e, a) {
            $(this).text(onTimeChange($(this).data("time")));
        });
    }
    $(".status-time").text(e);
});
$("#d_mode").click(function () {
    $("input#d_mode").is(":checked") ? $(".snapchat").addClass("dark-theme") : $(".snapchat").removeClass("dark-theme");
});
$("#d_sim").click(function () {
    $("input#d_sim").is(":checked") ? $(".network-two").removeClass("hide") : $(".network-two").addClass("hide");
});
$("#d_mode").click(function () {
    $("input#d_mode").is(":checked") ? $(".snapchat").addClass("dark-theme") : $(".snapchat").removeClass("dark-theme");
});
$("#d_sim").click(function () {
    $("input#d_sim").is(":checked") ? $(".phone-network").addClass("sim2") : $(".phone-network").removeClass("sim2");
});
$("#battery_options").change(function () {
    $(".battery-container").removeClass("battery-horizontal battery-vertical-one battery-vertical-two");
    $(".battery-container").addClass($(this).val());
});
$("input[type=radio][name=visibleforLayout]").change(function () {
    "android" == this.value ? $(".battery-status").text($("#Battery_percent").val() + "%") : "iphone" == this.value && $(".battery-status").text($("#Battery_percent").val());
});
$("#Battery_percent").keyup(function () {
    var e = $("#Battery_percent").val();
    (e = 100 < e ? 100 : e) < 0 && (e = 0);
    $("#Battery_percent").val(e);
    $(".battery-level").css("width", e + "%");
    $("input#iphone_wp").is(":checked") ? $(".battery-status").text(e) : $(".battery-status").text(e + "%");
});
$("#bt_per").click(function () {
    $(this).is(":checked") ? $(".battery-container").removeClass("hide-percentage") : $(".battery-container").addClass("hide-percentage");
});
$("#networ_speed").change(function () {
    $(".show-network").removeClass("n5g n4g n3g n2g nwifi");
    $(".show-network").addClass($(this).val());
});
$("#chat_date").change(function () {
    "otherdate" == $(this).val() ? $(".message-date-input").show() : $(".message-date-input").hide();
});
$(document).on("click", ".edit-text", function (e) {
    editText($(this));
});
$(document).click(function (e) {
    if (!$(e.target).is(".input-main-div,.input-main-div *")) {
        $(".edit-text").show();
        $(".main-input-text,.date-info-icon").hide();
        $(".main-input-text").keyup(function (e) {
            $(this).val(remvoeBadWord($(this).val()));
            inputKeyUp($(this), e);
            chatName($(".name-input"));
        });
    }
});
function inputKeyUp(e, a) {
    if (13 == a.which) {
        $(".edit-text").show();
        $(".main-input-text,.date-info-icon").hide();
    } else {
        var a = "",
            t = (text1 = e.val());
        !(18 < t.length) || e.hasClass("snapmessage-input") ? (a += text1) : (a += text1.substr(0, 17) + "...");
        if ("date" == ($nameClass = e.data("class")).replace(/[0-9]/g, "")) {
            if ("" != t && t.match(date_regex)) {
                $("." + $nameClass + "-text").text(t);
                $("." + $nameClass + "-input").val(t);
                idate = "Today" != t && "Yesterday" != t ? getIdate(new Date(t)) : t;
                $(".iphone-" + $nameClass + "-text").text(idate);
                $(".iphone-" + $nameClass + "-input").val(idate);
            }
        } else {
            $("." + $nameClass + "-text").text(a);
            $("." + $nameClass + "-input").val(a);
        }
    }
}
$(".main-input-text").keyup(function (e) {
    $(this).val(remvoeBadWord($(this).val()));
    inputKeyUp($(this), e);
    chatName($(".name-input"));
});
function editText(e) {
    $(".edit-text").show();
    $(".main-input-text").hide();
    $(".main-input-text,.date-info-icon").hide();
    e.hide();
    e.parents(".input-main-div").find(".main-input-text,.date-info-icon").show().select();
}
function postChangeOrUpload(e, a) {
    a.stopPropagation();
    $img_src = getImagePath(e, a);
    $imgTag = e.parents(".text-gallery-image").find("img");
    console.log($img_src);
    if ("error" == $img_src) {
        e.val("");
        $(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        $(".error_msg").attr("style", "display:flax");
        setTimeout(function () {
            $(".error_msg").attr("style", "display:none");
        }, 6e3);
    } else $imgTag.attr("src", $img_src);
}
$("input[name='message-image-input']").on("change", function (e) {
    e.stopPropagation();
    if ("error" == ($img_src = getImagePath($(this), e))) {
        jQuery(".file-preview-opt").hide();
        $(this).val("");
        $(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        $(".error_msg").attr("style", "display:flax");
        setTimeout(function () {
            $(".error_msg").attr("style", "display:none");
        }, 6e3);
    } else {
        e = $img_src;
        jQuery(".fileinput-new").hide();
        jQuery(".file-preview-opt").show();
        jQuery(".file-exists").show();
        jQuery(".file-preview").html("<img height='100'  src='" + e + "'>");
        jQuery(".hidden-message-image").val(e);
    }
});
function removeDiv(e) {
    confirm("Are you sure you want to delete this message?") && $(e).parent("div").remove();
}
$(".btn-crop-profile1").click(function () {
    $profileCrop1.croppie("result", { type: "canvas", size: "viewport" }).then(function (e) {
        $(".facebook_profile_pic_img").attr("src", e);
        $("#crop-profile-modal").modal("hide");
        $(".img-profile-main-tag").removeClass("hide");
        $("#crop-profile1").addClass("hide");
        e = $("#js_data").data("base_url");
        $(".snapchat_profile_preview").attr("src", e + "assets/images/addimgbg.jpg");
        $("#profile-img").val("");
    });
});
$("#profile-img").on("change", function () {
    profileCrop1(this);
    $(".message-avatar").addClass("add");
});
var $profileCrop1;
function profileCrop1(e) {
    var a = $(e).val().split(".").pop();
    if ("jpg" == a.toLowerCase() || "jpeg" == a.toLowerCase() || "png" == a.toLowerCase() || "svg" == a.toLowerCase())
        if (e.files && e.files[0]) {
            $("#crop-profile1").attr("style", "width: 265px; height: 155px;");
            $("#crop-profile1").removeClass("hide");
            $(".img-profile-main-tag").addClass("hide");
            a = new FileReader();
            a.onload = function (e) {
                $profileCrop1.croppie("bind", { url: e.target.result }).then(function () {});
            };
            a.readAsDataURL(e.files[0]);
            $("#crop-profile-modal").modal("show");
        } else {
            $(e).val("");
            $(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
            $(".error_msg").attr("style", "display:flex");
            setTimeout(function () {
                $(".error_msg").attr("style", "display:none");
            }, 6e3);
        }
    else {
        $(e).val("");
        $(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>');
        $(".error_msg").attr("style", "display:flex");
        setTimeout(function () {
            $(".error_msg").attr("style", "display:none");
        }, 6e3);
    }
}
$profileCrop1 = $("#crop-profile1").croppie({ viewport: { width: 150, height: 150, type: "circle" }, showZoomer: !0, enableExif: !1 });
$(".p-close-btn-modal").on("click", function () {
    $("#profile-img").val("");
    $("#crop-profile1").addClass("hide");
    $(".img-profile-main-tag").removeClass("hide");
});
$(".btn-crop-profile1").click(function () {
    $profileCrop1.croppie("result", { type: "canvas", size: "viewport" }).then(function (e) {
        $(".person-profile").attr("src", e);
        $("#crop-profile-modal").modal("hide");
        $(".img-profile-main-tag").removeClass("hide");
        $("#crop-profile1").addClass("hide");
        e = $("#js_data").data("base_url");
        $(".snapchat_profile_preview").attr("src", e + "assets/images/addimgbg.jpg");
        $("#profile-img").val("");
    });
});
$(".ins-send-btn").click(function () {
    $messageText = $(".message-input").val();
    var e = $("input[name='msg-option']:checked").val();
    $messageDisappearing = "disappearing" == e ? $(".message-input-disappearing").val() : "";
    $messageSendType = $("input[name='message-send-type']:checked").val();
    $messageType = $("input[name='msg-option']:checked").val();
    $postimage = $("#postimage").val();
    $messageBoxId = $(".message-box-id").val();
    $messageImage = $(".hidden-message-image").val();
    if ("otherdate" == $("#chat_date").val()) {
        (e = $(".message-date-input").val()),
            (e = (e.split("-"), new Date(e))),
            (e = e.getDate() + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()]);
        $messageDate = e;
    } else $messageDate = $("#chat_date").val();
    $flag = 0;
    console.log("11", $messageText.trim());
    console.log("122", $messageImage);
    if ("" == $messageText.trim() && "" == $messageImage) {
        $(".message-input").addClass("error");
        console.log("INN");
        $flag++;
    } else {
        console.log("OUT");
        $(".message-input").removeClass("error");
    }
    if ("" != $messageDate && $messageDate.match(/^(Today|Yesterday|(0?[1-9]|[12][0-9]|3[01])\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4})$/)) {
        $messageDate;
        $(".message-date-input").removeClass("error");
        $(".error-msg").html("").hide();
    }
    $messageSendType = "Receive" == $messageSendType ? "receive" : "sent";
    $msg_delivered = $("input[name='msg_delivered']:checked").val();
    $postimage = $("input[name='setimage']:checked").val();
    $tabname = "text";
    $("#text_msg").hasClass("active") ? ($tabname = "text") : $("#post_msg").hasClass("active") ? ($tabname = "post") : $("#reel_msg").hasClass("active") && ($tabname = "reel");
    $data = {
        message_box_id: $messageBoxId,
        message_text: $messageText,
        message_disappearing: $messageDisappearing,
        message_send_type: $messageSendType,
        message_type: $messageType,
        message_date: $messageDate,
        tabname: $tabname,
        message_image: $messageImage,
        msg_delivered: $msg_delivered,
        postimage: $postimage,
    };
    console.log($data);
    e = getMessageBoxHtml($data);
    $(".main-snapchat-msg").append(e);
    chatName($(".name-input"));
    $(".close-btn").click();
});
function getMessageBoxHtml(e) {
    var a = $("#js_data").data("base_url"),
        t = "receive" == e.message_send_type ? "received" : "sent",
        s = "disappearing" == e.message_type,
        i = (e.message_send_type, "sent" == e.message_send_type ? "text-sent" : ""),
        n = "" != e.message_text ? e.message_text : "",
        p = "" != e.message_disappearing ? e.message_disappearing : "",
        l = (($num = Number($(".message-box-num").val())), document.querySelector(".name-text")),
        l = l ? l.innerText : "",
        a =
            "video" == e.postimage
                ? '<div class="video-pause snaptextmsg' +
                  ($num + 1) +
                  '-icon input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="msgtime' +
                  ($num + 1) +
                  '-text">0:01</span></p><input type="text" class="main-input-text msgtime' +
                  ($num + 1) +
                  '-input snapmessage-input" data-class="msgtime' +
                  ($num + 1) +
                  '" value="0:01"><img src="' +
                  a +
                  'assets/images/snap-volume-mute.png" alt="video-mute"></div>'
                : " ",
        m =
            "None" != e.message_date
                ? '<div class="date-container input-main-div"><p class="text-center edit-text text-gray" onclick="editText($(this));"><span class="chattime' +
                  ($num + 1) +
                  '-text">' +
                  e.message_date +
                  '</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text chattime' +
                  ($num + 1) +
                  '-input check-bad-word snapmessage-input" value="' +
                  e.message_date +
                  '" data-class="chattime' +
                  ($num + 1) +
                  '" style="display: none;"><button class="remove btn-remove" onclick="removeDiv(this)"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div>'
                : "",
        o = (replymsgText = replymsgText1 = temp = $t = "");
    if ("" != $(".snap-msg-reply").html().trim()) {
        if ("photo" == $(".snap-msg-reply .snap-reply").data("t") || "video" == $(".snap-msg-reply .snap-reply").data("t")) {
            $tempType = $(".snap-msg-reply .snap-reply").data("t");
            $t = '<div class="replied-msg"><i class="fa fa-reply" aria-hidden="true"></i><p>';
            "sent" == $(".snap-msg-reply .snap-reply").data("sender-type") && "sent" == t
                ? ($t += "Replied to your " + $tempType)
                : "received" == $(".snap-msg-reply .snap-reply").data("sender-type") && "sent" == t
                ? ($t += "Replied to <span class='profileChatName-text'>John</span>'s " + $tempType)
                : "sent" == $(".snap-msg-reply .snap-reply").data("sender-type") && "received" == t
                ? ($t += "Replied to your " + $tempType)
                : "received" == $(".snap-msg-reply .snap-reply").data("sender-type") && "received" == t && ($t += "Replied to <span class='profileChatName-text'>John</span>'s " + $tempType);
            $t += "</p></div>";
        }
        if ("text" != $(".snap-msg-reply .snap-reply").data("t") || ("" == n && "" == e.message_image)) {
            if (!(("photo" != $(".snap-msg-reply .snap-reply").data("t") && "video" != $(".snap-msg-reply .snap-reply").data("t")) || ("" == n && "" == e.message_image))) {
                replymsgText +=
                    '<div class="parent-one"> <div class="msg-img-sec old-img"><div class="snap-image"><img src="' + $(".snap-msg-reply .snap-reply-img img").attr("src") + '" alt="Reply Image" loading="lazy" class="image-reply"></div>';
                "" != n ? (replymsgText1 = "</div></div>") : (replymsgText += "</div></div>");
            }
        } else {
            replymsgText +=
                '<div class="reply-msg-sec"><div class="replied-name"><p class="msg_name">' +
                $(".chat-replied-name.msg_name").text() +
                '</p><p class="msg_time">' +
                $(".snap-msg-reply .snap-replytime-view").text() +
                '</p></div><p class="reply-msg">' +
                $(".snap-msg-reply .reply-msg-text").text() +
                "</p></div>";
            $t = "";
        }
        o = " message-reply-box";
        o += "text" == $(".snap-msg-reply .snap-reply").data("t") ? " snapchat-message" : " snapchat-image";
    } else temp = " snapchat_images";
    l =
        "sent" == e.message_send_type
            ? '<div class="input-main-div snap-msg-box"><span class="msg_name">Me</span>' + $t + "</div>"
            : "receive" == e.message_send_type
            ? '<div class="input-main-div snap-msg-box" ><span class="msg_name name-text shortname-text">' + l + "</span>" + $t + "</div>"
            : "";
    if ("text" == e.tabname) {
        if (($image = "") != e.message_image) {
            var r = "video" == e.postimage ? "video" : "photo",
                d = e.message_image;
            $image =
                '<div id="message-box-num' +
                ($num + 1) +
                '" class="snapchat-msg snapchat-msg-' +
                t +
                temp +
                o +
                '">' +
                l +
                '<div class="snapchat-msg-text snapchat-msg-text-' +
                t +
                ' ">' +
                replymsgText +
                '<div class="text-gallery-image"><div class="parent-two"><div class="reply-msg-img"><img class="msg-img snaptextmsg' +
                ($num + 1) +
                '-img" src="' +
                d +
                '" /><div class="save-image"> <span class="save-chat light_mode"></span><span class="save-chat dark_mode"></span></div><div class="modal-title-img"><label class="input-img"><i class="fa fa-pencil" aria-hidden="true"></i><input type="file" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div>' +
                a +
                '</div></div></div></div><div class="pop-editer btn-remove"><button class="delete-btn" onclick="deletebtn(' +
                ($num + 1) +
                ');" data-num="' +
                ($num + 1) +
                '"><i class="fa fa-trash"></i></button><button data-num="' +
                ($num + 1) +
                '" class="save-btn" onclick="savebtn($(this));"><i class="fa fa-bookmark-o" aria-hidden="true"></i></button><div class="save-image" onclick="replyMsg(' +
                ($num + 1) +
                ", `" +
                t +
                "`, `" +
                r +
                '`)"><span class="save-chat light_mode"></span><span class="save-chat dark_mode"></span></div></div></div>';
            $(".message-box-num").val($num + 1);
        }
        $num = Number($(".message-box-num").val());
        if (($msg = "") != n) {
            $msg =
                '<div id="message-box-num' +
                ($num + 1) +
                '" class="snapchat-msg snapchat-msg-' +
                t +
                o +
                '">' +
                l +
                '<div class="snapchat-msg-text snapchat-msg-text-' +
                t +
                ' input-main-div">' +
                replymsgText +
                '<div class="parent-two"><div class="reply-msg-img"><div class="message-text  edit-text ' +
                i +
                '" onclick="editText($(this));"><p class="snaptextmsg' +
                ($num + 1) +
                '-text">' +
                n +
                '</p><i class="fa fa-pencil" aria-hidden="true"></i></div><textarea class="text-name main-input-text snapmessage-input snaptextmsg' +
                ($num + 1) +
                '-input check-bad-word" data-class="snaptextmsg' +
                ($num + 1) +
                '" style="display: none;">' +
                n +
                "</textarea></div></div>" +
                replymsgText1 +
                '<div class="pop-editer btn-remove"><button class="delete-btn" onclick="deletebtn(' +
                ($num + 1) +
                ');" data-num="' +
                ($num + 1) +
                '"><i class="fa fa-trash"></i></button><button data-num="' +
                ($num + 1) +
                '" class="save-btn" onclick="savebtn($(this));"><i class="fa fa-bookmark-o" aria-hidden="true"></i></button><div class="save-image" onclick="replyMsg(' +
                ($num + 1) +
                ", `" +
                t +
                "`, `" +
                e.tabname +
                '`)"><span class="save-chat light_mode"></span><span class="save-chat dark_mode"></span></div></div></div></div></div>';
            $(".message-box-num").val($num + 1);
        }
        $num = Number($(".message-box-num").val());
        if (($d_msg = "") != p) {
            $d_msg =
                '<div id="message-box-num' +
                ($num + 1) +
                '" class="unwanted_msg"><div class="d-msg-' +
                s +
                ' input-main-div"> <p class="edit-text" onclick="editText($(this));"><span class="snaptextmsg' +
                ($num + 1) +
                '-text">' +
                p +
                '</span><i class="fa fa-pencil" aria-hidden="true"></i></p><textarea class="text-name main-input-text snapmessage-input snaptextmsg' +
                ($num + 1) +
                '-input check-bad-word" data-class="snaptextmsg' +
                ($num + 1) +
                '" style="display: none;">' +
                p +
                '</textarea></div><button class="remove" onclick="removeDiv(this)"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div>';
            $(".message-box-num").val($num + 1);
        }
        console.log("1", $d_msg);
        html = $image + $msg + $d_msg;
    }
    return m + html;
}
function deletebtn(e) {
    confirm("Are you sure you want to delete this message?") && $("#message-box-num" + e).remove();
}
function resetForm() {
    var e = $("#js_data").data("base_url");
    $('#chat_modal input[type="text"], #chat_modal input[type="file"], #chat_modal .messagetaboptions textarea').val("");
    $("#chat_modal #msg_seen").prop("checked", !1);
    $("#chat_modal #msg_delivered").prop("checked", !1);
    $("#chat_modal #chat_date").prop("selected", !1);
    $("#chat_modal #chat_date option:eq(0)").prop("selected", !1);
    $("#chat_modal #postprofile_upload, #postimage_upload, #reelimage_upload,#chat_modal #reelprofile_upload")
        .parents("label")
        .find("img")
        .attr("src", e + "assets/images/addimgbg.jpg");
    $(".file-preview").html("");
    $(".file-preview").hide();
    $(".snap-msg-reply").html("");
    $(".snap-msg-reply").addClass("d-none");
    $("#chat_modal .tab-content .tab-pane").removeClass("active in").addClass("fade");
    $("#chat_modal .tab-content #text_msg").addClass("active in").removeClass("fade");
    $("#chat_date").val("None");
    $(".message-date-input").hide();
    $(".file-preview-opt").hide();
    jQuery(".hidden-message-image").val("");
}
$("input[type=radio][name=msg-option]").change(function () {
    if ("disappearing" == this.value) {
        $(".messagetaboptions").hide();
        $(".disappearingtaboptions").show();
        $(".message-input-disappearing").val("YOU DELETE A CHAT");
    } else {
        $(".disappearingtaboptions").hide();
        $(".messagetaboptions").show();
    }
});
$("#msg_option").change(function () {
    "deletechat" === $(this).val()
        ? $(".message-input-disappearing").val("YOU DELETE A CHAT")
        : "screenshort" === $(this).val()
        ? $(".message-input-disappearing").val("YOU TOOK A SCREENSHORT OF CHAT!")
        : $(".message-input-disappearing").val("YOU SAVED A SNAP IN CHAT!");
});
function savebtn(e) {
    var a = $(e).data("num");
    $(e).toggleClass("active");
    if ($(e).hasClass("active")) {
        $(e).html('<i class="fa fa-bookmark" aria-hidden="true"></i>');
        $("#message-box-num" + a).addClass("save");
    } else {
        $(e).html('<i class="fa fa-bookmark-o" aria-hidden="true"></i>');
        $("#message-box-num" + a).removeClass("save");
    }
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
function chatName(e) {
    e = e.val().split(" ");
    1 < e.length && e.splice(-1, 1);
    $(".profileChatName-text").html(e.join(" "));
}
function replyMsg(e, a, t) {
    $("#js_data").data("base-url");
    $name = $("#message-box-num" + e + " .msg_name").html();
    $text = "text" == t ? $(".snaptextmsg" + e + "-text").html() : "photo" == t ? "Photo" : "Attachment";
    if ("text" == t) {
        innerData = '<p class="reply-msg-text">' + $text + "</p>";
        cls = "";
    } else {
        innerData = '<img src="' + $(".snaptextmsg" + e + "-img").attr("src") + '" alt="snapchat-chat-img" class="reply-image">';
        cls = "snap-reply-img";
    }
    replyMsgText =
        '<div class="snap-reply" data-sender-type="' +
        a +
        '" data-t="' +
        t +
        '"><div class="snap-chat-sec"><p class="chat-replied-name msg_name">' +
        $name +
        '</p><div class="reply-date"><span class="snap-replytime-view">11 April</span><input type="datetime-local" id="snap-replytime" name="snap-replytime" onchange="replyChangeTime($(this))"></div></div><div class="chat-image ' +
        cls +
        '">' +
        innerData +
        "</div></div>";
    $(".snapchat-footer.all_footer_wp").click();
    $(".snap-msg-reply").html(replyMsgText);
    $(".snap-msg-reply").removeClass("d-none");
    $(".post-tab,.post-tab-link,.videos-tab,.videos-tab-link").hide();
}
function replyChangeTime(e) {
    if ((sDate = e.val().split("T"))[0] == $("#js_data").data("current_date")) $(".snap-replytime-view").html(onTimeChange(sDate[1]));
    else {
        var e = sDate[0].split("-"),
            a = (parseInt(e[0]), parseInt(e[1])),
            e = parseInt(e[2]) + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][a - 1];
        $(".snap-replytime-view").html(e);
    }
}
