// Declare estimateView object literal
// All functions for the 'EstimateView' object.

var estimateView = {};

estimateView.renderMonthsToPaidOff = function(){
  $('#attach-results-table').fadeIn();
  estimateView.loadTemplate();

  //console.log('view ran!');
  estimate.focusResultTable();
};

estimateView.loadTemplate = function() {
  $.get('/templates/result-template.html')
   .done(function(data){
     var template = Handlebars.compile(data);
     var compiledHtml = template(newEstimate);
     $('#attach-results-table').html(compiledHtml);

   })
     .done(estimateView.resultsGraph)
     .done(estimateView.focusResultTable);
};

estimateView.focusResultTable = function() {
  $('#attach-results-table').siblings().hide();
  $('header').fadeIn('fast');
  $('#new-calc').fadeIn('fast');

  var goTo = $('#attach-results-table').offset();
  $('body').animate({
    scrollTop: goTo.top
  }, 1250, 'easeInOutExpo');

};

estimateView.resultsGraph = function() {
  var ctx = document.getElementById("results-graph").getContext("2d");

  var data = {
    labels: ["Test1"],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: [estimate.currentElectricalBill]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: [estimate.solarPerDay]
      }
    ]
  };

  estimateView.myNewChart = new Chart(ctx).Bar(data, {//Data is the JSON from local storage
    scaleBeginAtZero : true,
    scaleShowGridLines : true,
    scaleGridLineColor : 'rgba(0,0,0,.05)',
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke : true,
    barStrokeWidth : 2,
    barValueSpacing : 5,
    barDatasetSpacing : 1,
  });
};
