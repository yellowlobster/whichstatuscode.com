var State = require('./state');
var render = require('./render');
var update = require('./update');
var dispatcher = require('./dispatcher');

require('../assets/stylesheets/all.styl');

module.exports = window.start = function start() {
  var state = State.initial();
  render(state);

  dispatcher.register(function(input) {
    state = update(input, state);
    render(state);
  });
};
