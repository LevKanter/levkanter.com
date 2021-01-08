module.exports = {
  siteMetadata: {
    title: `Lev Kanter`,
    siteUrl: `https://levkanter.com`,
    description: `Lev Kanter’s personal website`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Archivo`,
              variants: [`400`, `400i`, `700`, `700i`]
            },
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `@danbruegge/gatsby-plugin-stylelint`,
      options: {
        files: `${__dirname}/src/**/*.scss`,
        syntax: 'scss',
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lev Kanter`,
        short_name: `Lev Kanter`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
