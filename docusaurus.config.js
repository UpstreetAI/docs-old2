module.exports = {
  title: "Upstreet",
  staticDirectories: ["static"],
  tagline: "Upstreet",
  url: "https://docs.upstreet.ai",
  baseUrl: "/",
  organizationName: "upstreet",
  projectName: "docs",
  favicon: "img/upstreet-white.ico",
  customFields: {},
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/customTheme.css")],
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: "Upstreet",
      logo: {
        src: "img/upstreet-lg.jpg",
        href: "https://docs.upstreet.ai/",
        target: "_self",
      },
      items: [
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/HxdjCDyq58",
            },
            {
              label: "Github",
              // A full-page navigation, used for navigating outside of the website.
              href: "https://github.com/upstreet",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UC1OkR65VUqZRM9qQPU4nZPQ",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/upstreetai",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Upstreet`,
    },
  },
};
