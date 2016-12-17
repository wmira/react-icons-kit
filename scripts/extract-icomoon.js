
const path = require('path');

const { generateFromSvgFiles } = require('./utils');


/* archive https://github.com/Keyamoon/IcoMoon-Free/archive/master.zip */


const workingFolder = './';
const folderName = path.join(workingFolder, 'IcoMoon-Free-master');
const SVGFolder = path.join(folderName, 'SVG');

const icoMoonOutFolder = path.join('..', 'src', 'icomoon');

generateFromSvgFiles( SVGFolder, icoMoonOutFolder );
