// var Dispatcher = require('flux').Dispatcher;
// var assign = require('react/lib/Object.assign');
//
var AppDispatcher = assign(new FluxDispatcher(), {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
});
//
// module.exports = AppDispatcher;
// var AppDispatcher = new FluxDispatcher();
//
// var ExampleStore = new EventEmitter();
