// document.addEventListener("load", function(event) {
$(window).bind("load", function () {
    $(document).ready(function () {
        $("#main-body").removeClass("unloaded");
        $(".preloader-wrapper").removeClass("visible");
        $(".image-gallery-wrapper").addClass("loaded");
        $(".back-button").on("click", function () {
            window.history.back();
        });
        $.get("partials/sidebar-modal.html", function (data) {
            $(".modal-wrapper").html(data);
            $("#menuModal").on('show.bs.modal', function () {
                console.log('show');
                $(".float-menu .hamburger").addClass("closed");
            });
            $("#menuModal").on('hide.bs.modal', function () {
                $(".float-menu .hamburger").removeClass("closed");
            });
        });
        var route = $("body").data("page");
        var baseUrl = "http://techtrek.hackncs.com/api/";
        switch (route) {
        case "home":
            var textFields = $(".toi-text");
            var imgFields = $(".images-list img");
            if (imgFields.length > 0 && textFields.length > 0) {
                var activeImg = 0;
                var activeText = 0;
                var len = textFields.length;

                function changeImg() {
                    $(imgFields[activeImg]).removeClass("visible");
                    activeImg = (activeImg + 1) % len;
                    $(imgFields[activeImg]).addClass("visible");
                }

                function changeText() {
                    $(textFields[activeText]).removeClass("visible");
                    activeText = (activeText + 1) % len;
                    $(textFields[activeText]).addClass("visible");
                }
                setInterval(changeText, 4000);
                setInterval(changeImg, 4000);
            }
            var address = baseUrl + "upcomingEvent";
            $.get(address, function (data) {
                var htmlString = "a";
                console.log(data);
            })
            // home ends
            break;
        case "register":
            console.log('register');
            var address = baseUrl + "studentRegister";
            var $input = $('.form-fieldset > input');
            $input.blur(function (e) {
                $(this).toggleClass('filled', !!$(this).val());
            });
            var submitBtn = $('.form input[type=submit]');
            submitBtn.on("click", function () {
                var formData;
                if ($('.form:valid').length > 0) {
                    console.log('valid');
                    $.post(address, formData, function (data) {
                        console.log(data);
                    });
                }
            })
            break;
        case "events":
            var address = baseUrl + "getevents";
            $.get(address, function (data) {
                var htmlString = "a";
                console.log(data);
            })
            break;
        }
        var pages = $("#full-page").children(".section");
        $("#top").hide();
        if (pages.length > 0) {
            $("#full-page").onepage_scroll({
                sectionContainer: ".section",
                loop: false,
                pagination: false,
                updateURL: false,
                beforeMove: function (index) {
                    // console.info(index);
                    index -= 1;
                    switch (index) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        $(".stats-grid-box").removeClass("anim-in-view");
                        break;
                    case 4:
                        // animated fadeInDown
                        break;
                    }
                },
                afterMove: function (index) {
                    switch (index) {
                    case 1:
                        break;
                    case 2:
                        $(".upcoming-event-heading").addClass("animated fadeInUp");
                        $(".upcoming-event-wrapper img").addClass("animated fadeInUp");
                        break;
                    case 3:
                        $(".stats-grid-box").addClass("anim-in-view");
                        break;
                    }
                    if (index === pages.length) {
                        console.log('bottom' + index);
                        $(".arrow-wrapper:not(#top)").hide();
                        $("#top").show();
                    } else {
                        $(".arrow-wrapper:not(#top)").show();
                        $("#top").hide();
                    }
                }
                // anim-in-view
            });
            $(".arrow-wrapper").on("click", function () {
                var dir = $(this).attr('id');
                console.log();
                if (dir === "top") {
                    console.log('up');
                    $("#full-page").moveTo(1);
                } else {
                    $("#full-page").moveDown();
                }
            });
        }
    })
});
