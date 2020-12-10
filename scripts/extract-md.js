
const fs = require('fs');
const path = require('path');
const { writeIconModule, createExportLine,
    readFromSvgContent, findAllSvgFiles  } = require('./utils');
const baseFolder = __dirname + 'material-design-icons-4.0.0';

const outFolder = __dirname + '/' + path.join('..', 'src', 'md');
/**
 * Download latest from:
 * https://github.com/google/material-design-icons/releases
 *
 *
 *
 */
const filterName = f => (
    (f.indexOf('24px.svg') >= 0) && (
    (f.indexOf('materialicons/') >= 0) ||
    (f.indexOf('materialiconsoutlined/') >= 0) ||
    (f.indexOf('materialiconstwotone/') >= 0)
  )
);

const filterSize = f => f.indexOf('24px') >= 0;

const modifierMap = {
    outline: /materialiconsoutlined/,
    twotone: /materialiconstwotone/,
};

const nameRegex = /^.*\/(\w+)\/materialicons.*\/24px.svg$/;

const extractName = (fname, path) => {
    const modifier = (
        Object.entries(modifierMap)
            .find(([, regex]) => regex.test(path)) || []
    )[0];

    const name = path.match(nameRegex)[1];

    if (!name) {
        throw new Error(`Did not find a valid name for ${path}`);
    }

    return [
        'ic',
        name,
        modifier,
    ].filter(Boolean).join('_');
};

const generateFiles = () => {
    const svgs = findAllSvgFiles(filterName, undefined, baseFolder).filter(filterSize);

    const processed = {};

    const exportLines = svgs.map( svgFile => {
        const filename = path.basename(svgFile);
        const name = extractName(filename, svgFile);
        if ( !processed[name] ) { //there seems to be some duplicate names
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
