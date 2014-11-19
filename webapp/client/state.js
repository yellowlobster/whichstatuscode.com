var Immutable = require('immutable');
var statusCodes = require('./state/status_codes');
var questions = require('./state/questions');

module.exports = {
  initial: function initial() {
    return Immutable.fromJS({
      statusCodes: statusCodes,
      questions: questions,
      answersSoFar: []
    });
  },

  isQuestion: function(questionOrCode) {
    return typeof questionOrCode != 'number';
  },

  getStatusCode: function(state, code) {
    return state.getIn(['statusCodes', code.toString()]);
  },

  getCurrentQuestionOrCode: function(state) {
    var questionOrCode = state.get('answersSoFar').reduce(function(questionOrCode, answer) {
      var answerDetails = questionOrCode.getIn(['answers', answer]);
      if (answerDetails.get('statusCode')) {
        return answerDetails;
      } else {
        return state.getIn(['questions', answerDetails.get('question').toString()]);
      }
    }, state.getIn(['questions', '1']));

    // Return the raw question text or status code depending on what we have
    if (questionOrCode.get('question')) {
      return questionOrCode.get('question');
    } else {
      return questionOrCode.get('statusCode');
    }
  }
};
