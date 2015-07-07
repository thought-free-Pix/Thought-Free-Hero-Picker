window.ThoughtFreePix = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // sets up routes
    new ThoughtFreePix.Routers.AppRouter({
      //pass in div name
      $heroList: $("#categories")
    });
    // starts listening to changes to the location (url)
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ThoughtFreePix.initialize();
});
