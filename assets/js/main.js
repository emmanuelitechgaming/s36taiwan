$(document).ready(function () {

  $('#country-sel').flagStrap({
    countries: {
            "TW": "台灣",
            "CN": "中國",
            "ID": "印尼",
            "IN": "印度",
            "VN": "越南",
            "JP": "日本",
            "MY": "馬來西亞",
            "TH": "泰國"

        }
  });

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
     $('.promo-tabs li').each(function() {
       $(this).removeClass('active');
     });
     $('.tab-content div').each(function() {
       $(this).removeClass('active');
     });
     $('.promo-section .breadcrumb li a[href="promotion.html"]').attr('href', function(i, href) {
       return href + hash;
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

    $('#hhelp').hover(function() {
      $('#hhelp img').attr('src', 'assets/img/footer/help-b.png');
    }, function() {
      $('#hhelp img').attr('src', 'assets/img/footer/help.png');
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
      $('#ctab2').removeClass('ctab-none');
      $('#ctab3').addClass('ctab-none');
    });

    $('a[href="#ctab3"]').click(function() {
      $('#ctab3').removeClass('ctab-none');
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
      $('.stab1').removeClass('stab-none');
      $('.stab2').addClass('stab-none');
    });

    $('a[href="#stab2"]').click(function() {
      $('.stab2').removeClass('stab-none');
      $('.stab1').addClass('stab-none');
    });


    $('.promotion-swiper-container a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.promotion-swiper-container').find('.active').removeClass('active');
      $(this).addClass('active');
    });

    $('.desktop-support .flag-icon').parent('div').addClass('county-line');

    $('#desktopSupportClose').click(function() {
      $('#desktopSupport').collapse('toggle');
    })

    $('.selectpicker2-sub').hover(function() {
      $('.selectpicker2-sub').css('color', '#c4c4c4');
      $(this).css('color', '#fba601');
      $(this).parent('a').find('.cntry').css('color', '#fff');
    }, function() {
      $(this).css('color', '#c4c4c4');
      $(this).parent('a').find('.cntry').css('color', '#fff');
    });

    $('.selectpicker2-menu a').hover(function() {
      $(this).css('border-bottom', '1px solid #fba601');
    }, function() {
      $(this).find('.cntry').css('color', '#fff');
      $(this).css('border-bottom', '1px solid #fba601');
    });

    $('#a-acc img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/acc2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/acc2.png');
    });

    $('#a-wallet img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/wallet2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/wallet2.png');
    });

    $('#a-info img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/info2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/info2.png');
    });

    $('#a-out img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/out2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/out2.png');
    });

    $('.m-top-header-loc, .m-top-header-web, .lp-panel-close').click(function() {
      $('.lang .drop').css({
        "display": "block",
        "position": "absolute",
        "z-index": "88888",
      })
    });

    $('#gs-body').on('show.bs.collapse', function () {
      $('.m-top-header-phone, .m-top-header-email').parent('div').css({
        'background' : '#2a2a2a',
        'margin-right' : '40%'
      });
      $('.gs-collapse-toggle').css('display', 'block');
    });

    $('#gs-body').on('hidden.bs.collapse', function () {
      $('.m-top-header-phone, .m-top-header-email').parent('div').css({
        'background' : '#161616',
        'margin-right' : 'auto'
      });
      $('.gs-collapse-toggle').css('display', 'none');
    });

    $('.lang').hover(function() {
      $('.lang .top-header-loc span, .lang .top-header-web span').css('color', '#fba601');
      $('.top-header-loc img').attr('src', 'assets/img/header/location-b.png');
      $('.top-header-web img').attr('src', 'assets/img/header/web-b.png');
    }, function() {
      $('.lang .top-header-loc span, .lang .top-header-web span').css('color', '#b3b3b3');
      $('.top-header-loc img').attr('src', 'assets/img/header/location.png');
      $('.top-header-web img').attr('src', 'assets/img/header/web.png');
    });

    $('.gs').hover(function() {
      $(this).css('border-color', '#fba601');
      $('.gs .top-header-phone span, .gs .top-header-email span').css('color', '#fba601');
      $('.top-header-phone img').attr('src', 'assets/img/header/phone-b.png');
      $('.top-header-email img').attr('src', 'assets/img/header/email-b.png');
    }, function() {
      $(this).css('border-color', 'transparent');
      $('.gs .top-header-phone span, .gs .top-header-email span').css('color', '#b3b3b3');
      $('.top-header-phone img').attr('src', 'assets/img/header/phone.png');
      $('.top-header-email img').attr('src', 'assets/img/header/email.png');
    });

    $('#drop2').on('show.bs.collapse', function () {
      $('.m-top-header-web, .m-top-header-loc').parent('div').css({
        'background':'#2a2a2a',
        'width':'120px',
        'margin-left':'0',
        'margin-right':'0'
      });
      $('.lp-collapse-toggle').css('display', 'block');
    });

    $('#drop2').on('hidden.bs.collapse', function () {
      $('.m-top-header-web, .m-top-header-loc').parent('div').css({
        'background':'#161616',
        'width':'100%',
        'margin-left':'auto',
        'margin-right':'auto'
      });
      $('.lp-collapse-toggle').css('display', 'none');
    });

    $('.promo-join img').hover(function() {
      $(this).attr('src', 'assets/img/promo/new/join-hover.png')
    }, function() {
      $(this).attr('src', 'assets/img/promo/new/join.png')
    });

    $('.promo-offer img').hover(function() {
      $(this).attr('src', 'assets/img/promo/new/offer-hover.png')
    }, function() {
      $(this).attr('src', 'assets/img/promo/new/offer.png')
    });

    $('#myModal1').click(function() {
      $('a[href="#demo"]').tab('show');
    });

    $('#myModal2b').click(function() {
      $('a[href="#Registration"]').tab('show');
    });

    $('#myModal3bprev').click(function() {
      $('a[href="#Registration"]').tab('show');
    });

    $('#myModal2bprev').click(function() {
      $('a[href="#login"]').tab('show');
    });

    $('.myModalTab1').click(function() {
      $('a[href="#login"]').tab('show');
    })

    $('.myModalTab3').click(function() {
      $('a[href="#demo"]').tab('show');
    })
    $('img[src="assets/img/casino/baccarat/play-icon.png"]').hover(function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-btn-hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-icon.png');
    });
    $('img[src="assets/img/casino/baccarat/play-icon.png"]').hover(function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-btn-hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-icon.png');
    });

    $('.casino-g-img').hover(function() {
      $(this).closest('.casino-g').find('.absolute-play a img').attr('src', 'assets/img/casino/baccarat/play-btn-hover.png');
    }, function() {
      $(this).closest('.casino-g').find('.absolute-play a img').attr('src', 'assets/img/casino/baccarat/play-icon.png');
    })

    $('a[href="#myModalTab1-2"]').on('shown.bs.tab', function () {
      $('.mymodal-init').removeClass('mymodal-none');
      $('#myModal2b_registration').css('display', 'block');
      $('#myModal2b_login').css('display', 'none');
      $('#myModalTab li:nth-child(1)').css('top', '210px');
      $('#myModalTab li:nth-child(1)').css('display', 'block');
      $('#myModalTab li:nth-child(2)').css('display', 'none');
    });

    $('a[href="#myModalTab1-2"]').on('hidden.bs.tab', function () {
      $('#myModal2b_registration').css('display', 'none');
      $('#myModal2b_login').css('display', 'block');
      $('#myModalTab li:nth-child(1)').css('top', '150px');
      $('#myModalTab li:nth-child(1)').css('display', 'none');
      $('#myModalTab li:nth-child(2)').css('display', 'block');
    });

    $('.banner-overlay button').click(function() {
      $('.banner-overlay').slideUp();
    })

    $('.selectpicker2, .sitemap-selectpicker').click(function() {
      $('#drop').toggleClass('lang-click');
    });

    $('#drop3 .close').click(function() {
      $('#drop3').removeClass('lang-click');
    });

    $('#cta-contact').hover(function() {
      $(this).attr('src', 'assets/img/contact hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/cta-contact.png');
    })

    $('.btn-top').hover(function() {
      $(this).css('background', 'url(assets/img/arrow-up-hover.png)');
    }, function() {
      $(this).css('background', 'url(assets/img/scrollup-btn.png)');
    });

    $('img[src="assets/img/s36tw-mobile-home_06.png"], .login-modal-a').click(function() {
      $('#myModal').modal('show');
      $('a[href="#myModalTab1-1"').tab('show');
    });

    $('img[src="assets/img/s36tw-mobile-home_12.png"]').click(function() {
      $('#demoModal').modal('show');
      $('a[href="#myModalTab1-1"').tab('show');
    });

    $('img[src="assets/img/s36tw-mobile-home_03.png"], img[src="assets/img/sp/reg-btn.png"], .register-modal-a, img[src="assets/img/banner/btn.png"]').click(function() {
      $('#myModal').modal('show');
      $('a[href="#myModalTab1-2"').tab('show');
    });

    $('a[href="#myModalTab1-2"]').on('shown.bs.tab', function() {
      $('#myModal2b_registration').css('display', 'block');
      $('#myModal2b_login').css('display', 'none');
    });

    $('a[href="#myModalTab1-1"]').on('shown.bs.tab', function() {
      $('.mymodal-init').addClass('mymodal-none')
      $('#myModal2b_registration').css('display', 'none');
      $('#myModal2b_login').css('display', 'block');
    });

    $('#footerLinkLang').click(function() {
      $('html,body').animate({
          scrollTop: 0
      }, 1000);
      $('#drop').toggleClass('lang-click');
    });

    $('.cta-contact-hc').click(function() {
      $('a[href="#tab2"]').tab('show');
      $('.nav.nav-pills.brand-pills.nav-stacked.sidebar-nav li').removeClass('active');
      $('.nav.nav-pills.brand-pills.nav-stacked.sidebar-nav li a[href="#tab2"]').parent('li').addClass('active');
    });

    $('#myModal').on('show.bs.modal', function () {
      if($('#drop').hasClass('lang-click')){
        $('#drop').toggleClass('lang-click');
      }
    });

    $('#myModal').on('hide.bs.modal', function () {
      if($('.selectpicker2 .fa').hasClass('fa-caret-up')){
        $('.selectpicker2 .fa').removeClass('fa-caret-up').addClass('fa-caret-down');
      }
    });

    $('.promo-btn img').hover(function() {
      $(this).attr('src', 'assets/img/promo/new_13/hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/promo/new_13/active.png');
    });

    $('.casino-g-img, .promo-btn a').hover(function() {
      $(this).closest('.casino-g').find('.promo-btn img').attr('src', 'assets/img/promo/new_13/hover.png');
    }, function() {
      $(this).closest('.casino-g').find('.promo-btn img').attr('src', 'assets/img/promo/new_13/active.png');
    })

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
    $('#login-form-btn').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#demo-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $('#login-form-link').addClass('active');
        e.preventDefault();
    });
    $('#login-form-btn-bot').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#demo-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $('#login-form-link').addClass('active');
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
    $('#regis-form-btn').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#demo-form").fadeOut(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $('#register-form-link').addClass('active');
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

    $('#mobile-top-menu').on('show.bs.collapse', function() {
      $('.mobile-button').addClass('mobile-button-bg');
    });

    $('#mobile-top-menu').on('hide.bs.collapse', function() {
      $('.mobile-button').removeClass('mobile-button-bg');
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
