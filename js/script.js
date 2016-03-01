//Add the navbar to the top of pages with ajax
$(document).ready(function() {
  $.ajax({ url: 'nav.html' })
    .done(function(response) {
      $('#navbar').html(response);
    })
  ;
});
