module.exports = [
  {
    path: '/',
    caption: 'Dashboard',
    icon: 'feather/pie-chart',
    exact: true,
  },
  {
    path: '/ui-elements',
    caption: 'UI Elements',
    icon: 'feather/box',
  },
  {
    path: '/tables',
    caption: 'Tables',
    icon: 'feather/columns',
  },
  {
    path: '/forms',
    caption: 'Forms',
    icon: 'feather/edit',
  },
  {
    caption: 'Menu',
    icon: 'feather/activity',
    children: [
      {
        path: '/submenu',
        caption: 'Sub Menu',
      },
    ],
  },
  {
    caption: 'Documentation',
    icon: 'feather/book',
    children: [
      {
        path: '/docs',
        caption: 'Introduction',
        exact: true,
      },
      {
        path: '/docs/installation',
        caption: 'Getting Started',
      },
      {
        path: '/docs/configuration',
        caption: 'Configuration',
      },
    ],
  },
]
