var React = require('react');
var input = require('../input');

module.exports = React.createClass({
  displayName: 'Page',

  render: function() {
    return <html>
      <head>
        <script type="text/javascript" src="build/bundle.js" />
        <script type="text/javascript">start()</script>
      </head>
      <body>
        Hello world, this is {this.props.state.get('foo')}{' '}
        <button onClick={this.handleChangeFoo}>Change this text!</button>
      </body>
    </html>;
  },

  handleChangeFoo: function(ev) {
    ev.preventDefault();

    input.changeFoo();
  }
});
