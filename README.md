<h1 align="center">🌐 Sapper with TypeScript and GraphQL project base</h1>

## ❓ What is this?

This is an extension to the [official Sapper Rollup template](https://github.com/sveltejs/sapper-template-rollup) with TypeScript preprocessing and a GraphQL server through TypeGraphQL (Apollo Server).

If you're looking for something with much, much more bundled in, check out [my opinionated project base](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template).

- [Sapper for Svelte](https://sapper.svelte.dev/)
  - [Official VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [TypeScript](https://www.typescriptlang.org/)
  - [TypeGraphQL](https://typegraphql.com/)
  - Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
- [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) best practices set up
  - [`manifest.json`](https://developer.mozilla.org/en-US/docs/Web/Manifest)'s most important fields filled out
  - High [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit score
- [ESLint](https://eslint.org/)
  - [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - `eslint:fix` package script

## 🧭 Project Status
Sapper is going to change.

Until `create-svelte` and `@sveltejs/kit` are ready, **this project base will continue to be maintained**. 

But, once we move on, I won't be creating project bases (templates / boilerplates) anymore. Instead, you'll apply presets onto the default template like this:

```sh
npm init svelte@next  # Use the official template from create-svelte
npx use-preset babichjacob/svelte-add-typescript  # Apply the changes to set up TypeScript for create-svelte
npx use-preset babichjacob/svelte-add-typegraphql  # Apply the changes to set up TypeGraphQL for create-svelte as long as TypeScript is already set up
# Remember, the above are hypothetical commands and the real ones might look and work different
```

This should have the same result as cloning a project base, but there are more reasons to reach for this solution:
1. Reduced "heartbeat commits" (like upgrading packages to their latest versions) to prove the project still works
2. Allows picking parts instead of taking *all or nothing* from a project base
3. Focus on higher quality "atomic" presets. For example, there might be a `svelte-add-pwa` preset that adds a service worker and `manifest.json` with example icon files like we have now
4. `create-svelte` is young and probably going to change often, so only affected presets will need to be updated
5. Reduced duplication: I won't need to copy over changes from one project base to another to keep them synchronized

Than there are to continue making project bases:
1. (I suspect) preset logic is complex
2. I suspect presets are harder to test and can have harder to predict errors

So this is what's going to happen. 

**Read on to use this project base today:**

## 📋 Copy

Choose either to clone or fork depending on your preference.

### 🐑 Clone

```sh
git clone https://github.com/babichjacob/sapper-typescript-graphql-template
```

### 🍴 Fork

Click the `Use this template` button on [this project's GitHub page](https://github.com/babichjacob/sapper-typescript-graphql-template).

### ⬇️ Install Dependencies

```sh
cd sapper-typescript-graphql-template
npm install  # pnpm also works
```

## 🛠 Usage

### 🧪 Development
```sh
npm run dev
```

### 🔨 Building for Production
```sh
npm run prod
```

### 📦 Exporting a Static Site
Your GraphQL server will not be exported with the rest of the site.

```sh
npm run export
```

## ⚙ Configuration

### ⚡ Web app
Many of the fields in `static/manifest.json` (`short_name`, `name`, `description`, `categories`, `theme_color`, and `background_color`) are filled with demonstrative values that won't match your site. Similarly, you've got to take new screenshots to replace the included `static/screenshot-1.png` and `static/screenshot-2.png` files. If you want, you can add [app shortcut definitions for "add to home screen" on Android](https://web.dev/app-shortcuts/#define-app-shortcuts-in-the-web-app-manifest). Once you change `theme_color`, update the `meta name="theme-color"` tag in `src/template.html` to match.

The [Apple touch icon](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), favicon, and `logo-` files (also all in the `static` directory) are created by placing the logo within a "safe area" centered circle that takes up 80% of the canvas's dimension. For instance, the constraining circle in `logo-512.png` is 512 × 0.80 = 409.6 ≈ 410 pixels wide and tall. 

### 🗺 Source maps
This project base comes with [source maps](https://blog.teamtreehouse.com/introduction-source-maps) enabled during development and disabled during production for the best compromise between performance and developer experience. You can change this behavior through the `sourcemap` variable in `rollup.config.js`.

### 🕸 Optionally removing the GraphQL server
1. Remove these lines in `src/server.ts`:
    1. ```ts
       import { createApolloServer } from "./graphql";
       ```
    2. ```ts
       const apolloServer = await createApolloServer();
       ```
    3. ```ts
       apolloServer.applyMiddleware({ app, path: graphqlPath });
       ```

2. Remove the now-useless `graphqlPath` parameter to `createSapperAndApolloServer` in `src/server.ts`. This is also a good opportunity to rename the function since there is no longer an Apollo Server

3. Delete the `src/graphql` folder

4. Uninstall the `apollo-server-express`, `bufferutil`, `class-validator`, `graphql`, `reflect-metadata`, `type-graphql`, and `utf-8-validate` packages

## 😵 Help! I have a question

[Create an issue](https://github.com/babichjacob/sapper-typescript-graphql-template/issues/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement

[Create an issue](https://github.com/babichjacob/sapper-typescript-graphql-template/issues/new) or [pull request](https://github.com/babichjacob/sapper-typescript-graphql-template/pulls) and I'll try to fix.

I'm sorry, because of my skill level and the fragility of (the combination of) some of these tools, there are likely to be problems in this project. Thank you for bringing them to my attention or fixing them for me.

## 📄 License

MIT

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
