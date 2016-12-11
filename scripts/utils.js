
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



const generatePathsArr= (paths) => {
    return paths.map( x => {
        return `
            "${x}"
        `;
    }).reduce( (res, path) => {
        return res + "," + path
    });
}

const generateExportCode = exp => {    
    return `export const ${exp.name} = { viewBox: "${exp.viewBox}", paths: [${generatePathsArr(exp.paths)}] }`;
}

const writeIconModule = (exps, filename) => {
    const exportitems = exps.filter(exp => exp.paths.length ).reduce( (out, exp) => {
        const exportCode = generateExportCode(exp);
        return `${out}\n${exportCode};`;
    }, '');

    fs.writeFile(filename, exportitems, () => {
        console.log('done');
    });
}

module.exports = { findViewBox, extractPaths, exportableName, generateExportCode, writeIconModule };