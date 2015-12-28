var aboutController = {};

//Temporary to get Router funcionality working
aboutController.show = function() {
  $('header').hide();
  $('#about').fadeIn('slow').siblings().hide();

  $('body').animate({
    scrollTop: $('body').offset().top
  });

  aboutView.render(about.team);
};
