

$('#navbar .navbar-nav a').on('click', function () {
    $('#navbar .navbar-nav').find('.active').removeClass('active');
    $(this).addClass('active');
});

