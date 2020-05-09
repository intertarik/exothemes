module.exports = {
  base: "/",
  title: "Exothemes",
  description: "This is a description for eExoticThemes.com",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "Templates",
        link: "https://themeforest.net/user/exoticthemes/portfolio",
      },
    ],
    // sidebar: ["/", "/guide/", "/guide/fils/", "/guide/integration/"],
    sidebar: [
      {
        title: "Home", // required
        path: "/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
      },
      {
        title: "Introduction", // required
        path: "/guide/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: ["/guide/fils/"],
      },
      {
        title: "Integration", // required
        // path: "/guide/integration/CampainMonitor", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          "/guide/integration/CampainMonitor",
          "/guide/integration/Mailchimp",
          "/guide/integration/Stampready",
          "/guide/integration/Mailster",
          "/guide/integration/HTML",
        ],
      },
    ],
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "assets",
      },
    },
  },
};
