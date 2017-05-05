$(document).ready(function() {
  $('.tab-content #tab2').tab('show')
  $('#tabContentSelector').on('change', function() {
    var val = $('#tabContentSelector').val();
    $('.'+val).trigger('click');
  });

  $('#navContentSelector').on('change', function(e) {
    e.preventDefault();
    var val = $('#navContentSelector').val();
    $('.tab-content .active').removeClass('active');
    $('[href="'+val+'"]').tab('show');
  });

  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
    console.log($(this).parent());
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.brand-nav.active').removeClass('active');
    $(e.target).parent().addClass('active');
  });

  $('.main-nav').click(function(e) {
    e.preventDefault();
  });

  $('.seo-nav a[href="#red"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s-hover.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#orange"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www-hover.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#yellow"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card-hover.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#green"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop-hover.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#blue"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7-hover.png');
  });

});
