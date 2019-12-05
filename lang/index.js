const path = require('path');
const delimeter = "__";
const keyPrefix = '$uniqueKeyIndex';
const keySlugPrefix = 'slug';

let collectionMatrix = [];

export default (context, language) => {
    var allDataFiles = require.context('../content', true, /^(.*\.(json$))[^.]*$/im);
    let regex = new RegExp('^(' + language + delimeter + '|xx' + delimeter + ')(.*)$');
    let regexSlug = new RegExp('^(' + language + delimeter + keySlugPrefix + '|xx' + delimeter + keySlugPrefix + ')$');

    return new Promise(function (resolve) {    
        let data = {};

        allDataFiles.keys().forEach(function(filePath){
          let noPrefix = {};
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

            noPrefix[keyPrefix + delimeter + filePathProcessed[0]] = entryInCollectionAndLanguage.length.toString();

          } else {
            languagePrefixByPathAndFilename = languagePrefixByPathAndFilename + delimeter + fileName.toString();
          }

          Object.keys(fileData).forEach(function(key) {
            let newKey;
            if(newKey = key.match(regex)){
              if(!newKey[2].includes(languagePrefixByPathAndFilename)) {

                noPrefix[(languagePrefixByPathAndFilename.toString() + delimeter + newKey[2].toString()).toString()] = fileData[key];
              } else {
                noPrefix[newKey[2]] = fileData[key];
              }

              noPrefix[newKey[2]] = fileData[key];
            }

            //For virtual patch additionall entry - check for one, use it to fill other
            
            let languageDetected;
            if(languageDetected = key.match(regexSlug)){
              Object.keys(fileData).forEach(function(keySecond) {
                // _collection __ idetifier __ dataOfEveryFieldInSameFile
                noPrefix[filePathProcessed[0].concat(delimeter,fileData[key],delimeter,'$linkOutOfSync',delimeter,language)] = 'ok';
                //Load one lang per one slu
                if(keySecond.split(delimeter)[0] === language || keySecond.split(delimeter)[0] === 'xx'){
                  noPrefix[filePathProcessed[0].concat(delimeter,fileData[key],delimeter,keySecond.split(delimeter)[1])] = fileData[keySecond];
                }
              });   
            }

          });
  
          data = {...data, ...noPrefix};
        });

        resolve(data);
      });
};