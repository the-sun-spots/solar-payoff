var estimate = {};
var newEstimate = {};

//This function will collect the values from estimate form



estimate.collectUserInput = function() {

  $('#input-calc').on('submit', function(event){
    event.preventDefault();
    newEstimate = new Estimate(this);

    //start controller execution
    estimateController.calcResults();
  });
};



var Estimate = function(props) {
  this.user = $('#calc-name').val();
  this.upFrontCost = $('#up-front-cost').val();
  this.solarPerDay = $('#solar-kwh-per-day').val();
  this.currentElectricalBill = $('#current-kwh-per-day').val();
  this.madeInWashington = $('#checkbox').is(':checked');
  this.flag = true;
  this.lineChartValues = [];
  this.monthLabel = [];
};


estimate.clearForm = function () {
  $('#attach-results-table').empty();
  $('#input-calc').each(function() {
    $('input:checkbox').removeAttr('checked');
    this.reset();
  });
};

$(function(){
  estimate.collectUserInput();

});
