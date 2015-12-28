var estimate = {};

//This function will collect the values from estimate form
estimate.collectUserInput = function() {

  $('#input-calc').on('submit', function(event){
    event.preventDefault();
    estimate.newEstimate = new Estimate(this);

    /*estimate.user = $('#calc-name').val();
    estimate.upFrontCost = $('#up-front-cost').val();
    estimate.solarPerDay = $('#solar-kwh-per-day').val();
    estimate.currentElectricalBill = $('#current-kwh-per-day').val();
    estimate.madeInWashington = $('#checkbox').is(':checked');*/
    //will clear contents of form
    estimate.clearForm();
    //start controller execution
    // estimateController.calcResults();
    localStorage.setItem('Estimate', newEstimate);
    page.redirect('/calculator/result');
  });
};

var Estimate = function(props) {
  this.user = $('#calc-name').val();
  this.upFrontCost = $('#up-front-cost').val();
  this.solarPerDay = $('#solar-kwh-per-day').val();
  this.currentElectricalBill = $('#current-kwh-per-day').val();
  this.madeInWashington = $('#checkbox').is(':checked');
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
