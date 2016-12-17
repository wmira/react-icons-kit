
const fs = require('fs');
const cheerio = require('cheerio');

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

const createExportLine = (exportName, viewBox, children ) => {            
    const exportedObject = JSON.stringify({ viewBox, children });
    return `export const ${exportName} = ${exportedObject};`;        
}

const writeIconModule = (exps, filename) => {
    const exportitems = exps.reduce( (out, exp) => {        
        return `${out}\n${exp}\n`;
    }, '');

    fs.writeFile(filename, exportitems, () => {
        console.log('done');
    });
}

const readFromSvgContent = (content) => {
    
    const $ = cheerio.load(content, { xmlMode: true, normalizeWhiteSpace: true });
    const children = [];
    const $svg = $('svg');

    $svg.children().each( (index, $el) => {
        const name = $el.name;
        //const attributes =
        
        const attribs = Object.keys($el.attribs).reduce( (obj, key) => {
            obj[key] = $el.attribs[key];
            return obj;
        }, {});            
        children.push({ name, attribs });
    });

    return { children, viewBox: $svg[0].attribs['viewBox'] };
}

module.exports = { readFromSvgContent, createExportLine, findViewBox, extractPaths, exportableName, generateExportCode, writeIconModule };