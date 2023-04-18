// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { PurgeIcons } = require('purge-icons-webpack-plugin');

const yaml = require('js-yaml');
const fs = require('fs');

function loadData(name) {
  try {
    return yaml.load(fs.readFileSync(`./content/data/${name}.yaml`, 'utf8'));
  } catch (e) {
    console.error(e);
  }
}

module.exports = function (api) {
  api.loadSource(({ addMetadata, addCollection }) => {
    // eslint-disable-line
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('socials', loadData('socials'));
    addMetadata('education', loadData('education'));
    addMetadata('experience', loadData('experience'));
    addMetadata('shareServices', loadData('share_services'));
  });

  // A nifty little autoloader for Vue components
  // TODO: we should make a plugin out of this
  api.chainWebpack((webpack) => {
    webpack.plugin('vue-components').use(
      require('unplugin-vue-components/webpack')({
        directoryAsNamespace: true
      })
    );

    webpack.plugin('purge-icons').use(
      new PurgeIcons({
        included: []
      })
    );
  });
};
