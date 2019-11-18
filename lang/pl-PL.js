export default (context) => {
    return new Promise(function (resolve) {
      resolve({
        homepage: 'Strona główna',
        about_us: 'O nas',
        services: 'Oferta',
        your_problem: 'Twój problem',
        media: 'Media',
        price_list: 'Cennik',
        contact: 'Kontakt'
      })
    });
  }