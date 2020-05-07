#!/usr/bin/env node

const path = require('path');

const { generateFromSvgFiles } = require('./utils');

const workingFolder = '../node_modules/@primer/octicons/build/svg';
const folderName = path.join(workingFolder);
const outFolder = path.join('..', 'src', 'oct');

generateFromSvgFiles( folderName, outFolder );
