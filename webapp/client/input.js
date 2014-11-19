var dispatcher = require('./dispatcher');

var i = 1;
module.exports = {
  changeFoo: function() {
    dispatcher.dispatch({
      type: 'CHANGE_FOO',
      foo: 'Foo changed ' + i++ + ' times'
    });
  }
}
