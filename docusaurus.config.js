// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sethtek Sandbox',
  tagline: 'A highly modifyable multiplayer sandbox game.',
  favicon: 'img/sbxfavicon.ico',

  // Set the production url of your site here
  url: 'https://sandbox.sethtek.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sethtek', // Usually your GitHub org/user name.
  projectName: 'Sethtek-Sandbox-Website', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'deploy',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sethtek Sandbox',
        logo: {
          alt: 'Sethtek Sandbox Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      /*footer: {
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'img/meta_oss_logo.png',
          href: 'https://opensource.fb.com',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      */
      footer: {
        style: "light",
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/qYF9QeYShZ',
              },
              {
                label: 'Steam',
                href: 'https://store.steampowered.com/app/1065990/Sethtek_Driving_Simulator/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Sethtek.net',
                href: 'https://sethtek.net',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sethtek Dev. Built with the amazing Docusaurus!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
