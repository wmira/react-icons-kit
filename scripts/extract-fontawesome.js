
const fs = require('fs');
const svgfont2js = require('svgfont2js');
const glyphs = svgfont2js(fs.readFileSync('./fontawesome-webfont.svg', 'utf8'));
const { exportableName, writeIconModule } = require('./utils');

const TRANSLATE = {
    try: 'tryIcon',
    '500px': 'fiveHundredPX',
    'switch': 'switchIcon'
}
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


const generateFile = () => {
    const glypsArr = [];
    const aliases = loadAliases(fs.readFileSync('variables.less', 'utf8'));

    glyphs.forEach( g => {
        const aliassesArr = aliases[g.unicode_hex];
        aliassesArr.map(exportableName).forEach( name => {        
            glypsArr.push({viewBox: `0 0 ${g.width} ${g.height}`, name: TRANSLATE[name] ? TRANSLATE[name]: name, paths: [g.path] });
        });
    });

    writeIconModule(glypsArr, '../src/fontawesome.js');

};

generateFile();