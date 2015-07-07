window.ThoughtFreePix = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ThoughtFreePix.Collections.heros.fetch();

    var view = new ThoughtFreePix.Views.HerosIndex({
      collection: ThoughtFreePix.Collections.heros
    });

    $("body").append(view.render().$el);
  }
};

$(document).ready(function(){
  ThoughtFreePix.initialize();
});
