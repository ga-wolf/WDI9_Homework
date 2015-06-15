var app = app || {};

app.CommentView = Backbone.View.extend({
  //creates you a brand new div if tagname isnt selected
  render: function () {
    var commentViewTemplate = $('#commentTemplate').html();
    var commentViewHTML = _.template(commentViewTemplate);

    this.$el.html(commentViewHTML(this.model.toJSON()));
    this.$el.appendTo('#comments')
  }
});