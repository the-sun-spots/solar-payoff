
page('/', app.setInitialView);

page('/calculator', app.focusOnForm);

page('/about', aboutController.show,
  // Initiates CREATION & LOADING of 'team' array!
  about.createTeamMember
);

page('/resources', resourcesController.show);

page('/calculator/result', estimateController.calcResults, estimateView.renderMonthsToPaidOff);

//page('/about', aboutController.show);

//page('/resources', resourcesController.show);


page.start();
