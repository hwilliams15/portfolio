$( document ).ready(function() {
  $("#hamburger").click(function(){
      $('#nav-list').toggleClass('open');
    });
  $("main").click(function(){
      $('#nav-list').removeClass('open');
    });
});
