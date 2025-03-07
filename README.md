# Admin Dashboard Application

This project is to build an application for admin dashboard.

## Prerequisites

- [Node.js >= 18](https://nodejs.org)
- [pnpm >= 8.x](https://pnpm.io)
- [NextJS >= 15](https://nextjs.org/)
- [ReactJS >= 19](https://react.dev)
- [Zustand >= 5.x](https://github.com/pmndrs/zustand)
- [React Hook Form >= 7.x](https://react-hook-form.com/)
- [Zod >= 3.x](https://zod.dev)

## Developer tools

- [husky](https://www.npmjs.com/package/husky)
- [eslint](https://eslint.org/)
- [commitlint](https://commitlint.js.org/#/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React test library](https://testing-library.com/docs/react-testing-library/intro/)
- [Axe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1)

## Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next.js App (App Router)
│   ├── assets                      # Asset folder
│   ├── components                  # React components
│   ├── constants                   # App constants
│   ├── hooks                       # Hooks folder
│   ├── interfaces                  # Interfaces folder
│   ├── mocks                       # Mocks folder
│   ├── services                    # Services folder
│   ├── styles                      # Style folder
│   ├── themes                      # Custom themes
│   ├── utils                       # Code Reusability
├── .eslintrc.json                  # ESLint configuration
├── .lintstagedrc                   # Lint-stage
├── .prettierrc                     # Prettier configuration
├── jest.config.ts                  # Jest configuration
├── next.config.mjs                 # Next.js configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # Post CSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## How to run

- Please add `.env` into root of project source code, refer `.env.sample`.

| Command            | Action                                     | Port                  |
| :----------------- | :----------------------------------------- | :-------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                   |
| `$ pnpm start`     | Starts the application in production mode. | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode            | http://localhost:3000 |
| `$ pnpm test`      | Run Unit Test                              | N/A                   |