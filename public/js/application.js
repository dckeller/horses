$('document').ready(function() {
  $("#new-horse").click(function(e){
    e.preventDefault();
    target = $(e.target);
    $.ajax({
      url: target.attr('href'),
      method: 'get'
    })
    .done(function(response) {
      target.hide();
      $(".create-horse").text(response);
    })
  });

});
