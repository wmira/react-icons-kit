
const path = require('path');
const fs = require('fs');
const svgfont2js = require('svgfont2js'); //you need this patch on line 42 if (!g.$.d || !g.$.unicode) {

const svgFont = path.join('..', 'node_modules', 'font-awesome','fonts', 'fontawesome-webfont.svg' );
const lessVariables = path.join('..', 'node_modules', 'font-awesome','less', 'variables.less' );

const glyphs = svgfont2js(fs.readFileSync(svgFont, 'utf8'));
const { exportableName, writeIconModule, createExportLine } = require('./utils');

const TRANSLATE = {
    'try': 'tryIcon',
    '500px': 'fiveHundredPX',
    'switch': 'switchIcon'
};


const outFolder = path.join('..', 'src', 'fa');

//from https://github.com/riobard/font-awesome-svg/blob/master/extract.js#L11
const loadAliases = (less) => {
    const re = /@fa-var-([a-z0-9-]+)\s*:\s*"\\([0-9a-f]+)";/g;
    const m = {}; // unicode hex -> [alias0, alias1, alias2, ...]

    let match;
    while (null !== (match = re.exec(less))) {
        const alias = match[1];
        const unicode_hex = match[2];

        if (!(unicode_hex in m)) {
            m[unicode_hex] = [];
        }
        m[unicode_hex].push(alias);
    }

    return m;
};


const generateFiles = () => {

    const aliases = loadAliases(fs.readFileSync(lessVariables, 'utf8'));

    const exportLines = glyphs.reduce( (result, glyph) => {
        const aliassesArr = aliases[glyph.unicode_hex];

        const tmpExportLines = aliassesArr.map(exportableName).map( name => {
            const viewBox = `0 0 ${glyph.width} ${glyph.height}`;
            const children = [ { name: 'path', attribs: { d: glyph.path } } ];
            const safeExportName = TRANSLATE[name] ? TRANSLATE[name] : name;

            const exportLine = createExportLine(safeExportName, viewBox, children);

            fs.writeFileSync(path.join(outFolder, `${safeExportName}.js`), exportLine);

            return exportLine;
        });

        return result.concat(tmpExportLines);


    }, []);

    writeIconModule(exportLines, path.join(outFolder, 'index.js'));

};

generateFiles();
