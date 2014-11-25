var React = require('react');
var input = require('../input');
var State = require('../state');

module.exports = React.createClass({
  displayName: 'App',

  render: function() {
    var currentQuestionOrCode = State.getCurrentQuestionOrCode(this.props.state);
    return State.isQuestion(currentQuestionOrCode) ?
      this.renderQuestion(currentQuestionOrCode) : this.renderCode(currentQuestionOrCode);
  },

  renderQuestion: function(question) {
    return <div>
      <h1>{question}</h1>
      <p>
        <button onClick={this.handleYes}>Yes</button>
        <button onClick={this.handleNo}>No</button>
      </p>
    </div>;
  },

  renderCode: function(code) {
    var statusCode = State.getStatusCode(this.props.state, code);
    return <div>
      <h1>This is your status code: {code} - {statusCode.get('name')}</h1>
      <p>
        {statusCode.get('description')}
      </p>
    </div>
  },

  handleYes: function(ev) {
    ev.preventDefault();
    input.answerYes();
  },

  handleNo: function(ev) {
    ev.preventDefault();
    input.answerNo();
  }
});
