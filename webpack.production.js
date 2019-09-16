'use strict';

const path = require('path');
const [mainConfigBase, rendererConfigBase] = require('./webpack.default.js');

let mainConfig = mainConfigBase;
mainConfig.mode = 'development';

let rendererConfig = rendererConfigBase;
rendererConfig.mode = 'development';

module.exports = [mainConfig, rendererConfig];
