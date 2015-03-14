/*global require, exports*/

var async = require('async');

function oneTwo(callback) {
    'use strict';
    callback(null, 'one', 'two');
}

function three(callback) {
    'use strict';
    callback(null, 'three');
}

function waterOne(callback, results) {
    'use strict';
    callback(null, 'waterOne');
}

function waterTwo(callback, results) {
    'use strict';
    callback(null, 'waterTwo');
}

exports.execute = function (callback) {
    'use strict';
    async.auto({
        first: oneTwo,
        second: three,
        third: ['first', waterOne],
        fourth: ['second', 'third', waterTwo]
    },
        function (err, results) {
            callback(null, results);
        });
};