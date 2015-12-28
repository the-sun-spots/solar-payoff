
page('/', app.setInitialView);

page('/calculator', app.focusOnForm);

page('/about', aboutController.show, about.createTeamMember);
  // Initiates CREATION & LOADING of 'team' array!

page('/resources', resourcesController.show);

page('/calculator/result', estimateController.calcResults, estimateView.renderMonthsToPaidOff);

//page('/about', aboutController.show);

//page('/resources', resourcesController.show);


page.start();
