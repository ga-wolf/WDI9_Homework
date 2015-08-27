
//Lets you use {{ style }} interpolation, instead of ERB.
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'animals/:id': 'viewAnimal',
    '*action': function () {
      console.log('That doesnt even exist you jerk')
    }
    
    },

    index: function () {
        var myZooView = new ZooView({collection: myZoo});
        myZooView.render();
    },

    viewAnimal: function (id) {
      console.log('you are now viewing animal', id, 'you jerk')
    }
});

var Animal = Backbone.Model.extend({
  defaults: {
    type: 'generic animal',
    ecosystem: '',
    stripes: 0
  },

  urlRoot: '/animals', //This is where the data(animals) lives on the server.

  initialize: function () {
    this.on('change:type', function (model) { //When the data changes does this thing
      var type = model.get('type');
      console.log('I am now a ' + type);
    });
  }
});

var Zoo = Backbone.Collection.extend({
  model: Animal
});

var animal1 = new Animal({type: 'giraffe', ecosystem: 'savannah',});
var animal2 = new Animal({type: 'zebra', ecosystem: 'savannah', stripes: 57});
var animal3 = new Animal({type: 'butterfly', ecosystem: 'forest', stripes: 40});

var myZoo = new Zoo([animal1, animal2, animal3]);

var ZooView = Backbone.View.extend({
  el: '#main', //jQuery selector stating where this will appear on the page
  events: {
    'click li': 'animalClick'
  },
  initialize: function (){
    console.log('ZooView omg')
  },
  render: function () { //this is where you do stuff to make it appear
    var view = this; //The view needs to be declared here because the function below renames 'this' to mean the model instead of the view

    // retrieves the template describing how the animals will be displayed
    var animalTemplate = $('#animalTemplate').html()
    var animalHTML = _.template(animalTemplate);

    // Goes through each animal in the zoo and appends it to the page
    view.collection.each(function (model) {      
      view.$el.append( animalHTML(model.toJSON()) );
    });
  },
  animalClick: function () {
    console.log('you clicked an animal you jerk')
  }
});

$(document).ready(function(){
  var router = new AppRouter();
  Backbone.history.start();

})







