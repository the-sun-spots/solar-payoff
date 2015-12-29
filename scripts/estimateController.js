var estimateController = {};

estimateController.calcResults = function() {
  //assign the value of dollar amount per day that utility company will pay homeowner

  var solarIncome = estimateController.calcUsageCredits(newEstimate.solarPerDay);

  //get the difference in daily energy cost after solar panels installed
  newEstimate.newDailyEnergyCost = estimateController.adjustedUsage();

  //calculate 30% tax credit for up front cost of solar panels
  newEstimate.PercentOfTotal = estimateController.calcFederalBenefits(newEstimate.upFrontCost);

  //call function to get the number of months it will take to pay off solar panels
  newEstimate.countMonths = estimateController.timeToPayOff(solarIncome);

  localStorage.setItem('Estimate', JSON.stringify(newEstimate));

  page.redirect('/review');

};

estimateController.calcFederalBenefits = function(totalCost) {
  //calculate 30% tax credit for up front cost of solar panels and return that dollar amount
  return totalCost * 0.3;

};

estimateController.calcUsageCredits = function(solarProduction){
  //calculate and return dollar amount per day that utility company will pay homeowner
  if (newEstimate.madeInWashington){
    return solarProduction * 0.54;
  };

  return solarProduction * 0.15;
};

estimateController.adjustedUsage = function() {
  //calculate and return new daily kWh rate
  return newEstimate.currentElectricalBill - newEstimate.solarPerDay;

};

estimateController.timeToPayOff = function(solarIncome) {
  //calculate and return the number of months it will take to pay off solar panels

  var toPayOff = newEstimate.upFrontCost - newEstimate.PercentOfTotal;
  var years = 0;

  var monthlySolarIncome = utility.dayToMonth(solarIncome);

  while (toPayOff > 0) {

    newEstimate.lineChartValues.push(toPayOff);
    newEstimate.monthLabel.push(years);

    toPayOff -= monthlySolarIncome;
    years += 1;


  }
  //newEstimate.monthLabel.push(years);
  return years - 1;
};
