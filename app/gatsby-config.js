module.exports = {
  siteMetadata: {
    title: `StarRez Pizza: 2019`,
    description: ``,
    author: `@starrez`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2f3640`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'zrnf9j0k',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: "skmAOwWFmOJp4tOgXOQA6ORxewtV255WyXz6k3TW9iaeqiThEqtFAzwgPbN3Xd3SN41Xbt439q57wK4su9aitXM8f4WAFaFgzUdESAXnO0ahMUtHwNL3xBkmBTE8FNRPx8EF3LGFJQYi4nswZoKNIGI93Fn2u7cbLry02e1w7KuSBYNrS3H2",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
