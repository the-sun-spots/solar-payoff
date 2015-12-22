var estimate = {};

//This function will collect the values from estimate form
estimate.collectUserInput = function() {

  $('#input-calc').on('submit', function(event){
    event.preventDefault();
    estimate.user = $('#calc-name').val();
    estimate.upFrontCost = $('#up-front-cost').val();
    estimate.solarPerDay = $('#solar-kwh-per-day').val();
    estimate.currentElectricalBill = $('#current-kwh-per-day').val();
    estimate.madeInWashington = $('#checkbox').is(':checked');
    //will clear contents of form
    estimate.clearForm();
    //start controller execution
    estimateController.incentiveBenefits();
  });
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
