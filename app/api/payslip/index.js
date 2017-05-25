'use strict';

var payslips = require('../../components/payslips');

module.exports = (req, res) => {
  return req.send('Endpoint now disabled');

  payslips
    .calc(req.body)
    .then(payslips.save)
    .then(res.send.bind(res))
    .catch((err) => {
      console.error('err',err)
      res.status(404).send(err);
    });
};