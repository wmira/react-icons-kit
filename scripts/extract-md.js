
const fs = require('fs');
const { writeIconModule, findViewBox, extractPaths } = require('./utils');

const svgdirs = [
    './image/svg',
    './file/svg',
    './notification/svg',
    './av/svg',
    './device/svg',
    './alert/svg',
    './maps/svg',
    './content/svg',
    './hardware/svg',
    './communication/svg',
    './navigation/svg',
    './action/svg',
    './editor/svg',
    './toggle/svg',
    './social/svg',
    './places/svg'
];

const extractName = fname => {
    const index = fname.indexOf('_24px.svg');
    return fname.substring(0, index);
};

const generateFile = () => {
    const svgs = [];
    
     const processed = {};
    svgdirs.forEach( svgdir => {

        const files = fs.readdirSync(`./material-design-icons/${svgdir}/production`, { encoding: 'utf-8' });
       
        const filtered = files.filter( f => f.indexOf('_24px.svg') >= 0 );
        filtered.forEach( f => {
            
            const name = extractName(f);

            if ( !processed[name] ) {
                const content = fs.readFileSync(`./material-design-icons/${svgdir}/production/${f}`, { encoding: 'UTF-8' });
                const viewBox = findViewBox(content);
                const paths = extractPaths(content);                            
                svgs.push({ name, paths, viewBox });
                processed[name] = name;
            } 
        });
    });

    writeIconModule( svgs, '../src/material-design.js');

};

generateFile();