export default (context) => {
    return new Promise(function (resolve) {
      resolve({
        homepage: 'Home-de',
        about_us: 'About us',
        services: 'Offer',
        your_problem: 'Your problem',
        media: 'Media',
        price_list: 'Price list',
        contact: 'Contact'
      })
    });
  }