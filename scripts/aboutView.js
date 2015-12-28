var aboutView = {};

//Temporary to get Router funcionality working
aboutView.render = function() {
  $('#about').empty();
  about.team.forEach(function(member, index){
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
