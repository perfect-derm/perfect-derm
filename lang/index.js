const path = require('path');
const delimeter = "__"
let collectionMatrix = [];

export default (context, language) => {
    var allDataFiles = require.context('../content', true, /^(.*\.(json$))[^.]*$/im);
    let regex = new RegExp('(' + language + delimeter + '|xx' + delimeter + ')(.*)');

    return new Promise(function (resolve) {    
        let data = {};
        
        allDataFiles.keys().forEach(function(filePath){
          let properPrefixEntry = {};
          let fileData = allDataFiles(filePath);
          let filePathProcessed = filePath.split(path.sep);

          if(filePathProcessed[0] === '.'){
            filePathProcessed.shift();
          }

          let fileName = filePathProcessed.pop();
          fileName = fileName.slice(0, -5);

          let languagePrefixByPathAndFilename = filePathProcessed.join(delimeter);
          
          // Unique ID by dir with _ - use number INT from 0, not key or random stuff to easy loop
          if(filePathProcessed[0][0] === '_'){
            var entryInCollectionAndLanguage =  collectionMatrix.filter(function(entry) {
              return entry.lang == language && entry.collection == filePathProcessed[0];
            });
            
            collectionMatrix.push({
              lang: language,
              collection: filePathProcessed[0],
              index: entryInCollectionAndLanguage.length
            });
            
            filePathProcessed.splice(1, 0, entryInCollectionAndLanguage.length.toString());

            languagePrefixByPathAndFilename = filePathProcessed.join(delimeter);

            properPrefixEntry['$uniqueKeyIndex' + delimeter + filePathProcessed[0]] = entryInCollectionAndLanguage.length.toString();
          } else {
            languagePrefixByPathAndFilename = languagePrefixByPathAndFilename + delimeter + fileName.toString();
          }

          Object.keys(fileData).forEach(function(key) {
            let newKey;
            if(newKey = key.match(regex)){

              if(!newKey[2].includes(languagePrefixByPathAndFilename)) {
                properPrefixEntry[(languagePrefixByPathAndFilename.toString() + delimeter + newKey[2].toString()).toString()] = fileData[key].toString();
              } else {
                properPrefixEntry[newKey[2]] = fileData[key];
              }

              properPrefixEntry[newKey[2]] = fileData[key];
            }
          });
  
          data = {...data, ...properPrefixEntry};
        });

        resolve(data);
      });
};