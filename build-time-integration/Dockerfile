FROM node:alpine

WORKDIR /var/www/microfrontend-coursework/build-time-integration/apps/main

COPY apps apps
COPY libs libs
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY nx.json nx.json

RUN npm install

RUN npx nx reset

CMD ["npx", "nx", "run", "main:build"]
