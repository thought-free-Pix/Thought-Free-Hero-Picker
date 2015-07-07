window.ThoughtFreePix.Collections.Heros = Backbone.Collection.extend({
  url: "/api/heros",
  model: ThoughtFreePix.Models.Hero
});

window.ThoughtFreePix.Collections.heros = new ThoughtFreePix.Collections.Heros();
