var React = require('react');
var App = require('./app');
var assetPath = require('../asset_path');

module.exports = React.createClass({
  displayName: 'Page',

  propTypes: {
    state: React.PropTypes.object.isRequired
  },

  render: function() {
    return <html lang="en">
      <head>
        <script type="text/javascript" src={assetPath('bundle.js')} />
        <script type="text/javascript">start()</script>
        <title>Which status code should I use?</title>
      </head>
      <body>
        <App state={this.props.state} />
      </body>
    </html>;
  }
});
