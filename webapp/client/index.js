var State = require('./state');
var render = require('./render');
var update = require('./update');
var dispatcher = require('./dispatcher');

module.exports = window.start = function start() {
  var state = State.initial();
  render(state);

  dispatcher.register(function(input) {
    state = update(input, state);
    render(state);
  });
};
