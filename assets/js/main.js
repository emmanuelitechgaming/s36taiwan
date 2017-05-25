$(function() {

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
    $('.asd').click(function() {
      $(this).toggleClass('kulaymalupet');
    });


    $("#btn").click(function(){
        $(".contactus-m").toggleClass( "contactus-bg" );
    });

    $('#fg1').hover(
      function() {
        $(this).attr("src","assets/img/footer/g1-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g1.png");
    });

    $('#fg2').hover(
      function() {
        $(this).attr("src","assets/img/footer/g2-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g2.png");
    });

    $('#fg3').hover(
      function() {
        $(this).attr("src","assets/img/footer/g3-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g3.png");
    });

    $('#fg4').hover(
      function() {
        $(this).attr("src","assets/img/footer/g4-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g4.png");
    });

    $('#gs-body').on('show.bs.collapse', function () {
      $('.mobile-top-menu-close').addClass('mobile-top-menu-close-toggle');
    });

    $('#gs-body').on('hidden.bs.collapse', function () {
      $('.mobile-top-menu-close').removeClass('mobile-top-menu-close-toggle');
    });

    $('#mobile-top-menu-close').click(function() {
      $('#gs-body').collapse('hide');
      $(".contactus-m").toggleClass( "contactus-bg" );
    });

    $('.desktop-support').on('show.bs.collapse', function(){
      $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
      console.log($(this).parent());
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
    });

    $('#casinoSeeMoreBtn').click(function() {
      $('.casino-more').addClass('casino-more-active');
      $(this).parent().css('display', 'none');
    });

    $('.selectpicker').selectpicker();

});
$('#datepicker-from').datepicker({
    autoclose: true
});
$('#datepicker-to').datepicker({
    autoclose: true
});
