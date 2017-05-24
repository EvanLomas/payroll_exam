'use strict';

var net_income = require('../net_income');
var superannuation = require('../super');

module.exports = (employee_data) => {
  employee_data = employee_data || {};
  return Math.round(net_income(employee_data) - superannuation(employee_data)) || 0;
};