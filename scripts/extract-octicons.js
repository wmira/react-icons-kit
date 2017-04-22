

const path = require('path');

const { generateFromSvgFiles } = require('./utils');


const workingFolder = './octicons';
const folderName = path.join(workingFolder);
const outFolder = path.join('..', 'src', 'oct');


generateFromSvgFiles( folderName, outFolder );


