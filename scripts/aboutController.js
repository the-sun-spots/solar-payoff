var aboutController = {};

//Temporary to get Router funcionality working
aboutController.show = function(ctx, next) {
  $('#about').fadeIn('slow').siblings().hide();
  $('header').hide();

  $('body').animate({
    scrollTop: $('body').offset().top
  });
  next();
};
