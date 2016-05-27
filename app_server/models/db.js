/**
 * Created by marcioheleno on 21/05/16.
 */
'use strict';

var mongoose = require('mongoose');
// var graceFullShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

// var dbURIlog = 'mongodb://localhost/loc8rLog';
// var logDB = mongoose.createConnection(dbURIlog);
//
// logDB.on('connected', function () {
//   console.log('Mongoose connected to ' + dbURIlog);
// });
//
// logDB.close(function () {
//   console.log('Mongoose log disconnected')
// });

// // Eventos de Conexao
// mongoose.connection.on('connected', function () {
//   console.log('Mongoose connected to ' + dbURI);
// });
// mongoose.connection.on('error', function (err) {
//   console.log('Mongoose connection error: ' + err);
// });
// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose disconnected');
// });
//
// var graceFullShutdown = function (msg, callback) {
//   mongoose.connection.close(function () {
//     console.log('Mongoose esta disconectado ' + msg);
//     callback();
//   });
// };
//
// // Reiniciado pelo nodemon
// process.once('SIGUSR2', function () {
//   graceFullShutdown('nodemon restart', function () {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });
// // Reiniciado pelo Terminal
// process.on('SIGINT', function () {
//   graceFullShutdown('app termination', function () {
//     process.exit(0);
//   });
// });
// // Reiniciado pelo Heroku
// process.on('SIGTERM', function () {
//   graceFullShutdown('Heroku app shutdown', function () {
//     process_params.exit(0);
//   });
// });
//
// require('./locations');