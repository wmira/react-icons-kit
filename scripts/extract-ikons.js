
// http://ikons.piotrkwiatkowski.co.uk/index.html
const path = require('path');
//
const { generateFromSvgFiles, exportableName } = require('./utils');


const workingFolder = './ikons';
const folderName = path.join(workingFolder, 'IKONS');
const SVGFolder = path.join(folderName, 'SVG');
const outFolder = path.join('..', 'src', 'ikons');


generateFromSvgFiles( SVGFolder, outFolder );
//


