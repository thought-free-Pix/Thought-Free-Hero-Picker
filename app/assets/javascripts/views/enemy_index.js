window.ThoughtFreePix.Views.EnemyIndex = Backbone.View.extend({

  template: JST['enemy/index'],

  initialize: function (option) {
    // this.listenTo(this.collection, "sync add", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      // hero: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

});
