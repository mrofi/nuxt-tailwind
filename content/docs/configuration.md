---
title: Configuration
description: See what you can change in it
footer:
  links:
    - Next, how to setup sidebar menus: /docs/siderbar-menus
---

# Configuration

- [Nuxt](#nuxt)
- [Vue Tailwind Components](#vue-tailwind-components)
- [Other Packages](#other-packages)

<a name="nuxt"></a>
## Nuxt
Your nuxt configuration file `nuxt.config.js` is available in root folder to modify.
See the [complete documention](https://nuxtjs.org/guides/directory-structure/nuxt-config) in nuxt website.
Here we will cover some configurations that specific used by this package.

- **appName**
You can change this as same as your project name, ie :
```Javascript [nuxt.config.js]
const appName = 'Acme Dashboard'
```
But you can override it using environment variable. For instance, in development you can add `APP_NAME` enviroment variable before run script, like this :
```
APP_NAME='My Dev Title' npm run dev
```
- **appDescription**
This will contain you default meta description
```Javascript [nuxt.config.js]
const appDescription = 'A Simple Dashboard Admin powered by Nuxt.JS and Tailwind CSS'
```
You can also use `APP_DESCRIPTION` to override it.

- \[Optional\]**generate**
You can see that in `generate` line, there are some codes that contain word `docs`. Yes, it used to generate documentation pages (like this one). You can delete or change those codes with your version. It's totally up to you.

- **publicRuntimeConfig**
Based on [this approach](https://nuxtjs.org/guide/runtime-config#runtime-config-213), you can add runtime config in `publicRuntimeConfig`.
But please note, that you can not delete these codes :
```Javascript [nuxt.config.js]
// please don't edit
appName: process.env.APP_NAME || appName,
routerBase: process.env.ROUTER_BASE || routerBase,
// end of don't edit
```

<a name="vue-tailwind-components"></a>
## Vue Tailwind Components
This package use [Vue Tailwind Component](https://www.vue-tailwind.com/)
It's a set of lightview and fully customizable Vue Components optimized for TailwindCss.
To override this theme, update files inside folder `resources/t-component-theme`.
Check [it's documention](https://www.vue-tailwind.com/docs/theming) for more detailed info.

<a name="other-packages"></a>
## Other Packages
Please read specific documentation for each packages you want to configure.






