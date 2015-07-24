window.ThoughtFreePix.Views.HerosIndex = Backbone.View.extend({
  // template: JST['heros/index'],
  template: "<div class='indexContainer'></div>",

  // initialize: function (options) {
  //   this.collection = options.collection;
  // },
  events: {
    // "click button#refresh": "refresh",
    "click button#abathur": "abathur",
    "click img.heroImage": "test"
  },

  initialize: function (option) {
      // this.listenTo(this.collection, "sync add", this.render);
      this.reactRoot = React.createElement(HeroIndex, {heros: this.collection});
  },

  // refresh: function () {
  //   var view = this;
  //
  //   this.collection.fetch({
  //     //view is already in body, no need to append again
  //     success: function () { view.render(); }
  //   });
  // },

  abathur: function () {
    alert("PJ PARTY");
  },

  test: function (event) {
    console.log("working");
    debugger
    //look at how tracks are added to queue and
    //do same with image to enemy/ally team
    // ThoughtFreePix.router.addToTeam(this.model);
  },

  render: function () {
    // var renderedContent = this.template({
    //   heros: this.collection
    // });

    var renderedContent = this.template;

    this.$el.html(renderedContent);
    React.render(this.reactRoot, this.$('.indexContainer').get(0));
    return this;
  }
});
