
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');
const { createExportLine, readFromSvgContent,
    findViewBox, exportableName, writeIconModule } = require('./utils');


/*
1. download https://github.com/Keyamoon/IcoMoon-Free/archive/master.zip
2. extract
3. run this script
*/

const TRANSLATE = {
    try: 'tryIcon',
    '500px': 'fiveHundredPX',
    'switch': 'switchIcon'
}

const workingFolder = './';
const folderName = path.join(workingFolder, 'IcoMoon-Free-master');
const SVGFolder = path.join(folderName, 'SVG');

const outFolder = path.join('..', 'src', 'icomoon');

const extractName = file => {
    const idxDash = file.indexOf('-') + 1;
    const idxSvg = file.indexOf('.svg');
    return file.substring(idxDash, idxSvg);
};


const generateFiles = () => {
    const exportsArr = [];
    const files = fs.readdirSync(SVGFolder, 'UTF-8');
    const parsedFiles = files.map( f => {
        const content = fs.readFileSync(path.join(SVGFolder,f), { encoding: 'UTF-8' });
        // const $ = cheerio.load(content, { xmlMode: true, normalizeWhiteSpace: true });
        // const children = [];
        // const $svg = $('svg');

        // $svg.children().each( (index, $el) => {
        //     const name = $el.name;
        //     //const attributes =
            
        //     const attribs = Object.keys($el.attribs).reduce( (obj, key) => {
        //         obj[key] = $el.attribs[key];
        //         return obj;
        //     }, {});            
        //     children.push({ name, attribs });
        // });
        const { viewBox, children } = readFromSvgContent(content);
        return { name: f, children, viewBox };   
    });
    //write it
    const exportLines = parsedFiles.map( parsed => {
        const exportedName = exportableName(extractName(parsed.name));
        const safeExportName = TRANSLATE[exportedName] ? TRANSLATE[exportedName] : exportedName;

        const { viewBox, children } = parsed;
        //const exportedObject = JSON.stringify({ viewBox, children });
        const exportLine = createExportLine(safeExportName, viewBox, children); //`export const ${safeExportName} = ${exportedObject};`;
        
        fs.writeFileSync(path.join(outFolder, `${safeExportName}.js`), exportLine);

        return exportLine;
    });
    writeIconModule(exportLines, path.join(outFolder, 'index.js'));
};


generateFiles();



// const readFile = file => {
//     const contents = fs.readFileSync(`./SVG/${file}`, { encoding: 'UTF-8' });
//     const expr = /<path fill="#000000" d="(.*?)"></gm;

//     let matches = null;

//     const results = [];

//     const name = exportableName(extractName(file));

//     while ( (matches = expr.exec(contents)) !== null ) {
//         results.push(`${matches[1]}`);
//     }
//     return { name: TRANSLATE[name] ? TRANSLATE[name]: name, paths: results, viewBox: findViewBox(contents) };

// };



// const generateFile = () => {
//     const exportsArr = [];
//     fs.readdir('./SVG', (err, files) => {
//         files.forEach( file => {
//             exportsArr.push(readFile(file));
//         });
        
//         writeIconModule(exportsArr, '../src/icomoon.js');
//     });
// };

// generateFile();
