var app = app || {};

////////////////
//ToDo Model
//
//ToDo model has title and completed attributes
////////////////

app.Todo = Backbone.Model.extend({ //Capitalised becaused it's a model
  //The defaults ensure that each ToDo has a title and completed status. Essentially the default information.
  defaults: {
    title: '',
    completed: false
  },

  //This will toggle into the completed state of the ToDo when it's finished
  toggle: function () {
    this.save({
      completed: !this.get('completed')
    });
  }

});