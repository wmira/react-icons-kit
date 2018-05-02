// https://feathericons.com/
const path = require('path');
//
const { generateFromSvgFiles } = require('./utils');

const name = 'feather'
const workingFolder = './feather';
const folderName = workingFolder;
const SVGFolder = folderName;
const outFolder = path.join('..', 'src', `${name}`);


generateFromSvgFiles( SVGFolder, outFolder );
//
//