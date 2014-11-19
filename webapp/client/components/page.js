var React = require('react');
var input = require('../input');

module.exports = React.createClass({
  displayName: 'Page',

  render: function() {
    return <html lang="en">
      <head>
        <script type="text/javascript" src="bundle.js" />
        <script type="text/javascript">start()</script>
        <title>Which status code should I use?</title>
      </head>
      <body>
        <h1>INDEX PAGE</h1>
        <p>
          This is some sample text, this will change when the button is clicked.
        </p>
        <p>{this.props.state.get('foo')}</p>
        <button onClick={this.handleChangeFoo}>Change the text!</button>
      </body>
    </html>;
  },

  handleChangeFoo: function(ev) {
    ev.preventDefault();

    input.changeFoo();
  }
});
