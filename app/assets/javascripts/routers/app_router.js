window.ThoughtFreePix.Routers.AppRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$heroList = options.$heroList;
    this.$allyTeam = options.$allyTeam;
    this.$enemyTeam = options.$enemyTeam;
    this.$selected = options.$selected;

    //ally view
    this._allyView = new ThoughtFreePix.Views.AllyIndex({
      collection: ThoughtFreePix.Collections.allyTeam
    });
    this.$allyTeam.html(this._allyView.render().$el);

    //enemy view
    this._enemyView = new ThoughtFreePix.Views.EnemyIndex({ });
    this.$enemyTeam.html(this._enemyView.render().$el);

    //selected
    this._selectedView = new ThoughtFreePix.Views.SelectedIndex({
      collection: ThoughtFreePix.Collections.selectedHero
    });
    this.$selected.html(this._selectedView.render().$el);
    
    //suggestions
  },

  routes: {
    "": "herosIndex",
    "heros/:id": "herosShow"
  },

  herosIndex: function () {
    //center view
    var indexView = new ThoughtFreePix.Views.HerosIndex({
      collection: ThoughtFreePix.Collections.heros
    });

    ThoughtFreePix.Collections.heros.fetch();
    this._swapView(indexView, this.$heroList);
  },

  herosShow: function (id) {
    var model = ThoughtFreePix.Collections.heros.getOrFetch(id);

    var showView = new ThoughtFreePix.Views.HerosShow({
      model: model
    });

    this._swapView(showView, $("body"));
  },

  addToTeam: function (model) {
    //change to composite views and hold array of hero models
    var model = model

    var allyView = new ThoughtFreePix.Views.AllyIndex({
      model: model
    })

    this_swapView(allyView, $allyTeam);
  },

  _swapView: function (view, el) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    el.html(view.render().$el);
  }

});
