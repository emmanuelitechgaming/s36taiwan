$(document).ready(function () {
  $(".btn-log").hover(function() {
  		$(this).attr("src","assets/img/login-hover.png");
  			}, function() {
  		$(this).attr("src","assets/img/login.png");
  	});

    $(".btn-reg").hover(function() {
        $(this).attr("src","assets/img/register-hover.png");
          }, function() {
        $(this).attr("src","assets/img/register.png");
      });


    $(".demo-img").hover(function() {
        $(this).attr("src","assets/img/demo-hover.png");
          }, function() {
        $(this).attr("src","assets/img/demo.png");
      });

   var hash = window.location.hash;
   if (hash != "") {
     $('html,body').animate({
         scrollTop: 0
     }, 500);

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

    $('#footerLinkLang').click(function(e) {
      $('.selectpicker2').trigger('click.bs.dropdown');
      e.stopPropagation();
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('a[href="'+$(this).context.hash+'"]').parent('li').addClass('active');
      $('html,body').animate({
          scrollTop: 0
      }, 300);
    });

    $('.browsers li #ie').hover(function() {
      $('.browsers li #ie img').attr('src', 'assets/img/footer/ie-b.png');
    }, function() {
      $('.browsers li #ie img').attr('src', 'assets/img/footer/ie.png');
    });

    $('.browsers li #moz').hover(function() {
      $('.browsers li #moz img').attr('src', 'assets/img/footer/moz-b.png');
    }, function() {
      $('.browsers li #moz img').attr('src', 'assets/img/footer/moz.png');
    });

    $('.browsers li #chrome').hover(function() {
      $('.browsers li #chrome img').attr('src', 'assets/img/footer/chrome-b.png');
    }, function() {
      $('.browsers li #chrome img').attr('src', 'assets/img/footer/chrome.png');
    });

    $('.browsers li #flash').hover(function() {
      $('.browsers li #flash img').attr('src', 'assets/img/footer/flash-b.png');
    }, function() {
      $('.browsers li #flash img').attr('src', 'assets/img/footer/flash.png');
    });

    $('.certs li #cert1').hover(function() {
      $('.certs li #cert1 img').attr('src', 'assets/img/footer/cert1-b.png');
    }, function() {
      $('.certs li #cert1 img').attr('src', 'assets/img/footer/cert1.png');
    });

    $('.certs li #cert2').hover(function() {
      $('.certs li #cert2 img').attr('src', 'assets/img/footer/cert2-b.png');
    }, function() {
      $('.certs li #cert2 img').attr('src', 'assets/img/footer/cert2.png');
    });

    $('.certs li #cert3').hover(function() {
      $('.certs li #cert3 img').attr('src', 'assets/img/footer/cert3-b.png');
    }, function() {
      $('.certs li #cert3 img').attr('src', 'assets/img/footer/cert3.png');
    });

    $('.certs li #cert4').hover(function() {
      $('.certs li #cert4 img').attr('src', 'assets/img/footer/cert4-b.png');
    }, function() {
      $('.certs li #cert4 img').attr('src', 'assets/img/footer/cert4.png');
    });

    $('#sagaming').hover(function() {
      $('#sagaming img').attr('src', 'assets/img/footer/sagaming-b.png');
    }, function() {
      $('#sagaming img').attr('src', 'assets/img/footer/sagaming.png');
    });

    $('#ssalon').hover(function() {
      $('#ssalon img').attr('src', 'assets/img/footer/ssalon-b.png');
    }, function() {
      $('#ssalon img').attr('src', 'assets/img/footer/ssalon.png');
    });

    $('.live-game > .promo-c > .promo-cta .pull-right').hover(function() {
      $(this).find('img').attr('src', 'assets/img/promo/new/info-b.png');
    }, function() {
      $(this).find('img').attr('src', 'assets/img/promo/new/info.png');
    });

    $('#menu').on('show.bs.collapse', function () {
       $('.menu-toggle i').removeClass('fa-angle-down').addClass('fa-angle-up');
    })

    $('#menu').on('hide.bs.collapse', function () {
       $('.menu-toggle i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    $('a[href="#ctab2"]').click(function() {
      $('#ctab2').css('display', 'block');
      $('#ctab3').addClass('ctab-none');
    });

    $('a[href="#ctab3"]').click(function() {
      $('#ctab3').css('display', 'block');
      $('#ctab2').addClass('ctab-none');
    });

    $('#casinoSeeMoreBtn').click(function() {
      if($('#ctab2').css('display') == 'block'){
        $('#ctab3').toggleClass('casino-more');
      }else{
        $('#ctab2').toggleClass('casino-more');
      }
    });

    $('a[href="#stab1"]').click(function() {
      $('.stab2').css('display', 'block');
      $('.stab3').css('display', 'block');
    });

    $('a[href="#stab2"]').click(function() {
      $('.stab2').css('display', 'block');
      $('.stab3').addClass('stab-none')
    });

    $('a[href="#stab3"]').click(function() {
      $('.stab3').css('display', 'block');
      $('.stab2').addClass('stab-none');
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
    $('#demo-form-btn').click(function(e) {
        $("#demo-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#register-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#register-form-link').removeClass('active');
        $("#demo-form-link").addClass('active');
        e.preventDefault();
    });

    $('.m-demo-img').click(function(e) {
        $("#demo-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#register-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#register-form-link').removeClass('active');
        $("#demo-form-link").addClass('active');
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

    $('.selectpicker').selectpicker();

});


$('#datepicker-from').datepicker({
    autoclose: true
});
$('#datepicker-to').datepicker({
    autoclose: true
});
