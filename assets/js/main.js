$(function() {
    $('.selectpicker').selectpicker();
    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#demo-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#demo-form").fadeOut(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#demo-form-link').click(function(e) {
        $("#demo-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#register-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('#mobile-button').click(function() {
      $('i', this).toggleClass('fa-caret-up fa-caret-down');
      $(this).closest('div').toggleClass('mobile-button-bg');
    });

    $("#btn").click(function(){
        $(".contactus-m").toggleClass( "contactus-bg" );
    });


});
$('#datepicker-from').datepicker({
    autoclose: true
});
$('#datepicker-to').datepicker({
    autoclose: true
});
