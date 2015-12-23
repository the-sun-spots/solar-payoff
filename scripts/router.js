page('/',
  function() {
    $('#new-calc').fadeIn('slow').siblings().hide();
    $('header').show();
  }
);
page('/calculator',
  function() {
    $('#new-calc').fadeIn('slow').siblings().hide();
    $('header').fadeIn('slow');
    //add smooth page scroll
    var goTo = $('#new-calc').offset();
    $('body').animate({
      scrollTop: goTo.top
    }, 1250, 'easeInOutExpo');
  }
);
// page('/result');
page('/about',
  aboutController.show
);
page('/resources',
  resourcesController.show
);

page.start();
