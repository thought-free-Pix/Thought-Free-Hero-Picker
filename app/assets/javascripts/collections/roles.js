window.ThoughtFreePix.Collections.Roles = Backbone.Collection.extend({
  url: "/api/roles",
  model: ThoughtFreePix.Models.Role
});


window.ThoughtFreePix.Collections.roles = new ThoughtFreePix.Collections.Roles();
