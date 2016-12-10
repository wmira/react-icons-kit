
const fs = require('fs');

const findViewBox = contents => {
    const viewBoxExpr = /viewBox="(.*?)"/g;
    return viewBoxExpr.exec(contents)[1];
};

const extractPaths = contents => {

    const expr = /path(.*?)d="(.*?)"/gm;
    let matches = null;

    const paths = [];

    while ( (matches = expr.exec(contents)) !== null ) {

        paths.push(`${matches[2]}`);
    }

    return paths;

};

const createOuput = (svgs, output) => {

    const moduleFile = `module.exports = {\n`;
    const exportitems = svgs.reduce( (out, exp) => {
        return `${out}\n'${exp.name}': {paths: ${JSON.stringify(exp.paths)}, viewBox: ${JSON.stringify(exp.viewBox)} },`;
    }, '');
    fs.writeFile(output, `${moduleFile}${exportitems.substring(0, exportitems.length -1)}}`, () => {
        console.log('done');
    });
};

module.exports = { findViewBox, extractPaths, createOuput };