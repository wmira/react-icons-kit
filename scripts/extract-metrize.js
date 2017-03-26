
// http://www.alessioatzeni.com/metrize-icons/

const path = require('path');

const { generateFromSvgFiles, exportableName } = require('./utils');


const workingFolder = './metrize';
const folderName = path.join(workingFolder, 'Metrize_Icons');
const SVGFolder = path.join(folderName, 'SVG');
const outFolder = path.join('..', 'src', 'metrize');


generateFromSvgFiles( SVGFolder, outFolder );


