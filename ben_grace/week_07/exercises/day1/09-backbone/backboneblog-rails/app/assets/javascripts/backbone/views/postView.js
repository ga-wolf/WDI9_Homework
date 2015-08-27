var app = app || {};

// View for a single post.
var PostView = Backbone.View.extend({
  el: '#main',// selects the element with the id of main
  events: {
    'click button': 'submitComment' // a click event that is trigged on 'button'. It runs the submitComment method
  },
  render: function () {
    var postTemplate = $('#postTemplate').html();
    var postHTML = _.template(postTemplate);

    this.$el.html(postHTML(this.model.toJSON()));

    this.comments = new app.Comments({post_id: this.model.get('id')});
    this.comments.fetch();
  },
  submitComment: function (e) {
    event.preventDefault();

    var author = $('#author').val();
    var content = $('#content').val();

    $('#author, #content').val('')//Resetting the form for re-use.

    var comment = new app.Comment({
      author: author,
      content: content,
      post_id: this.model.get('id')
    });
    var view = this
    comment.save().done(function (){
      view.comments.fetch();//Will fetch and render any new comments.
    });
    // this.comments.add(comment);
  }
});