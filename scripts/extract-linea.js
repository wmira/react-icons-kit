
//http://www.linea.io/

const fs = require('fs');
const path = require('path');
const { writeIconModule, createExportLine,
    readFromSvgContent, findAllSvgFiles  } = require('./utils');

const baseFolder = 'linea';
const outFolder = path.join('..', 'src', 'linea');

const filterName = f => f.indexOf('.svg') >= 0;
const filterDir = f => f === 'SVG';
const extractName = fname => {
    const index = fname.indexOf('.svg');
    return fname.substring(0, index);
};
const generateFiles = () => {
    const svgs = findAllSvgFiles(filterName, filterDir, baseFolder);

    const processed = {};

    const exportLines = svgs.map( svgFile => {
        const filename = path.basename(svgFile) ;

        const name = extractName(filename);

        if ( !processed[name] && name.indexOf(' ') < 0 && name.indexOf('-') < 0 && svgFile.indexOf('_SVG') >= 0 && svgFile.indexOf('expanded') <0 ) { //there seems to be some duplicate names
            const content = fs.readFileSync(svgFile, { encoding: 'UTF-8' });
            const { viewBox, children } = readFromSvgContent(content);
            const exportLine = createExportLine(name, viewBox, children);
            fs.writeFileSync(path.join(outFolder, `${name}.js`), exportLine);
            processed[name] = name;
            return exportLine;
        }
    }).filter( f => f );

    writeIconModule(exportLines, path.join(outFolder, 'index.js'));

};

generateFiles();