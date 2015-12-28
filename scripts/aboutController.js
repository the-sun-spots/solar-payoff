var aboutController = {};

//Temporary to get Router funcionality working
aboutController.show = function() {
  $('#about').fadeIn('slow').siblings().hide();
  $('header').hide();

  $('body').animate({
    scrollTop: $('body').offset().top
  });

  //aboutView.render(about.team);
};
