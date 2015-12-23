var resourcesController = {};

//Temporary to get Router funcionality working
resourcesController.show = function() {
  $('#resources').fadeIn('slow').siblings().hide();
  $('header').hide();

  $('body').animate({
    scrollTop: $('body').offset().top
  });
};
