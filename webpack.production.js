'use strict';

const path = require('path');
const [mainConfigBase, rendererConfigBase] = require('./webpack.default.js');

let mainConfig = mainConfigBase;
mainConfig.mode = 'production';

let rendererConfig = rendererConfigBase;
rendererConfig.mode = 'production';

module.exports = [mainConfig, rendererConfig];
