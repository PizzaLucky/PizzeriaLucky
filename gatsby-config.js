require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pizzeria Lucky Petržalka - Objednajte si pizzu online`,
    description: `Navštívte nás alebo si objednajte najlepšiu pizzu v Petržalke. Pozrite si naše obedové menu a jedálny lístok.`,
    author: `pizza lucky`,
    siteUrl: `https://pizzerialucky.sk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159174866-1",
        head: true
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1FfMKhOm_qI7Av3Vhm4FO6tIetn2HjoLDrPTleLyuDec",
        spreadsheetName: "",
        typePrefix: "GoogleSpreadsheet",
        credentials: JSON.parse(`${process.env.GATSBY_CREDENTIALS}`)
      }
    },

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
        name: `Pizzeria Lucky`,
        short_name: `Pizza Lucky`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/logo-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}