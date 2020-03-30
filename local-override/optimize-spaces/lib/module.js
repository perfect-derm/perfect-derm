const consola = require('consola');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const logger = consola.withScope('optimize-spaces');

module.exports = async function module(moduleOptions) {
  const options = Object.assign({}, moduleOptions);

  const hook = () => {
    logger.start('Optimizing spaces...');
    _optimizeSpaces(this, options);
  };

  this.nuxt.hook('generate:distCopied', hook);
};

const _optimizeSpaces = (context) => {
  const generateDir = path.resolve(context.options.generate.dir);

  const files = glob.sync(`${generateDir}/**/*.js`);
  files.forEach(file => {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        logger.error('Spaces not optimized');
        return false;
      }

      var result = data.replace(/-- >/g,'-->');
      fs.writeFile(file, result, 'utf8', function(err) {
          if (err) {
            logger.error('Spaces not optimized');
             return false;
          }
      });
    });
  });

  logger.success('Spaces optimized');
};

module.exports.meta = require('../package.json');
