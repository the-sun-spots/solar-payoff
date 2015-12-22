var estimateController = {};

estimateController.incentiveBenefits = function() {

  var solarIncome = estimateController.calcUsageCredits();
  //var newMonthlyEnergyCost = estimateController.adjustedUsage(solarIncome)
  estimate.PercentOfTotal = estimateController.calcFederalBenefits(estimate.upFrontCost);
  estimateController.timeToPayOff(solarIncome);
};

estimateController.calcFederalBenefits = function(totalCost) {
  //calculate any federal benefits
  return totalCost * 0.3;

};

estimateController.calcUsageCredits = function(){
  //calculate usage credits
  if (estimate.madeInWashington){
    return solarProduction * 0.54;
  };

  return solarProduction * 0.15;
};

estimateController.adjustedUsage = function(solarIncome) {
  //current kWh cost per day
  return estimate.currentElectricalBill - solarIncome;

};
estimateController.timeToPayOff = function(solarIncome) {
  //calculate how much time it will take to pay off solar panels
  var toPayOff = estimate.upFrontCost - estimate.PercentOfTotal;
  var months = 0;
  var monthlySolarIncome = utility.dayToMonth(solarIncome);
  while (toPayOff > 0) {
    toPayOff -= monthlySolarIncome;
    months += 1;

  }

};
