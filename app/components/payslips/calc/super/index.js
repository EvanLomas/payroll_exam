'use strict';

var gross_income = require('../gross_income');

module.exports = (employee_data) => {
  employee_data = employee_data || {};
  return Math.round(gross_income(employee_data) * employee_data.super_rate) || 0;
};