var review = {};

review.loadFromLocalStorage = function(ctx, next){
  newEstimate = JSON.parse(window.localStorage.getItem('Estimate'));
  review.populateForm(newEstimate);
  next();
};

review.populateForm = function(newEstimate){
  $('#calc-name').val(newEstimate.user);
  $('#up-front-cost').val(newEstimate.upFrontCost);
  $('#current-kwh-per-day').val(newEstimate.currentElectricalBill);
  $('#solar-kwh-per-day').val(newEstimate.solarPerDay);
  if(newEstimate.madeInWashington) {
    $('#checkbox').attr('checked', true);
  };
};
