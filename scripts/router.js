
page('/', app.setInitialView);

page('/calculator', app.focusOnForm);

page('/about',
  // Initiates CREATION & LOADING of 'team' array!
  about.createTeam,
  aboutController.show
);

page('/resources', resourcesController.show);

page('/calculator/result', estimateController.calcResults, estimateView.renderMonthsToPaidOff);

page.start();
