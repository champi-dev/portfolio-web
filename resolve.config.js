const path = require('path')

const resolve = {
  alias: {
    // Assets folder
    assets: path.resolve(__dirname, 'src/assets/'),

    // Router
    router$: path.resolve(__dirname, 'src/router.js'),

    // Store
    store$: path.resolve(__dirname, 'src/store.js'),

    // Views
    Home$: path.resolve(__dirname, 'src/views/Home.vue'),
    Contact$: path.resolve(__dirname, 'src/views/Contact.vue'),
    Work$: path.resolve(__dirname, 'src/views/Work.vue'),

    // Components
    Toolbar$: path.resolve(__dirname, 'src/components/Toolbar.vue')
  }
}

module.exports = resolve
