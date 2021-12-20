// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => { // eslint-disable-line
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
  })
  api.loadSource(async store => {
    store.addMetadata('socials', [
      {
        name: "github",
        icon: "mdi:github",
        link: 'https://github.com/michaelhthomas'
      },
      {
        name: "reddit",
        icon: "mdi:reddit",
        link: 'https://reddit.com/u/linuxoveruser'
      }
    ])
  })

  // A nifty little autoloader for Vue components
  // TODO: we should make a plugin out of this
  api.chainWebpack((webpack) => {
    webpack.plugin('vue-components').use(require('unplugin-vue-components/webpack')({
      directoryAsNamespace: true,
    }))
    
  })
}
