module.exports = [
  {
    path: '/',
    caption: 'Dashboard',
    icon: 'feather/pie-chart',
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
      {
        path: '/submenu2',
        caption: 'Sub Menu 2',
      },
    ],
  },
]
