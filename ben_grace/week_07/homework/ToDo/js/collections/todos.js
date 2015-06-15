var app = app || {};

//ToDo collection

//The collection data will be saved on local storage using the backbone-localstorage add-on I included

var TodoList = Backbone.Collection.extend({  //Capitalised because it's a collection

  //Reference to this models collection.
  model: app.Todo,

  //Save all the todos added into local storage using backbone-localstorage.js
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  //filters down the list removing the ones that are finished 
  completed: function () {
    return this.filter(function ( todo ) {
      return todo.get('completed');
    });
  },

  //flters down list so it only shows the ones that are still active
  remaining: function () {
    return this.without.apply( this, this.completed() );
  },

  //Not entirely sure what the function does. Need to find out

  //Comments from the page
  //// We keep the Todos in sequential order, despite being saved by unordered
  //// GUID in the database. This generates the next order number for new items.
  nextOrder: function () {
    if ( !this.length ){
      return 1;
    }
    return this.last().get('order') + 1;
  },

  //Sorts todos by original insertion order
  comparator: function ( todo ) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();