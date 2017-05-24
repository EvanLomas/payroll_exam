'use strict';

/*
** NOTE: As noted in app/components/payslips/calc/index.js, using a cascading class object
** would be more efficient than requiring the other components and running them again
** as has done here but would take a little longer to build
*/

var gross_income = require('../gross_income');
var income_tax = require('../income_tax');

module.exports = (employee_data) => {
  return (gross_income(employee_data) + income_tax(employee_data)) || 0;
};