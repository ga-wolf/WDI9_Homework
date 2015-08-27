_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$(document).ready(function(){

  var bros = [
    {
      name: 'groucho',
      instrument: 'guitar'
    },
    {
      name: 'harpo',
      instrument: 'harp'
    },
    {
      name: 'chico',
      instrument: 'piano'
    }
  ];

  console.table(bros)


  // var brotherHTML = function(brother){
  //   var html = '';
  //   html += '<p class="soup">';
  //   html += brother.name;
  //   html += ' plays the ';
  //   html += '<strong>' + brother.instrument + '</strong></p>';
  //   return html;
  // };

  var brotherTemplate = $('#brotherTemplate').html();
  var brotherHTML = _.template(brotherTemplate); // compile the template into a string
  

  _(bros).each(function (b){
    var html = brotherHTML(b);
    $('#main').append(html)
  });

});