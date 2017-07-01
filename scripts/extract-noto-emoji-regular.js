const path = require('path');
const { generateFromSvgFiles } = require('./utils');

// https://github.com/rohanchandra/noto-emoji-regular-to-svg/releases/download/v1.0/emoji-svg.zip
const workingFolder = './noto_emoji_regular';
const folderName = path.join(workingFolder);
const outFolder = path.join('..', 'src', 'noto_emoji_regular');

generateFromSvgFiles( folderName, outFolder );
