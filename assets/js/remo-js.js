$(document).ready(function() {
  $('.tab-content #tab2').tab('show')
  $('#tabContentSelector').on('change', function() {
    var val = $('#tabContentSelector').val();
    $('.'+val).trigger('click');
  })


});
