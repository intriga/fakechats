$(document).ready(function() {
    var base_url = $('#js_data').data('base_url');
    $("input[type=radio][name=visibleforLayout]").change(function() {
        if (this.value == "android") {
            jQuery(".android-header").show();
            jQuery(".ios-header").hide();
        } else if (this.value == "iphone") {
            jQuery(".android-header").hide();
            jQuery(".ios-header").show();
        }
    });
    $("#edit-head_color").on("change", function(event) {
        $(".tumblr-header").css("background-color", $(this).val());
    });
    $(".lime_chat_profile").on("change.bs.fileinput", function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".line-received-image img").attr("src", img_src);
    });
    $('#options input[type="text"], #options textarea').keyup(function() {
        var thisData = $(this).attr("data-edit");
        if (thisData) {
            var thisValue = $(this).val();
            thisData = thisData.replace("edit-", "");
            if (thisValue == "") {
                thisValue = "...";
            }
            if (thisData == "likes" && thisValue == "...") {
                $(".post_likes").css("display", "none");
                $(".post_write_comment").css("display", "none");
            } else if (thisData == "likes" && thisValue != "...") {
                $(".post_likes").css("display", "block");
                $(".post_write_comment").css("display", "block");
            }
            $(".text-" + thisData).html(thisValue);
            if (thisData == "name") {
                $(".theName").text(thisValue);
            }
        }
    });
    $('#edit-name').keyup(function() {
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
        if (count > 20) {
            var res = text1.substr(0, 14);
            var res1 = res + '...';
            $(".name-name").text(res1);
        } else {
            $(".name-name").text(text1);
        }
    });
    $("#visiblefooter").click(function() {
        if ($("input#visiblefooter").is(":checked")) {
            $(".all_footer_wp").hide();
        } else {
            $(".all_footer_wp").show();
        }
    });
    $("#visibleHeader").click(function() {
        if ($("input#visibleHeader").is(":checked")) {
            $(".all_header_wp").hide();
        } else {
            $(".all_header_wp").show();
        }
    });
    $("#online").click(function() {
        if ($("input#online").is(":checked")) {
            $(".header-title").hide();
        } else {
            $(".header-title").show();
        }
    });
    $("input[type=radio][name=visibleforLayout]").change(function() {
        if (this.value == "android") {
            jQuery(".whatsapp-android-header").show();
            jQuery(".whatsapp-ios-header").hide();
            jQuery(".whatsapp-content").addClass("whatsapp-android-content");
        } else if (this.value == "iphone") {
            jQuery(".whatsapp-android-header").hide();
            jQuery(".whatsapp-ios-header").show();
            jQuery(".whatsapp-content").removeClass("whatsapp-android-content");
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
    var base_url = $('#js_data').data('base_url');
    var comment = $("textarea#" + type + "_message").val();
    // comment = comment.replace(/rn|r|n/g, "<br />");
    if (type == "profile1") {
        var where = "received";
    } else if (type == "profile2") {
        var where = "sent";
    }
    var person_name = $("#edit-person_name").val();
    if (comment > "") {
		console.log(comment);
        var str1 = "";
        if (hasWhiteSpace(comment)) {
            str1 = '<p>' + comment + '</p>';
        } else {
            str1 = '<p style="word-break:break-all;">' + comment + '</p>';
        }
        var last_message_append = jQuery(".modal-body .line-msg:last");
        if (where == "received") {
            var img_src = jQuery(".profile1 img").attr("src");
            var person_name = jQuery("#edit-person_name").val();
            var time_set = jQuery("#edit-person_time_set").val();
            if (last_message_append.hasClass("line-send-msg-wrap")) {
                var str_ser = '<div class="line-msg line-send-msg-wrap">' + '<div class="line-send-box">' + str1 + " </div>" + '<div class="line-msg-read-time">' + "<p>Read</p>" + "<p>" + time_set + "</p>" + "</div>" + " </div>";
                last_message_append.after(str_ser);
            } else {
                var str = '<div class="line-msg line-send-msg-wrap">' + '<div class="line-send-box">' + str1 + " </div>" + '<div class="line-msg-read-time">' + "<p>Read</p>" + "<p>" + time_set + "</p>" + "</div>" + " </div>";
            }
        } else {
            var img_src2 = '';
            if (jQuery(".profile1 img").attr("src") == undefined) {
                img_src2 = jQuery(".profile_1 img").attr("src");
            } else {
                img_src2 = jQuery(".profile1 img").attr("src");
            }
            var person_name2 = jQuery("#edit-person_name2").val();
            var time_set2 = jQuery("#edit-person_time_set2").val();
            if (last_message_append.hasClass("line-received-msg-wrap")) {
                var str_ser = '<div class="line-msg line-received-msg-wrap">' + '<div class="line-received-image">' + '<img src="' + img_src2 + '" alt="line-received-image">' + "</div>" + '<div class="line-received-msg">' + str1 + '<div class="line-received-time">' + "<p>" + time_set2 + "</p>" + "</div>" + "</div>" + "</div>";
                last_message_append.after(str_ser);
            } else {
                var str = '<div class="line-msg line-received-msg-wrap">' + '<div class="line-received-image">' + '<img src="' + img_src2 + '" alt="line-received-image">' + "</div>" + '<div class="line-received-msg">' + str1 + '<div class="line-received-time">' + "<p>" + time_set2 + "</p>" + "</div>" + "</div>" + "</div>";
            }
        }
        var item = $(str).hide();
        $(".modal-body").append(item);
        if ($(".modal-body .remove").length > 0) {
            $(".modal-body .remove").fadeTo(250, 0, function() {
                $(".modal-body .remove").remove();
                item.fadeIn(500);
            });
        } else {
            item.fadeIn(500);
        }
        return !1;
    }
};