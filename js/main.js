

    //Arrow to back to Top

    $(document).scroll(function() {
        if (window.pageYOffset >= 500)
            $(".arrow").css("display", "block");
        else
            $(".arrow").css("display", "none");
    });

    $('.arrow').on('click', function() {
        $("html").animate({
            scrollTop: 0
        }, 800);
    }) ;
