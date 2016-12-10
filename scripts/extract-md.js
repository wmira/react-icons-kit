
const fs = require('fs');
const { findViewBox, extractPaths, createOuput } = require('./utils');

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

const svgs = [];
svgdirs.forEach( svgdir => {

    const files = fs.readdirSync(`./material-design-icons/${svgdir}/production`, { encoding: 'utf-8' });

    const filtered = files.filter( f => f.indexOf('_24px.svg') >= 0 );
    filtered.forEach( f => {
        const content = fs.readFileSync(`./material-design-icons/${svgdir}/production/${f}`, { encoding: 'UTF-8' });

        const viewBox = findViewBox(content);
        const paths = extractPaths(content);
        const name = extractName(f);
        svgs.push({ name, paths, viewBox });
    });
});

createOuput( svgs, 'material-design.js');

