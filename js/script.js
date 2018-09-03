// NAVBAR collapse function
$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("top-nav-collapse");
    } else {
        $(".navbar").removeClass("top-nav-collapse");
    }
});

// member detailed information hoverbox
