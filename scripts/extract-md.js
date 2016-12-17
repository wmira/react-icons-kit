
const fs = require('fs');
const path = require('path');
const { writeIconModule, findViewBox, extractPaths, createExportLine,
    readFromSvgContent } = require('./utils');
const baseFolder = 'material-design-icons-3.0.1';

const outFolder = path.join('..', 'src', 'md');
/** 
 * Download latest from:
 * https://github.com/google/material-design-icons/releases
 * 
 * 
 * 
 */
const filterName = f => f.indexOf('svg/production') >= 0;
const filterSize = f => f.indexOf('_24px') >= 0;
const findAllSvgFiles = (dir, filelist = []) => {
    
    fs.readdirSync(dir).forEach(file => {

        filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? findAllSvgFiles(path.join(dir, file), filelist)
        : filelist.filter(filterName).concat(path.join(dir, file));

    });
    
    return filelist;
}



const extractName = fname => {
    const index = fname.indexOf('_24px.svg');
    return fname.substring(0, index);
};

const generateFiles = () => {
    const svgs = findAllSvgFiles(baseFolder).filter(filterSize);
    
    const processed = {};
    
    const exportLines = svgs.map( svgFile => {
        const filename = path.basename(svgFile);
        const name = extractName(filename);
        
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