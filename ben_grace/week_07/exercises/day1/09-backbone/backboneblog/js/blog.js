//Lets you use {{ style }} interpolation, instead of ERB <%=  %> interpolation
_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

/////////////
//Router is similar to routes.rb in Rails but with actions as well
/////////////
var AppRouter = Backbone.Router.extend({ //This doesn't kick in until it is called within document.ready
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },
  //GET /
  index: function () {
    var appView = new AppView({collection: blogPosts});
    appView.render();
  },
  //GET /posts/:id
  viewPost: function (id) {
    var post = blogPosts.get(id);//This is like finding params[:id]
    var postView = new PostView({model: post});
    postView.render();
  }


});

////////////
//End routes
////////////


//////////////////
//Below be models
//////////////////


var Post = Backbone.Model.extend({
  defaults: {
    title: 'Untitled Post',
    content: 'Untitled Post Content'
  }
});

//Collection of a particular model
var Posts = Backbone.Collection.extend({
  model: Post
});

//////////////////
//End models
//////////////////

//////////////////
//Seed Data: These would usually be stored in a database
//////////////////
var blogPosts = new Posts([
  new Post({id: 1, title: 'Post 1', content: 'Content of first post'}),
  new Post({id: 2, title: 'Post 2nd', content: 'Content of second post'}),
  new Post({id: 3, title: 'Post 3 is a jerk', content: 'Content of third post'}),
  new Post({id: 4, title: 'Post 4 is alright I guess', content: 'Content of fourth post'})
  ]);

//////////////////
//End Seed
//////////////////


//////////////////
//Views. Look at them.
//////////////////

//Shows the landing page and a summary of all the blog posts
var AppView = Backbone.View.extend({
  el: '#main', //selects the html element
  render: function () {
    var appHTML = $('#appTemplate').html(); //Grabs the stuff from appTemplate script on the HTMl page
    this.$el.html(appHTML);


    this.collection.each(function (post){
      var postListView = new PostListView({model: post});
      postListView.render();
    });
  }
});

//View for a single post title (i.e. the summary view)
var PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showPost' //This is saying if anyone clicks within the li tag then showPost
  },
  render: function () {
    var postListTemplate = $('#postListTemplate').html();
    var postListHTML = _.template(postListTemplate);

    this.$el.html(postListHTML(this.model.toJSON()) );

    $('#posts').append(this.$el)
  },
  showPost: function () {
    router.navigate('posts/' + this.model.get('id'), true)
  }
});

var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postTemplate = $('#postTemplate').html();
    var postHTML = _.template(postTemplate);

    this.$el.html(postHTML(this.model.toJSON()) );
  }
});

//////////////////
//End Views
//////////////////

var router;

//We wait for the document to be ready before running any of the above code.
$(document).ready(function (){
  router = new AppRouter();
  Backbone.history.start();

});







