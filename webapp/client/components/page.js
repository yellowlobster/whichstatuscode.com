var React = require('react');
var App = require('./app');

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
        <App state={this.props.state} />
      </body>
    </html>;
  }
});
