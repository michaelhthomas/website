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

/** @type import('@tyankatsu0105/types-gridsome').Server */
module.exports = function (api) {
  api.loadSource(({ addMetadata }) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('socials', loadData('socials'));
    addMetadata('education', loadData('education'));
    addMetadata('experience', loadData('experience'));
    addMetadata('shareServices', loadData('share_services'));
  });

  api.chainWebpack((webpack) => {
    webpack.plugin('purge-icons').use(
      new PurgeIcons({
        included: []
      })
    );
  });

  api.loadSource(({ addSchemaTypes, schema }) => {
    addSchemaTypes([
      schema.createObjectType({
        name: 'Post',
        interfaces: ['Node'],
        fields: {
          title: 'String',
          slug: 'String',
          description: 'String',
          featured: 'Boolean',
          date_published: 'Date',
          date_updated: 'Date',
          cover_image: 'Image',
          cover_image_caption: 'String',
          tags: '[Tag]'
        }
      })
    ]);
  });
};
