FROM node:18-alpine

WORKDIR /home/node

USER node

COPY --chown=node:node package*.json tsconfig*.json .babelrc webpack*.js ./
RUN npm ci

COPY --chown=node:node personal.json ./
COPY --chown=node:node src src/
COPY --chown=node:node server server/
COPY --chown=node:node static static/

ENV NODE_ENV production

RUN npm run build

CMD ["node", "./build-server/index.js"]
