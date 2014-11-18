var React = require('react');

module.exports = React.createClass({
  displayName: 'Page',

  render: function() {
    return React.DOM.html(null,
      React.DOM.head(null,
        React.DOM.script({type: 'text/javascript', src: 'build/bundle.js'}),
        React.DOM.script({type: 'text/javascript'}, 'start();')
      ),
      React.DOM.body(null, 'Hello world, this is ' + this.props.state.get('foo'))
    );
  }
});
