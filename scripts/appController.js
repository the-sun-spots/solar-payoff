var app = {};

app.setInitialView = function(){
  $('header').show();
  $('#estimator').show().siblings().hide();
  $('body').animate({
    scrollTop: $('body').offset().top
  }, 0);
};

app.focusOnForm = function() {
  $('header').show();
  $('#estimator').fadeIn('slow').siblings().hide();
  //add smooth page scroll
  var goTo = $('#estimator').offset();
  $('body').animate({
    scrollTop: goTo.top-50
  }, 1250, 'easeInOutExpo');
};

app.formTip = function() {
  $('[data-toggle="tooltip"]').tooltip({
    title: "Check your previous electric bill statements or visit seattle.gov/light/paymybill for this information."});
};

$(function(){
  app.formTip();
  app.arrowFloat();
});
