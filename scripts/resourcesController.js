var resourcesController = {};

resourcesController.show = function() {
  $('#resources').fadeIn('slow').siblings().hide();
  $('header').hide();

  $('body').animate({
    scrollTop: $('body').offset().top
  });
};
