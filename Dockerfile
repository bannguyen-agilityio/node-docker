# syntax=docker/dockerfile:1

FROM node:12.18.1 as base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

FROM base as test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as prod
RUN npm install --production
COPY . .
CMD [ "node", "server.js" ]
