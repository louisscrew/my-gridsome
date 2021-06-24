// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://10.249.80.226:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['articles', 'books'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '872222103@qq.com',
        //   password: 'Spr123abc'
        // }
      }
    }
  ],
  // templates: {
  //   StrapiArticle: [
  //     {
  //       path: '/articles/:id',
  //       component: './src/pages/Index.vue'
  //     }
  //   ]
  // }
}
