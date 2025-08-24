# volar-default-behavior

<img width="2168" height="1403" alt="image" src="https://github.com/user-attachments/assets/4d848b4b-ad0e-435d-99ae-a06941bbda8d" />

This is a brand new app in Vue 3 + Vite.

What this showcases is the fact that Volar 3.0.6 (at the time of creation of this repo) doesn't provide a Quick Fix entry for importing the missing components while editing the `<template>` tag. 

I added a linting "guard" to show me what components are missing, but the only workaround is to either: 

* Do the imports manually (TS works fine on the `<script setup>` tag) with path completion and module suggestion intellisense while typing.
  
  <img width="830" height="585" alt="image" src="https://github.com/user-attachments/assets/d96e3ec8-5547-4020-9853-13a386112143" />

* OR use something like https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file (not my cup of tea, I want to see where my deps are coming from. I could probably change my mind on the subject in the future, but not my stance right now).


# Original Readme:

<details>
  This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
</details>
