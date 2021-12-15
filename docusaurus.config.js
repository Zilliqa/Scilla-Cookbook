// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Scilla Cookbook',
  tagline: 'For the scilla development community, by the scilla development community',
  url: 'https://scilla-cookbook.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/site/favicon.ico',
  organizationName: 'Zilliqa', // Usually your GitHub org/user name.
  projectName: 'Scilla-Cookbook', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Zilliqa/Scilla-Cookbook/tree/master',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
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
            href: 'https://ide.zilliqa.com/#/',
            label: 'Scilla IDE',
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
