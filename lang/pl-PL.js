let indexPageNoPrefix = require('../content/index/pl.json');

export default (context) => {
    return new Promise(function (resolve) {
    
      let indexPage = {};

      Object.keys(indexPageNoPrefix).forEach(key => {
          indexPage = { ...indexPage, ['index_' + key]: indexPageNoPrefix[key] }
      });

      const header = {
        homepage: 'Strona główna',
        about_us: 'O nas',
        services: 'Oferta',
        issue: 'Twój problem',
        media: 'Media',
        tariff: 'Cennik',
        contact: 'Kontakt'
      };

      resolve({
        ...header, 
        ...indexPage
      })
    });
}