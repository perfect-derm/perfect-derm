// let indexPageNoPrefix = require('../content/index/en.json');

export default (context) => {
    return new Promise(function (resolve) {
    
      // let indexPage = {};

      // Object.keys(indexPageNoPrefix).forEach(key => {
      //     indexPage = { ...indexPage, ['index_' + key]: indexPageNoPrefix[key] }
      // });

      const header = {
        homepage: 'Homepage',
        about_us: 'About us',
        services: 'Services',
        issue: 'Your issue',
        media: 'Media',
        tariff: 'Prices',
        contact: 'Contact'
      };

      resolve({
        ...header, 
        // ...indexPage
      })
    });
}