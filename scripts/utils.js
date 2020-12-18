
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const TRANSLATE_MAP = {
    '100%': 'oneHundredPercent',
    'export': 'exportIcon',
    'new': 'newIcon',
    'switch': 'switchIcon',
    '500px': 'fiveHundredPX',
    'google+': 'googlePlus',
    'package': 'packageIcon',
    'try': 'tryIcon',
    '500px': 'fiveHundredPX',
    'switch': 'switchIcon',
    'try': 'tryIcon',
    '500px': 'fiveHundredPX',
    'switch': 'switchIcon',
    'delete': 'deleteIconic',
    'in': 'inIconic',
    '2': 'numberTwo',
    'document': 'documentIcon',
    '3dCube': 'threeDCube'

};

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
        return res + ',' + path;
    });
};

const generateExportCode = exp => {
    return `export const ${exp.name} = { viewBox: "${exp.viewBox}", paths: [${generatePathsArr(exp.paths)}] }`;
};

const createExportLine = (exportName, viewBox, children, attribs ) => {
    const exportedObject = JSON.stringify({ viewBox, children, attribs });
    return `export const ${exportName} = ${exportedObject};`;
};

const writeIconModule = (exps, filename) => {
    const exportitems = exps.reduce( (out, exp) => {
        return `${out}\n${exp}\n`;
    }, '');

    fs.writeFile(filename, exportitems, () => {
        console.log('done');
    });
};

const collectAttribs = $el => {
    return Object.keys($el.attribs).filter( attr => attr.indexOf(':') < 0 ).reduce( (obj, key) => {
        obj[key] = $el.attribs[key];
        return obj;
    }, {});
};

const walkChildren = ($, $el, childrenArr = [] ) => {

    const attribs = collectAttribs($el);
    const name = $el.name;

    const grandChildren = [];
    $($el).children().each( (index, $cel) => {
        const name = $cel.name;

        grandChildren.push({ name, attribs: collectAttribs($cel), children: walkChildren($, $cel) });
    });
    childrenArr.push({ name, attribs, children: grandChildren });
    return childrenArr;
};

const readFromSvgContent = (content) => {

    const $ = cheerio.load(content, { xmlMode: true, normalizeWhiteSpace: true });
    const children = [];

    const $svg = $('svg');

    $svg.children().each( (index, $el) => {
        walkChildren($, $el, children);
    });

    //fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    const filteredAttribs = ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']
    const attribs = filteredAttribs.reduce( (partial, key) => {
        if ( $svg[0].attribs && $svg[0].attribs[key] ) {
            return Object.assign({}, partial, { [key]: $svg[0].attribs[key] })
        }
        return partial
    }, {})
    return { children, viewBox: $svg[0].attribs['viewBox'], attribs };
};


const generateFromSvgFiles = (svgFolder, outFolder, options = {} ) => {

    const { writeExportLines = true, exportedNames = {} } = options;

    const extractName = file => {
        const idxSvg = file.indexOf('.svg');
        return file.substring(0, idxSvg);
    };

    const files = fs.readdirSync(svgFolder, 'UTF-8').filter( f => {
        return f.indexOf('.svg') >= 0;
    });
    const parsedFiles = files.map( f => {
        const content = fs.readFileSync(path.join(svgFolder,f), { encoding: 'UTF-8' });

        const { viewBox, children, attribs } = readFromSvgContent(content, f);

        return { name: exportableName(extractName(f)), children, viewBox, f, attribs };
    });
    //write it
    const exportLines = parsedFiles.map( parsed => {

        const { name } = parsed;
        if ( !exportedNames[name] ) {
            const safeExportName = TRANSLATE_MAP[name] ? TRANSLATE_MAP[name] : name;
            const { viewBox, children, attribs } = parsed;

            const exportLine = createExportLine(safeExportName, viewBox, children, attribs); //`export const ${safeExportName} = ${exportedObject};`;
            fs.writeFileSync(path.join(outFolder, `${safeExportName}.js`), exportLine);

            exportedNames[name] = name;
            return exportLine;
        }


    }).filter( f => f );
    if ( writeExportLines ) {
        writeIconModule(exportLines, path.join(outFolder, 'index.js'));
    }
    return exportLines;
};

const findAllSvgFiles = (filterName, filterDir, dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const isDir = fs.statSync(path.join(dir, file)).isDirectory();

        if (isDir) {
            filelist = findAllSvgFiles(filterName, filterDir, path.join(dir, file), filelist);
            return;
        }

        const pathToAdd = path.join(dir, file);

        if (!filterName(pathToAdd)) return;

        filelist = filelist.concat(pathToAdd);
    });
    return filelist;

};

module.exports = {
    findAllSvgFiles ,
    readFromSvgContent,
    createExportLine,
    findViewBox,
    extractPaths,
    exportableName,
    generateExportCode,
    writeIconModule,
    generateFromSvgFiles
};
