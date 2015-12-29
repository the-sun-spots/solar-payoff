var aboutView = {};

aboutView.render = function(team) {
  $('#about').empty();
  team.forEach(function(member, index){
    aboutView.loadTemplate(member);
  });
};

aboutView.loadTemplate = function(member) {
  $.get('/templates/about-template.html')
   .done(function(data){
     var template = Handlebars.compile(data);
     var compiledHtml = template(member);
     $('#about').append(compiledHtml);
   });
};
