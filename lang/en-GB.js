export default (context) => {
    return new Promise(function (resolve) {
      resolve({
        homepage: 'Homepage',
        about_us: 'About us',
        services: 'Services',
        your_problem: 'Your problem',
        media: 'Media',
        price_list: 'Price list',
        contact: 'Contact'
      })
    });
  }