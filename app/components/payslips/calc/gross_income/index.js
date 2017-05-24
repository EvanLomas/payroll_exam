'use strict';

module.exports = (employee_data) => {
  employee_data = employee_data || {};
  return Math.round(employee_data.annual_salary / 12) || 0;
};