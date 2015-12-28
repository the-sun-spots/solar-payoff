var app = {};

app.setInitialView = function(){
  $('#new-calc').fadeIn('slow').siblings().hide();
  $('header').show();

  var previous = JSON.parse(window.localStorage.getItem('Estimate'));
  if (previous){
    $('#past-estimate').show();
  }
  else {
    $('#past-estimate').hide();
  }
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

app.formTip = function() {
  $('[data-toggle="tooltip"]').tooltip({
    title: 'Check your previous electric bill statements or visit seattle.gov/light/paymybill for this information.'});
};

$(function(){
  app.formTip();
});
