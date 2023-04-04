import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '042'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '994'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a44'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ad8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a05'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e2c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ecd'),
    exact: true
  },
  {
    path: '/BKP_index',
    component: ComponentCreator('/BKP_index', 'a91'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3ea'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dd6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Automation quickstart/amazon-sign-in',
        component: ComponentCreator('/Automation quickstart/amazon-sign-in', 'c32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Automation quickstart/GitHub-Actions',
        component: ComponentCreator('/Automation quickstart/GitHub-Actions', 'ad5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Automation quickstart/Integrate-with-BrowserStack',
        component: ComponentCreator('/Automation quickstart/Integrate-with-BrowserStack', '5b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/selenium-automation',
        component: ComponentCreator('/category/selenium-automation', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
