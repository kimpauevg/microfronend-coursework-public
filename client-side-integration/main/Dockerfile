FROM node:alpine

WORKDIR /var/www/microfrontend-coursework/client-side-integration/main

COPY public public
COPY src src
COPY .env.example .env
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY webpack.config.js webpack.config.js

RUN npm install

CMD ["npm", "run", "build"]