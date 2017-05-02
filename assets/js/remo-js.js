$(document).ready(function() {
  $('.tab-content #tab2').tab('show')
  $('#tabContentSelector').on('change', function() {
    var val = $('#tabContentSelector').val();
    $('.'+val).trigger('click');
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

});
