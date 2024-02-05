# Grats + Relay Example App

This is an example showing a minimal app using [Grats](https://grats.capt.dev) and [Relay](https://relay.dev/) together.

## Getting Started

```sh
pnpm install
pnpm run start
```

The `start` script will run both the client and server in watch mode, including both Grats and Relay compilers.

It should also open a browser window to `http://localhost:1234` where you can see the app running.

To see the GraphiQL Playground, go to `http://localhost:4000/graphql` in your browser.

_Note:_ You may need to refresh the browser since the server may not be ready when the browser opens.

## Packages Used

- **Client**
  - [React](https://reactjs.org/) - UI Framework
  - [Relay](https://relay.dev/) - GraphQL Client
- **Server**
  - [Grats](https://grats.capt.dev) - GraphQL Schema
  - [Yoga](https://the-guild.dev/graphql/yoga-server) - GraphQL Server
- **Dev Setup**
  - [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
  - [Parcel](https://parceljs.org/) - Bundler for client code
  - [ts-node](https://typestrong.org/ts-node/) - Run TypeScript files directly
  - [Prettier](https://prettier.io/) - Auto-format code
  - [concurrently](https://github.com/open-cli-tools/concurrently) - Run multiple watch commands concurrently

## The Setup

There are some things that we've done in this example to demonstrate Relay and Grats working well together.

- A combined watch command which runs all relevant tools and processes in watch mode at the same time:
  - Relay compiler
  - Grats compiler
  - Parcel bundler
  - Node server
- Added `extensions.json` and `settings.json` in `.vscode/` to enable the Relay VSCode extension configure it to use Grats's "locate" command for click-to-definition.
- Ignored generated files in `.prettierignore`
