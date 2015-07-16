window.ThoughtFreePix = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // sets up routes
    this.router = new ThoughtFreePix.Routers.AppRouter({
      //pass in div name
      $heroList: $("#categories"),
      $allyTeam: $(".allyContainer"),
      $enemyTeam: $(".enemyContainer"),
      $selected: $(".selectedContainer")
    });
    // starts listening to changes to the location (url)
    Backbone.history.start();
  }
};

//implementation of composite view
//handles views inside views more efficiently
//prevents extra rerenders from nested views
Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, subview) {
    var selectorSubviews =
      this.subviews()[selector] || (this.subviews()[selector] = []);

    selectorSubviews.push(subview);

    var $selectorEl = this.$(selector);
    $selectorEl.append(subview.$el);
  },

  removeSubview: function (selector, subview) {
    var selectorSubviews =
      this.subviews()[selector] || (this.subviews()[selector] = []);

    var subviewIndex = selectorSubviews.indexOf(subview);
    selectorSubviews.splice(subviewIndex, 1);
    subview.remove();
  },

  attachSubviews: function () {
    var view = this;

    _(this.subviews()).each(function (selectorSubviews, selector) {
      var $selectorEl = view.$(selector)
      $selectorEl.empty();

      selectorSubviews.forEach(function (subview) {
        $selectorEl.append(subview.$el);
        subview.delegateEvents();
      });
    });
  },

  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});


$(document).ready(function(){
  ThoughtFreePix.initialize();
});
