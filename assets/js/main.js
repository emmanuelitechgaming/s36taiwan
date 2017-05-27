$(document).ready(function () {

   var hash = window.location.hash;
   if (hash != "") {
     $('.sidebar-nav li').each(function() {
       $(this).removeClass('active');
     });
     $('.tab-content div').each(function() {
       $(this).removeClass('active');
     });

     var link = "";
     $('sidebar-nav li').each(function() {
       link = $(this).find('a').attr('href');
       if (link == hash) {
         $(this).addClass('active');
       }
     });
     $('.tab-content div').each(function() {
       link = $(this).attr('id');
       if ('#'+link == hash) {
         $(this).addClass('active');
       }
     });
   }
   $('a[href="'+hash+'"]').parent('li').attr('class', 'brand-nav active');

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
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
      // $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
      $('.desktop-support-trigger .fa').removeClass("fa-caret-down").addClass("fa-caret-up");
      console.log($(this).parent());
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
    });

    $('.selectpicker2').click(function() {
      $('.selectpicker2 .fa').toggleClass('fa-caret-down fa-caret-up');
    })

    $('#casinoSeeMoreBtn').click(function() {
      $(this).find('.fa-caret-down').toggleClass('fa-caret-up');
      $('.casino-more').toggleClass('casino-more-active');
    });

    $('.selectpicker').selectpicker();

});


$('#datepicker-from').datepicker({
    autoclose: true
});
$('#datepicker-to').datepicker({
    autoclose: true
});
