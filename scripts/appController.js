var app = {};

app.setInitialView = function(){
  $('#new-calc').fadeIn('slow').siblings().hide();
  $('header').show();
};

app.focusOnForm = function() {
  $('#new-calc').fadeIn('slow').siblings().hide();
  $('header').fadeIn('slow');
  //add smooth page scroll
  var goTo = $('#new-calc').offset();
  $('body').animate({
    scrollTop: goTo.top
  }, 1250, 'easeInOutExpo');
};

$(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
