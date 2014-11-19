var Immutable = require('immutable');

module.exports = {
  initial: function initial() {
    return Immutable.fromJS({
      foo: 'Some state'
    });
  }
};
