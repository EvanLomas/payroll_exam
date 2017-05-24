var calc = require('./index.js'),
  expect = require('expect');

describe('calc > net_income', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  it('should return 263547 from 200000', () => {
    expect(calc({annual_salary:200000})).toBe(21963);
  });

  // Produce further tests
});