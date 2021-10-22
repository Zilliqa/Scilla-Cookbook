// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scilla Cookbook',
  tagline: 'For the scilla development community, by the scilla development community',
  url: 'https://scilla-by-example.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/site/favicon.ico',
  organizationName: 'Zilliqa', // Usually your GitHub org/user name.
  projectName: 'Scilla-by-Example', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Community Scilla Cookbook',
        logo: {
          alt: 'Community Scilla Cookbook',
          src: 'img/site/scilla-200.png',
        },
        items: [
          {
            href: 'https://discord.gg/nKznfCaZxy',
            label: 'Discord',
            position: 'left',
          },
          {
            href: 'https://t.me/ZilliqaDevs',
            label: 'Telegram',
            position: 'left',
          },
          {
            href: 'https://scilla.readthedocs.io',
            label: 'Scilla Docs',
            position: 'left',
          },
          {
            href: 'https://github.com/Zilliqa/',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://github.com/Zilliqa/Scilla-by-Example',
            label: 'Community Cookbook Github',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
