window.ThoughtFreePix.Views.HerosShow = Backbone.View.extend({
  template: JST["heros/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      hero: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
