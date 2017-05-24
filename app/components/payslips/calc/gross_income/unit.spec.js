var calc = require('./index.js'),
  expect = require('expect');

describe('calc > gross_income', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  it('should return data.annual_salary / 12, rounded', () => {
    expect(calc({annual_salary:10000})).toBe(833);
  });

  it('should return data.annual_salary / 12, rounded', () => {
    expect(calc({annual_salary:10030})).toBe(836);
  });

  // TODO: Further tests
});