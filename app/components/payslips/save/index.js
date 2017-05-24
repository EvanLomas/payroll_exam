'use strict';
var q = require('q');
var fs = require('fs');
var path = require('path');

var _payslipsPath = path.join(__dirname,'../../../../payslips');

// NOTE: in a real world we would do a look-up in a database or other storage medium, not the file system

// Get list of all existing files
var existingPayslips = fs
  .readdirSync(_payslipsPath)
  .filter((file) => {
    return fs.lstatSync(path.join(_payslipsPath, file)).isFile();
  });

module.exports = (payslip_data) => {
  if(!(payslip_data && payslip_data.first_name && payslip_data.last_name)) {
    console.error('payslip_save > payslip_data undefined or incomplete');
    return q.reject();
  }

  var dateNow = new Date();

  var filename = dateNow.getFullYear()+'_'+dateNow.getMonth()+'_'+payslip_data.last_name+'_'+payslip_data.first_name+'.json';
  var filepath = path.join(_payslipsPath,filename);

  // NOTE: In a real-world app this could be a unique ID which could be searched upon in a database, not the file system
  if(existingPayslips.indexOf(filename)>=0) {
    console.error('Payslip "'+filename+'" already exists')
    return q.reject('Already Created');
  }

  return q.promise((resolve, reject) => {
    // NOTE: In a real-world app, a storage method (e.g. s3) would be configured and used rather than fs
    // NOTE: In a real-world app, users would have unique IDs rather than their name/date to use as unique IDs

    var payslipDataString = JSON.stringify(payslip_data);

    fs.writeFile(filepath, payslipDataString, (err) => {
      if(err) { return reject(err); }
      existingPayslips.push(filename);
      resolve(payslip_data);
    });
  });
};