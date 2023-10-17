const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8');

const redirects = YAML.parse(redirectsFile);
console.log(redirects);

const templateHTML = fs.readFileSync(path.join(__dirname, 'dist', 'template.html'), 'utf-8');

for (let [slug, url] of Object.entries(redirects)) {
    console.log('Generating HTML page for ', slug, ' = ', url);
}