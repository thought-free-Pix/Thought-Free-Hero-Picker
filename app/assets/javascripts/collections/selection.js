window.ThoughtFreePix.Collections.SelectedHero = Backbone.Collection.extend({
  url: "/api/heros",
  model: ThoughtFreePix.Models.Hero,

  getOrFetch: function (id) {
    var model;
    var heros = this;

    if (model = this.get(id)) {
      return model;
    } else {
      model = new ThoughtFreePix.Models.Hero({id: id});
      model.fetch({
        success: function () { heros.add(model) }
      });
      return model;
    }
  }
});

window.ThoughtFreePix.Collections.selectedHero = new ThoughtFreePix.Collections.SelectedHero();
