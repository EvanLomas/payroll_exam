'use strict'

var q = require('q');
var path = require('path');
var requireAll = require('../../require_all');

// Dynamically include all sub-folders
var calculators = requireAll(__dirname);

module.exports = (employee_data) => {
  if(!employee_data) { return q.reject(); }

  /*
  ** Note: Late in development I reviewed this section and came to the conclusion that a better
  ** method could have been used. By using a class object with each calculation written as a function upon
  ** that class, this data could have been daisy chained instead of mass-calculated which would have increased accuracy
  ** of the child functions (by using the output from previous functions rather than re-calculating them)
  ** Such a method would look like this:

  var defer = q.deferred();
  calculator(employee_data)
    .grossIncome()
    .incomeTax()
    .netIncome()
    .done(defer.resolve);
  return defer.promise;

  ** and internally each function would look like this:

  this.grossIncome = () => {
    this.employee_data.gross_income = 1 + 2 * 3;  // some calculation
    return this
  }
  */

  try {
    var payroll_data = {
      first_name: employee_data.first_name,
      last_name: employee_data.last_name,
      annual_salary: employee_data.annual_salary,
      super_rate: employee_data.super_rate,

      // calculated values
      gross_income: calculators.gross_income(employee_data),
      income_tax: calculators.income_tax(employee_data),
      net_income: calculators.net_income(employee_data),
      pay: calculators.pay(employee_data),
      pay_period: calculators.pay_period(employee_data),
      super: calculators.super(employee_data),
    };

    return q.resolve(payroll_data);
  } catch(e) {
    console.error('calc error',e);
    return q.reject(e);
  }
}