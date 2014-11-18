var React = require('react');
var Page = React.createFactory(require('./page'));

module.exports = function render(state) {
  React.render(Page({state: state}), document);
};
