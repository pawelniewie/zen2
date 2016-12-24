const glob = require('glob');

const config = require('./webpack_base.config');
config.entry = glob.sync('./app/**/*Test.js');
config.output = {
    filename: 'tests.js',
};

module.exports = config;