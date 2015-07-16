window.ThoughtFreePix.Views.AllyIndex = Backbone.CompositeView.extend({

  template: JST['ally/index'],

  initialize: function (option) {
    // this.listenTo(this.collection, "sync add", this.render);
    // this.collection.getOrFetch(1);
    // this.collection.getOrFetch(5);
    this.listenTo(this.collection, "add", this.addHero);
    this.listenTo(this.collection, "remove", this.removeHero);
    this.listenTo(this.collection, "sync", this.render);

    this.collection.each(function(hero){
      var heroShowView =
        new ThoughtFreePix.Views.HerosShow({ model: hero });

      view.addSubview(".allyHeros", heroShowView);
      heroShowView.render();
      // this.$(".allyHeros").append(heroShowView.render().$el);
    });
  },

  addHero: function (hero) {
    //adds latest hero to the subview and renders it
    var heroShowView = new ThoughtFreePix.Views.HerosShow({
      model: hero
    });

    this.addSubview(".allyHeros", heroShowView);
    heroShowView.render();
  },

  removeHero: function (hero) {
    var heroShowView =
      _(this.subviews())[".allyHeros"].find(function (subview) {
        return subview.model == hero;
      });

    this.removeSubview(".allyHeros", heroShowView);
  },

  render: function () {
    var view = this;
    var renderedContent = this.template({
      // hero: this.model
    });

    this.$el.html(renderedContent);
    this.attachSubviews();
    // this.collection.each(function(hero){
    //   var heroShowView =
    //     new ThoughtFreePix.Views.HerosShow({ model: hero });
    //
    //   view.addSubview(".allyHeros", heroShowView);
    //   // this.$(".allyHeros").append(heroShowView.render().$el);
    // });

    return this;
  },

});
