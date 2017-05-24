var calc = require('./index.js'),
  expect = require('expect');

/*
Calculations as of : 2017-05-24

0 - $18,200 Nil
$18,201 - $37,000 19c for each $1 over $18,200
$37,001 - $80,000 $3,572 plus 32.5c for each $1 over $37,000
$80,001 - $180,000 $17,547 plus 37c for each $1 over $80,000
$180,001 and over $54,547 plus 45c for each $1 over $180,000
*/

describe('calc > income_tax', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  /* DEV NOTE: values should be calculated and edited manually,
  ** never use js calculations to test js calculations as
  ** floating number errors would never be caught
  */

  describe('First tax bracket', () => {
    // < 18201 = Nil

    it('should calculate 0 from 18200', () => {
      expect(calc({annual_salary: 18200})).toBe(0);
    });

    it('should calculate 0 from 17000', () => {
      expect(calc({annual_salary: 17000})).toBe(0);
    });

    it('should calculate 0 from 0', () => {
      expect(calc({annual_salary: 0})).toBe(0);
    });
  });

  describe('Second tax bracket', () => {
    // val * 0.19

    it('should calculate 0 from 18201', () => {
      expect(calc({annual_salary: 18201})).toBe(0);
    });

    it('should calculate 2 from 18300', () => {
      expect(calc({annual_salary: 18300})).toBe(2);
    });

    it('should calculate 298 from 37000', () => {
      expect(calc({annual_salary: 37000})).toBe(298);
    });
  });

  describe('Third tax bracket', () => {
    it('should calculate 298 from 37001', () => {
      expect(calc({annual_salary: 37001})).toBe(298);
    });

    it('should calculate 379 from 40000', () => {
      expect(calc({annual_salary: 40000})).toBe(379);
    });

    it('should calculate 1462 from 80000', () => {
      expect(calc({annual_salary: 80000})).toBe(1462);
    });
  });

  describe('Fourth tax bracket', () => {
    it('should calculate 1462 from 80001', () => {
      expect(calc({annual_salary: 80001})).toBe(1462);
    });

    it('should calculate 2079 from 100000', () => {
      expect(calc({annual_salary: 100000})).toBe(2079);
    });

    it('should calculate 4546 from 180000', () => {
      expect(calc({annual_salary: 180000})).toBe(4546);
    });
  });

  describe('Fifth tax bracket', () => {
    it('should calculate 4546 from 180001', () => {
      expect(calc({annual_salary: 180001})).toBe(4546);
    });

    it('should calculate 5296 from 200000', () => {
      expect(calc({annual_salary: 200000})).toBe(5296);
    });
  });

});