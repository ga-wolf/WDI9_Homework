var app = app || {};

//The Application

app.AppView = Backbone.View.extend({ //Capitalised because it's a view constructor

  //This binds whatever we do next to the #todoapp that we setup in the HTML
  el: '#todoapp',

  //Template for the statistics script setup in the HTML
  statsTemplate: _.template( $('#stats-template').html() ),

  //Events that listen for creation of items and clearing items
  events: {
    'keypress #new-todo': 'createOnEnter',
    'click #clear-completed': 'clearCompleted',
    'click #toggle-all': 'toggleAllComplete'
  },

  //Initialize that runs when making a new view. Listens to when the collection as items added or changed
  initialize: function () {
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo');
    this.$footer = this.$('#footer');
    this.$main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);

    this.listenTo(app.Todos, 'change:completed', this.filterOne);
    this.listenTo(app.Todos, 'filter', this.filterAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch();
  },

  render: function() {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if( app.Todos.length ){
      this.$main.show();
      this.$footer.show();

      this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: remaining
      }));

      this.$('#filters li a')
        .removeClass('selected')
        .filter('[href="#/' + ( app.TodoFilter || '') + '"]')
        .addClass('selected');
    }else{
      this.$main.hide();
      this.$footer.hide();
    }

    this.allCheckbox.checked = !remaining;
  },

  //creates a new view for a todo and appends it to the ul setup in the HTML
  addOne: function ( todo ) {
    var view = new app.TodoView({ model: todo });
    $('#todo-list').append( view.render().el );
  },

  addAll: function () {
    this.$('#todo-list').html('');
    app.Todos.each(this.addOne, this);
  },

  filterOne: function ( todo ) {
    todo.trigger('visible');
  },

  filterAll: function () {
    app.Todos.each(this.filterOne, this);
  },

  newAttributes: function () {
    return {
      title: this.$input.val().trim(),
      order: app.Todos.nextOrder(),
      completed: false
    };
  },

  // creates a new view if you hit enter then clears the input box.
  createOnEnter: function () {
    if( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
      return;
    }

    app.Todos.create( this.newAttributes() );
    this.$input.val('')
  },

  // Clears completed todos by destroying their models
  clearCompleted: function () {
    _.invoke(app.Todos.completed(), 'destroy');
    return false;
  },


  //Selects all the todos with complete checkbox ticked and changes them to completed from active
  toggleAllComplete: function () {
    var completed = this.allCheckbox.checked;

    app.Todos.each(function ( todo ){
      todo.save({
        'completed': completed
      });
    });
  }







});