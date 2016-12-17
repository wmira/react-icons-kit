
const path = require('path');

const { generateFromSvgFiles } = require('./utils');


/* archive https://github.com/iconic/open-iconic/archive/master.zip */

const TRANSLATE = {
    'delete': 'deleteIconic',
    'in': 'inIconic'
};

const workingFolder = './';
const folderName = path.join(workingFolder, 'open-iconic-master');
const SVGFolder = path.join(folderName, 'svg');

const outFolder = path.join('..', 'src', 'iconic');


generateFromSvgFiles( SVGFolder, outFolder, TRANSLATE );


