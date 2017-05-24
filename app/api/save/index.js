'use strict';

var payslips = require('../../components/payslips');

module.exports = (req, res) => {
  payslips.save(req.body)
    .then(res.send.bind(res))
    .catch((err) => {
      if(err == 'Already Created') {
        return res.status(409).send(err)
      }
      res.status(404).send(err);
    });
};