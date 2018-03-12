
function printJson(fileName, value) {
    const path = require('path');
    const fs = require('fs');
    const util = require('util');
    // issue: JSON.stringify(/\.css/) print an empty object
    // https://stackoverflow.com/a/12075970
    // because there's no canonical representation for a RegExp object in JSON. Thus, it's just an empty object.


    // solution 1: use util.inspect
    //const result=util.inspect(config, { showHidden: false, depth: null });

    // solution 2: 
    RegExp.prototype.toJSON = RegExp.prototype.toString;
    value.plugins.forEach(p => {
        p.__type = p.constructor.name;
    });
    fs.writeFile(path.join(__dirname, fileName), JSON.stringify(value), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file " + fileName + "  has been saved!");
    });
}

module.exports = printJson;