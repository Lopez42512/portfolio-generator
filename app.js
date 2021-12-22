const fs = require('fs');
const generatePage = require('./src/page-template')

const profileDataArgs = process.argv.slice(2);

const [uName, github] = profileDataArgs;
fs.writeFile('index.html', generatePage(uName, github), err => {
    if(err) throw err;
    console.log('Page created');
})
