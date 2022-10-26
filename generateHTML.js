// node fs to write to html 
const fs = require('fs');

// write index.html to the dist folder
function writePage(html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err) { // prints out error if generation fails
            throw err;
        }
        console.log("index.html successfully generated!");
        copyCSS();
    })
}

// copy style.css file to apply to html
const copyCSS = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) { // prints out error if generation fails
            throw err;
        }
        console.log('style.css successfully copied!')
    });
}

module.exports = writePage, copyCSS
