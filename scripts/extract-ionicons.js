
// http://ionicons.com/

const path = require('path');

const { generateFromSvgFiles } = require('./utils');


const workingFolder = './ionicons';
const folderName = path.join(workingFolder);
const outFolder = path.join('..', 'src', 'ionicons');


generateFromSvgFiles( folderName, outFolder );


