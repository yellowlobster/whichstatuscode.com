module.exports = {
  1: {question: 'Are you responding successfully?', answers: {yes: {statusCode: 200}, no: {question: 2}}},
  2: {question: 'Are you responding from a failure?', answers: {yes: {question: 3}, no: {statusCode: 100}}},
  3: {question: 'Is that failure due to a server issue?', answers: {yes: {statusCode: 500}, no: {statusCode: 400}}}
};
