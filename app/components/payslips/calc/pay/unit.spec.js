var calc = require('./index.js'),
  expect = require('expect');

describe('calc > pay', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  it('should return 21963 from 200000', () => {
    expect(calc({annual_salary:200000})).toBe(21963);
  });

  // TODO: Further tests
});