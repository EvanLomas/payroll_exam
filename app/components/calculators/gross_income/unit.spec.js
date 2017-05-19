var calc = require('./index.js'),
  expect = require('expect');

describe('gross_income', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  // TODO: Further tests
});