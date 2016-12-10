
const fs = require('fs');
const svgfont2js = require('svgfont2js');
const glyphs = svgfont2js(fs.readFileSync('./fontawesome-webfont.svg', 'utf8'));

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


let moduleFile = `module.exports = {\n`;

const glypsArr = [];
const aliases = loadAliases(fs.readFileSync('variables.less', 'utf8'));

glyphs.forEach( g => {
    const aliassesArr = aliases[g.unicode_hex];
    aliassesArr.forEach( name => {
        console.log('name ', name);
        glypsArr.push({viewBox: `0 0 ${g.width} ${g.height}`, name, path: g.path });
    });
});


const exportitems = glypsArr.reduce( (out, exp) => {
    return `${out}\n'${exp.name}': {paths: [${JSON.stringify(exp.path)}], viewBox: ${JSON.stringify(exp.viewBox)} },`;
}, '');

fs.writeFile('fontawesome.js', `${moduleFile}${exportitems.substring(0, exportitems.length -1)}}`, () => {
    console.log('done');
});