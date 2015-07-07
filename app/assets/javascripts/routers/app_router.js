window.ThoughtFreePix.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$heroList = options.$heroList;
  },

  routes: {
    "": "herosIndex",
    "heros/:id": "herosShow"
  },

  herosIndex: function () {
    var indexView = new ThoughtFreePix.Views.HerosIndex({
      collection: ThoughtFreePix.Collections.heros
    });

    ThoughtFreePix.Collections.heros.fetch();
    this.$heroList.html(indexView.render().$el);
  },

  herosShow: function (id) {
    var model = ThoughtFreePix.Collections.heros.getOrFetch(id);

    var showView = new ThoughtFreePix.Views.HerosShow({
      model: model
    });

    $("body").html(showView.render().$el);
  },

});
