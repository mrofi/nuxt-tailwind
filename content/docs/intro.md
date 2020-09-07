---
title: Introduction
description: About This Nuxt Tailwind Admin Dashboard
footer:
  links:
    - Let's start: /docs/installation
---

# Meet Nuxt Tailwind : A Simple Admin Dashboard

- [Introduction](#introduction)
- [Main Dependencies](#main-dependencies)
- [Main Configuration](#main-configuration)

<a name="introduction"></a>
## Introduction
This is just a simple dashboard template to start your simple application.
Originally created for self using only, but if you interested to use or contribute in this project, I am so appreciating.

<a name="main-dependencies"></a>
## Main Dependencies
This uses some libraries that may be you have already knew, like :
- @tailwindcss/custom-forms
- @tailwindcss/typography
- vue-tailwind
- remarkable

<a name="main-configuration"></a>
## Main Configuration
To be noted, currently this package only supports `spa` mode and `static` target.
``` [nuxt.config.js]

mode: 'spa',
target: 'static',
```
If you use `universal` mode instead of `spa`, it will raise error in some components.
See workaround in each component documentation page to follow.






