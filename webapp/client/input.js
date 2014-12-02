var dispatcher = require('./dispatcher');

module.exports = {
  answerYes: function() {
    dispatcher.dispatch({
      type: 'ANSWER',
      answer: 'yes'
    });
  },

  answerNo: function() {
    dispatcher.dispatch({
      type: 'ANSWER',
      answer: 'no'
    });
  },

  restart: function() {
    dispatcher.dispatch({
      type: 'RESTART'
    });
  }
};
