// Declare estimateView object literal
// All functions for the 'EstimateView' object.

var estimateView = {};

estimateView.renderMonthsToPaidOff = function(){
  $('#attach-results-table').fadeIn();
  estimateView.loadTemplate();
  console.log('view ran!');
  estimate.focusResultTable();
};

estimateView.loadTemplate = function() {
  $.get('/templates/result-template.html')
   .done(function(data){
     var template = Handlebars.compile(data);
     var compiledHtml = template(estimate);
     $('#attach-results-table').html(compiledHtml);
     console.log(compiledHtml);
   });
};

estimate.focusResultTable = function() {
  $('#attach-results-table').siblings().hide();
  $('header').fadeIn('fast');
  $('#new-calc').fadeIn('fast');

  var goTo = $('#attach-results-table').offset();
  $('body').animate({
    scrollTop: goTo.top
  }, 1250, 'easeInOutExpo');

};
