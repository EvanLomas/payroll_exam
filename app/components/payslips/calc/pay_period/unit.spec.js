var calc = require('./index.js'),
  expect = require('expect');

describe('calc > pay_period', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  it('should return the current month', () => {
    expect(calc()).toBe((new Date()).getMonth());
  });
});