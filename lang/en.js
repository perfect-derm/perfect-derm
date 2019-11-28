var fileName = 'en';
// var fileName = module.id().slice(module.id().lastIndexOf(path.sep)+1, module.id().length -3);
var importLangData = require('./index');

export default (context) => {
  return importLangData.default(context, fileName) ;
}