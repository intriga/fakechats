$(document).ready(function() {
    var base_url = $('#js_data').data('base_url');
    $("input[type=radio][name=visibleforLayout]").change(function() {
        if (this.value == "android") {
            jQuery(".whatsapp-android-header").show();
            jQuery(".whatsapp-ios-header").hide();
            jQuery(".whatsapp-content").addClass("whatsapp-android-content")
        } else if (this.value == "iphone") {
            jQuery(".whatsapp-android-header").hide();
            jQuery(".whatsapp-ios-header").show();
            jQuery(".whatsapp-content").removeClass("whatsapp-android-content")
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
                bad_word = bad[i]
            }
        }
        text1 = text.replace(bad_word, '');
        var count = text1.length;
        if (count > 20) {
            var res = text1.substr(0, 14);
            var res1 = res + '...';
            $(".name-name").text(res1);
            $(".name-name1").text(res1)
        } else {
            $(".name-name1").text(text1);
            $(".name-name").text(text1)
        }
    });
    $("#night_mode").change(function() {
        if ($(this).is(":checked")) {
            $("#download").addClass("skype-night-mode");
            $(".skype-chat-user .light_mode").addClass("hidden");
            $(".skype-chat-user .dark_mode").removeClass("hidden");
            $(".skype-chat-header-icons .light_mode").addClass("hidden");
            $(".skype-chat-header-icons .dark_mode").removeClass("hidden");
            $(".skype-footer .light_mode").addClass("hidden");
            $(".skype-footer .dark_mode").removeClass("hidden")
        } else {
            $("#download").removeClass("skype-night-mode");
            $(".skype-chat-user .light_mode").removeClass("hidden");
            $(".skype-chat-user .dark_mode").addClass("hidden");
            $(".skype-chat-header-icons .light_mode").removeClass("hidden");
            $(".skype-chat-header-icons .dark_mode").addClass("hidden");
            $(".skype-footer .light_mode").removeClass("hidden");
            $(".skype-footer .dark_mode").addClass("hidden")
        }
    });
    $(".bf_chat_profile").on("change.bs.fileinput", function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".skype-received-pf img").attr("src", img_src);
        jQuery(".skype-received-msg-view img").attr("src", img_src)
    });
    $('#options input[type="text"], #options textarea').keyup(function() {
        var thisData = $(this).attr("data-edit");
        if (thisData) {
            var thisValue = $(this).val();
            thisData = thisData.replace("edit-", "");
            if (thisValue == "") {
                thisValue = "..."
            }
            if (thisData == "likes" && thisValue == "...") {
                $(".post_likes").css("display", "none");
                $(".post_write_comment").css("display", "none")
            } else if (thisData == "likes" && thisValue != "...") {
                $(".post_likes").css("display", "block");
                $(".post_write_comment").css("display", "block")
            }
            $(".text-" + thisData).html(thisValue);
            if (thisData == "name") {
                $(".theName").text(thisValue)
            }
        }
    });
    $("#status_active_slct").change(function() {
        var element_set = jQuery(this);
        var valcolor = element_set.val();
        $(".skype-chat-active_view").removeClass(function(index, classNames) {
            var current_classes = classNames.split(" "),
                classes_to_remove = [];
            $.each(current_classes, function(index, class_name) {
                if (/status.*/.test(class_name)) {
                    classes_to_remove.push(class_name)
                }
            });
            return classes_to_remove.join(" ")
        });
        $(".skype-chat-active_view").addClass(valcolor)
    });
    $("#visiblefooter").click(function() {
        if ($("input#visiblefooter").is(":checked")) {
            $(".all_footer_wp").hide()
        } else {
            $(".all_footer_wp").show()
        }
    });
    $("#visibleHeader").click(function() {
        if ($("input#visibleHeader").is(":checked")) {
            $(".all_header_wp").hide()
        } else {
            $(".all_header_wp").show()
        }
    });
    $("#online").click(function() {
        if ($("input#online").is(":checked")) {
            $(".header-title").hide()
        } else {
            $(".header-title").show()
        }
    });
    $("input[type=radio][name=visibleforLayout]").change(function() {
        if (this.value == "android") {
            jQuery(".android-header").show();
            jQuery(".ios-header").hide();
            jQuery(".whatsapp-content").addClass("whatsapp-android-content")
        } else if (this.value == "iphone") {
            jQuery(".android-header").hide();
            jQuery(".ios-header").show();
            jQuery(".whatsapp-content").removeClass("whatsapp-android-content")
        }
    });
    $("#edit-tagname").keyup(function() {
        var count = $(this).val();
        $(".header-title").text("@" + count)
    });
    $("#edit-2-Clock").keyup(function() {
        var count = $(this).val();
        $(".status-time").text(count)
    });
    $("#Battery_percent").keyup(function() {
        var count = $(this).val();
        $(".battery-level").removeClass("red");
        if (count <= 15) {
            $(".battery-level").addClass("red")
        }
        $(".battery-level").css("width", count + "%");
        $(".battery-status").text(count + "%")
    });
    $("#edit-Status").keyup(function() {
        var count = $(this).val();
        $(".header-title").text(count)
    });
    $("#active_now").keyup(function() {
        var count = $(this).val();
        $(".text-Status").html('<span></span>' + count)
    })
});
function addComment(type) {
    var base_url = $('#js_data').data('base_url');
    var comment = $("textarea#" + type + "_message").val();
    var send_time = $("#edit-send_time").val();
    var received_time = $("#edit-received_time").val();
    comment = comment.replace(/rn|\r|\n/g, "<br />");
    if (type == "profile1") {
        var where = "received"
    } else if (type == "profile2") {
        var where = "sent"
    }
    var person_name = $("#edit-person_name").val();
    if (comment > "") {
        var str1 = "";
        if (hasWhiteSpace(comment)) {
            str1 = '<p>' + comment + '<p>';
        } else {
            str1 = '<p style="word-break:break-all;">' + comment + '<p>';
        }
        var last_message_append = jQuery(".modal-body .skype-msg_set:last");
        var msg_append = jQuery(".modal-body");
        if (where == "received") {
            if (last_message_append.hasClass("skype-received-wrap")) {
                var str = '<div class="skype-received-msg">' + str1 + "</div>";
                msg_append = last_message_append.find(".skype-received-msg-box")
            } else {
                var img_src = '';
                if (jQuery(".profile1 img").attr("src") == undefined) {
                    img_src = jQuery(".profile_1 img").attr("src")
                } else {
                    img_src = jQuery(".profile1 img").attr("src")
                }
                $('.skype-received-msg-view').html('');
                var str = '<div class="skype-msg_set skype-received-wrap">' + '<div class="skype-received-pf">' + '<img src="' + img_src + '" alt="skype-received-pf">' + "</div>" + '<div class="skype-received-msg-wrap">' + '<div class="skype-received-name-date">' + '<p><span class="name-name1">John</span><span> ,</span><span>' + received_time + "</span></p>" + "</div>" + '<div class="skype-received-msg-box">' + '<div class="skype-received-msg">' + str1 + "</div>" + "</div>" + "</div>" + '<div class="skype-received-msg-view">' + '<img src="' + img_src + '" alt="skype-received-pf">' + "</div>" + "</div>"
            }
        } else {
            if (last_message_append.hasClass("skype-send-wrap")) {
                var str = '<div class="skype-send-msg">' + str1 + "</div>";
                msg_append = last_message_append.find(".skype-send-msg-wrap")
            } else {
                var str = '<div class="skype-msg_set skype-send-wrap">' + '<div class="skype-send-date">' + "<p>" + send_time + "</p>" + "</div>" + '<div class="skype-send-msg-wrap">' + '<div class="skype-send-msg">' + str1 + "</div>" + "</div>" + "</div>"
            }
        }
        var item = $(str).hide();
        msg_append.append(item);
        if ($(".modal-body .remove").length > 0) {
            $(".modal-body .remove").fadeTo(250, 0, function() {
                $(".modal-body .remove").remove();
                item.fadeIn(500)
            })
        } else {
            item.fadeIn(500)
        }
        return !1
    }
};