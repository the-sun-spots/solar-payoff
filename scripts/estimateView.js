// Declare estimateView object literal
// All functions for the 'EstimateView' object.

var estimateView = {};

estimateView.renderMonthsToPaidOff = function(){
  $('#attach-results-table').fadeIn();
  estimateView.loadTemplate();
};

estimateView.loadTemplate = function() {
  $.get('/templates/result-template.html')
   .done(function(data){
     var template = Handlebars.compile(data);
     var compiledHtml = template(newEstimate);
     $('#attach-results-table').html(compiledHtml);

   })
     .done(estimateView.resultsGraph)
     .done(estimateView.resultsLineGraph)
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
    labels: ["Usage"],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: [newEstimate.currentElectricalBill]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: '#FF4F17',
        highlightStroke: 'rgba(151,187,205,1)',
        data: [newEstimate.solarPerDay]
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
    barDatasetSpacing : 1
  });
};

estimateView.resultsLineGraph = function() {
  var ctx = document.getElementById("results-line-graph").getContext("2d");

  var dataLine = {
    labels: monthLabel,
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        pointColor: "#FF4F17g",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: lineChartValues
      }
    ]
  };

  estimateView.lineChart = new Chart(ctx).Line(dataLine, {
    scaleShowGridLines : true,
    scaleGridLineColor : 'rgba(0,0,0,.05)',
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve : true,
    bezierCurveTension : 0.4,
    pointDot : true,
    pointDotRadius : 4,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true
  });
};
