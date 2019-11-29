export default (context, language) => {
    var allDataFiles = require.context('../content', true, /^(.*\.(json$))[^.]*$/im);
    let regex = new RegExp('(' + language + '|xx__)(.*)');

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
};