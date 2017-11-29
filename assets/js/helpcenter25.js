$(document).ready(function() {
  $('.main-tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var the_target = $(this).attr('data-target');
    $(the_target).find('.data h3').html($(this).data('text'));
    $(".tab-pane > .sub-data > h4").show();
    $('.tab-pane > .sub-data > .data-content').hide();
    $(".tab-pane > .data > .fa").hide();
    $('.sub-sub-data .data-data-content').hide();
    $('.sub-sub-data h5').show();
  })

  $(".tab-pane > .data > .fa").hide();
  $(".ui-link").click(function() {
    var href = $(this).attr('href');
    $(href + " .data > h3").text($(this).text());
    $(href + " .data > .fa").hide();
    $(".tab-content > .sub-data > h4").show();
    $(".tab-pane > .sub-data > .data-content").hide();
  });

  $(" .tab-pane > .sub-data > h4").click(function() {
    $(".tab-pane > .data > .fa").show();
    $(".tab-pane > .data ").css("cursor","pointer");
    $(".tab-pane > .sub-data > h4").hide();
    $(this).next('.data-content').show();

    $(this).closest('.tab-pane').find('h3').html($(this).text());
  });

  $(".tab-pane > .data ").click(function() {
    $(this).css("cursor","");
    $(this).find('h3').html($(this).data('text'));
    $(".tab-pane > .sub-data > h4").show();
    $('.tab-pane > .sub-data > .data-content').hide();
    $('.sub-sub-data .data-data-content').hide();
    $('.sub-sub-data h5').show();
    $(".tab-pane > .data > .fa").hide();
  });

  $('.sub-sub-data h5').click(function() {
    $(this).next('.data-data-content').show();
    $('.sub-sub-data h5').hide();
    $(this).closest('.tab-pane').find('h3').html($(this).text());
  })
})
