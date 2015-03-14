/*global require, console*/

var asyncTest = require('./async_test');

asyncTest.execute(function (err, results) {
    'use strict';
    console.log('All DONE', results);
});