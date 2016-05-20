/**
 * Created by marcioheleno on 20/05/16.
 */
'use strict';

/* GET home page === Controller */

module.exports.index = function (req, res) {
  res.render('index', {title : 'Express pelo controller'})
};