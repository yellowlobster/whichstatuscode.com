var State = require('./state');
var render = require('./render');
var update = require('./render');
var Dispatcher = require('flux').Dispatcher;

module.exports = window.start = function start() {
  var dispatcher = new Dispatcher();

  var state = State.initial();
  render(state);

  dispatcher.register(function(input) {
    state = update(input, state);
    render(state);
  });
};
