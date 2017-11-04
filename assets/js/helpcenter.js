$(document).ready(function() {

  $('.nav.nav-tabs.main li a').click(function() {
    var tab = '.tab-pane.' + $(this).data('tab');
    $(this).closest('li').closest('ul').toggle();
    $('.tab-content.main').find('.active').toggleClass('active');
    $('.tab-content.main').find(tab).toggleClass('active');
  })

  $('.return-parent').click(function() {
    $(this).closest('.tab-pane').toggleClass('active');
    $('.nav.nav-tabs.main').toggle();
  })

  $('.nav.nav-tabs.sub li a').click(function() {
    var tab = '.tab-pane.' + $(this).data('tab');
    $(this).closest('li').closest('ul').toggle();
    $(this).closest('.tab-pane').find('.return-parent-wrapper').toggle();
    $(this).closest('.tab-pane').find('.active').toggleClass('active');
    $(this).closest('.tab-pane').find(tab).toggleClass('active');
  })

  $('.return-sub-parent').click(function() {
    $(this).closest('.tab-content').closest('.tab-pane').find('.return-parent-wrapper').toggle();
    $(this).closest('.tab-pane').toggleClass('active');
    $(this).closest('.tab-content').closest('.tab-pane').find('.nav.nav-tabs.sub').toggle();
  })
})
