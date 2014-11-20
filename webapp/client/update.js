module.exports = function(input, state) {
  switch(input.type) {
    case 'ANSWER':
      return state.update('answersSoFar', function(answersSoFar) {
        return answersSoFar.push(input.answer)
      });
  }
};
