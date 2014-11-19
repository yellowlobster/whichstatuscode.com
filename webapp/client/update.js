module.exports = function(input, state) {
  switch(input.type) {
    case 'CHANGE_FOO':
      state = state.set('foo', input.foo);
      break;
  }
  return state;
};
