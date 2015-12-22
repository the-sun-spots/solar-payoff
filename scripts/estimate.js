var estimate = {};

estimate.collectUserInput = function() {

  $('#input-calc').on('submit', function(event){
    event.preventDefault();
    //define these values from form when submitted
    estimate.upFrontCost = $('#up-front-cost').val();
    estimate.solarPerDay = $('#solar-kwh-per-day').val();
    estimate.currentElectricalBill = $('#current-kwh-per-day').val();
    estimate.madeInWashington = $('#made-in-wash:checked') || false;
    console.log(estimate.madeInWashington);
  });



};

$(function(){
  estimate.collectUserInput();
});
