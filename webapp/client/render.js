var React = require('react');
var Page = require('./components/page');

module.exports = function render(state) {
  React.render(<Page state={state} />, document);
};
