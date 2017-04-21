
// http://typicons.com/

const path = require('path');

const { generateFromSvgFiles } = require('./utils');


const workingFolder = './typicons';
const folderName = path.join(workingFolder);
const outFolder = path.join('..', 'src', 'typicons');


generateFromSvgFiles( folderName, outFolder );


