const fs = require('fs');
const path = require("path");
const cssParse = require('css-parse');
const htmlParser = require('node-html-parser');
const jsParser = require('acorn').Parser;

function parseCSS(css) {
    try {
        return cssParse(css);
      } catch (err) {
        return null;
      }
}

function parseJS(js) {
    try {
        return jsParser.parse(js, {ecmaVersion: 2020});
      } catch (err) {
        return null;
      }
}

function parseHTML(html) {
    try {
        return null === html ? null : htmlParser.parse(html);
      } catch (err) {
        return null;
      }
}

function readFile(filePath) {
    try {
        return fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
      } catch (err) {
        return null;
      }
}

module.exports.parseCSS = parseCSS;
module.exports.parseJS = parseJS;
module.exports.parseHTML = parseHTML;
module.exports.readFile = readFile;
