var path = require('path');
var fileName = module.id.slice(module.id.lastIndexOf(path.sep)+1, module.id.length -3);
var allDataFiles = require.context("../content", true, /^(.*\.(json$))[^.]*$/im);
let regex = new RegExp('(' + fileName + '__)(.*)');

export default (context) => {
    return new Promise(function (resolve) {      
      let data = {};

      allDataFiles.keys().forEach(function(key){
        let noPrefixData = {};
        let fileData = allDataFiles(key);
        

        Object.keys(fileData).forEach(function(key) {
          let newKey;
          if(newKey = key.match(regex)){
            noPrefixData[newKey[2]] = fileData[key];
          }
        });

        data = {...data, ...noPrefixData};
      });

      resolve(data);
    });
}