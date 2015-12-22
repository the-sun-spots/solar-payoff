var estimateController = {};

estimateController.incentiveBenefits = function() {
  //assign the value of dollar amount per day that utility company will pay homeowner
  var solarIncome = estimateController.calcUsageCredits();
  //get the difference in daily energy cost after solar panels installed
  var newDailyEnergyCost = estimateController.adjustedUsage(solarIncome);
  //calculate 30% tax credit for up front cost of solar panels
  estimate.PercentOfTotal = estimateController.calcFederalBenefits(estimate.upFrontCost);
  //call function to get the number of months it will take to pay off solar panels
  estimateController.timeToPayOff(solarIncome);
};

estimateController.calcFederalBenefits = function(totalCost) {
  //calculate 30% tax credit for up front cost of solar panels and return that dollar amount
  return totalCost * 0.3;

};

estimateController.calcUsageCredits = function(){
  //calculate and return dollar amount per day that utility company will pay homeowner
  if (estimate.madeInWashington){
    return solarProduction * 0.54;
  };

  return solarProduction * 0.15;
};

estimateController.adjustedUsage = function(solarIncome) {
  //calculate and return new daily kWh rate
  return estimate.currentElectricalBill - solarIncome;

};

estimateController.timeToPayOff = function(solarIncome) {
  //calculate and return the number of months it will take to pay off solar panels
  var toPayOff = estimate.upFrontCost - estimate.PercentOfTotal;
  var months = 0;
  var monthlySolarIncome = utility.dayToMonth(solarIncome);
  while (toPayOff > 0) {
    toPayOff -= monthlySolarIncome;
    months += 1;

  }
  return months;
};
