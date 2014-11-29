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
    return <div className="question">
      <div className="question_mainVerticalLine"></div>
      <div className="question_mainHorizontalLine"></div>
      <h1 className="question_text">{question}</h1>

      <div className="question_mainActionsContainer">
        <div className="mainActions_line"></div>
        <a className="mainAction positiveAction  " onClick={this.handleYes}>YES</a>
        <a className="mainAction negativeAction  " onClick={this.handleNo}>NO</a>
      </div>
    </div>;
  },

  renderCode: function(code) {
    var statusCode = State.getStatusCode(this.props.state, code);
    return (
      <div className="answer">
        <div className="answer_mainVerticalLine"></div>

        <div className="answer_textContainer">
          <div className="_text_titleContainer">
            <div className="_titleContainer_mainHorizontalLine"></div>
            <h1 className="_titleContainer_code">{code}</h1>
            <span className="_titleContainer_shortDescription">{statusCode.get('name')}</span>
          </div>
          <p className="_text_description">
            {statusCode.get('description')}
          </p>
        </div>

        <div className="answer_mainActionsContainer">
          <div className="mainActions_line"></div>
          <a className="mainAction neutralAction" onClick={this.handleRestart}>RESTART</a>
        </div>
      </div>
    );
  },

  handleRestart: function(ev) {
    // TODO: Refactor this to use a proper router when we add one.
    window.location = '/';
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
