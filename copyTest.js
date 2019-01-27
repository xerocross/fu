var fs = require('fs');

fs.copyFile('./src/functional-utility.test.ts', './fu.test.ts', (err) => {
    if (err) throw err;
    fs.readFile('./src/functional-utility.test.ts', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(/.\/functional-utility/g, './dist/fu.closed.js');
      
        fs.writeFile("./fu.test.ts", result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
});