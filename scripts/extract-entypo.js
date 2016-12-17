
const path = require('path');

const { generateFromSvgFiles, writeIconModule } = require('./utils');

const exportOutFolder = 'entypo';

/* archive https://dl.dropboxusercontent.com/u/4339492/entypo.zip */

const TRANSLATE = {
    '100%': 'oneHundredPercent',
    'export': 'exportIcon',
    'new': 'newIcon',
    'switch': 'switchIcon',
    '500px': 'fiveHundredPX',
    'google+': 'googlePlus'
};

const baseFolder = path.join('Entypo+');
const outFolder = path.join('..', 'src', exportOutFolder);


const exportedNames = {};

const lines1 = generateFromSvgFiles( path.join(baseFolder, 'Entypo+'), outFolder, TRANSLATE, { writeExportLines: false, exportedNames } );
const lines2 = generateFromSvgFiles( path.join(baseFolder, 'Entypo+ Social Extension'), outFolder, TRANSLATE, { writeExportLines: false, exportedNames } );

writeIconModule( lines1.concat(lines2), path.join(outFolder, 'index.js') );



