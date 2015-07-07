window.ThoughtFreePix.Collections.Heros = Backbone.Collection.extend({
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

window.ThoughtFreePix.Collections.heros = new ThoughtFreePix.Collections.Heros();
