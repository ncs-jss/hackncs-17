// document.addEventListener("load", function(event) {
$(window).bind("load", function() {
    console.log('test');
    $(document).ready(function() {
        $("#main-body").removeClass("unloaded");
        $(".preloader-wrapper").removeClass("visible");
        $(".image-gallery-wrapper").addClass("loaded");
        $.get("partials/sidebar-modal.html", function(data) {
            $(".modal-wrapper").html(data);
            $("#menuModal").on('show.bs.modal', function() {
                console.log('show');
                $(".float-menu .hamburger").addClass("closed");
            });
            $("#menuModal").on('hide.bs.modal', function() {
                $(".float-menu .hamburger").removeClass("closed");
            });
        });
        var textFields = $(".toi-text");
        var imgFields = $(".images-list img");
        if (imgFields.length > 0 && textFields.length > 0) {
            var activeImg = 0;
            var activeText = 0;
            var len = textFields.length;
            console.log($(imgFields[activeImg]));

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
    })
});