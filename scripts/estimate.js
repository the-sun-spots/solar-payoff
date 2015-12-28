var estimate = {};
var newEstimate = {};

//This function will collect the values from estimate form



estimate.collectUserInput = function() {

  $('#input-calc').on('submit', function(event){
    event.preventDefault();
    newEstimate = new Estimate(this);

    //will clear contents of form
    estimate.clearForm();

    //start controller execution
    page.redirect('/calculator/result');
  });
};



var Estimate = function(props) {
  this.user = $('#calc-name').val();
  this.upFrontCost = $('#up-front-cost').val();
  this.solarPerDay = $('#solar-kwh-per-day').val();
  this.currentElectricalBill = $('#current-kwh-per-day').val();
  this.madeInWashington = $('#checkbox').is(':checked');
  this.lineChartValues = [];
  this.monthLabel = [];
};


estimate.clearForm = function () {
  $('#input-calc').each(function() {
    $('input:checkbox').removeAttr('checked');
    this.reset();
  });
};

$(function(){
  estimate.collectUserInput();

});
