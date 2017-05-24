'use strict';

/*
** To simplify long-term maintenance of this file and it's unit tests, breaking this array
** of calculations into child functions would be beneficial, however external time constraints
** have made this unviable for this task's prompt delivery
*/

var taxTable = [{
  min: 0,
  max: 18200,
  calc: (income) => { return 0; },
},{
  min: 18201,
  max: 37000,
  calc: (income) => {
    income = income || 0;
    return Math.round(Math.ceil(income - 18200) * 0.19);
  },
},{
  min: 37001,
  max: 80000,
  calc: (income) => {
    income = income || 0;
    return Math.round(Math.ceil(income - 37000) * 0.325) + 3572;
  },
},{
  min: 80001,
  max: 180000,
  calc: (income) => {
    income = income || 0;
    return Math.round(Math.ceil(income - 80000) * 0.37) + 17547;
  },
},{
  min: 180001,
  max: 0,
  calc: (income) => {
    income = income || 0;
    return Math.round(Math.ceil(income - 180000) * 0.45) + 54547;
  },
},];

module.exports = (employee_data) => {
  employee_data = employee_data || {};
  var annual_salary = employee_data.annual_salary || 0;
  var output = 0;
  for(var i in taxTable) {
    var tax = taxTable[i];
    if(!tax.min || tax.min <= annual_salary) {
      if(!tax.max || tax.max >= annual_salary) {
        output += tax.calc(annual_salary);
      }
    }
  }
  return Math.round(output/12) || 0;
};