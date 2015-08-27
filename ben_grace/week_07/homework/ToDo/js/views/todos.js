var app = app || {}

//Todo Item view

//Dom element for a todo item.
app.TodoView = Backbone.View.extend({

  //Wraps everything in li tags I think...
  tagName: 'li',

  //saves the template for a single item
  template: _.template( $('#item-template').html() ),

  events: {
    'click .toggle': 'togglecompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  //This renders a new view when something has been updated
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible)
  },

  //re-renders the title of the todo when it has been changed by an edit
  render: function () {
    this.$el.html( this.template( this.model.attributes ) );

    this.$el.toggleClass( 'completed', this.model.get('completed') );
    this.toggleVisible();

    this.$input = this.$('.edit');
    return this;
  },

  toggleVisible: function () {
    this.$el.toggleClass( 'hidden', this.isHidden());
  },

  isHidden: function () {
    var isCompleted = this.model.get('completed');
    return(
      (!isCompleted && app.TodoFilter === 'completed')
      || (isCompleted && app.TodoFilter === 'active')
      );
  },

  togglecompleted: function () {
    this.model.toggle();
  },

  //Changes the class on the element while editing
  edit: function () {
    this.$el.addClass('editing');
    this.input.focus();
  },

  //Closes the edit box and saves any changes that were made. $input is simply just the jQuery selector for the input box in the html
  close: function () {
    var value = this.$input.val().trim();

    if ( value ) {
      this.model.save({ title: value });
    }else{
      this.clear();
    }

    this.$el.removeClass('editing');
  },

  //upon hitting 'enter' it closes the edit box
  updateOnEnter: function (e) {
    if ( e.which === ENTER_KEY ){
      this.close();
    }
  },

  //removes the item, deletes it from the local storage and also deletes its view...Everybodies dead dave.
  clear: function () {
    this.model.destroy();
  }





});