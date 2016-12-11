
const fs = require('fs');
const { findViewBox, exportableName, writeIconModule } = require('./utils');

const TRANSLATE = {
    try: 'tryIcon',
    '500px': 'fiveHundredPX',
    'switch': 'switchIcon'
}

const extractName = file => {
    const idxDash = file.indexOf('-') + 1;
    const idxSvg = file.indexOf('.svg');
    return file.substring(idxDash, idxSvg);
};

const readFile = file => {
    const contents = fs.readFileSync(`./SVG/${file}`, { encoding: 'UTF-8' });
    const expr = /<path fill="#000000" d="(.*?)"></gm;

    let matches = null;

    const results = [];

    const name = exportableName(extractName(file));

    while ( (matches = expr.exec(contents)) !== null ) {
        results.push(`${matches[1]}`);
    }
    return { name: TRANSLATE[name] ? TRANSLATE[name]: name, paths: results, viewBox: findViewBox(contents) };

};



const generateFile = () => {
    const exportsArr = [];
    fs.readdir('./SVG', (err, files) => {
        files.forEach( file => {
            exportsArr.push(readFile(file));
        });
        
        writeIconModule(exportsArr, '../src/icomoon.js');
    });
};

generateFile();
