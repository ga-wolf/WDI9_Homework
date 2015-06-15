var app = app || {};

// Model.
app.Post = Backbone.Model.extend({
  urlRoot: '/posts', //match this with the resources found in the routes created by rails
  defaults: {
    title: 'Untitled Post',
    content: 'Untitled Post Content'
  }
});