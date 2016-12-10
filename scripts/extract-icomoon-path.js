
const fs = require('fs');
const { findViewBox } = require('./utils');
const exportsArr = [];

const extractName = file => {
    const idxDash = file.indexOf('-') + 1;
    const idxSvg = file.indexOf('.svg');
    return file.substring(idxDash, idxSvg);
};

const exportableName = name => {
    const splitNames = name.split('-');
    if ( splitNames.length === 1 ) {
        return name;
    }
    return splitNames.slice(1).reduce( (camel, current) => {
        const uppercased = current.charAt(0).toUpperCase();
        return `${camel}${uppercased}${current.substring(1)}`;
    }, splitNames[0]);
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
    return { name, paths: results, viewBox: findViewBox(contents) };

};



const readFiles = () => {
    fs.readdir('./SVG', (err, files) => {
        files.forEach( file => {
            exportsArr.push(readFile(file));
        });

        let moduleFile = `module.exports = {\n`;


        const exportitems = exportsArr.reduce( (out, exp) => {
            return `${out}\n'${exp.name}': {paths: ${JSON.stringify(exp.paths)}, viewBox: ${JSON.stringify(exp.viewBox)} },`;
        }, '');



        fs.writeFile('icomoon.js', `${moduleFile}${exportitems.substring(0, exportitems.length -1)}}`, () => {
            console.log('done');
        });
    });
};

readFiles();
