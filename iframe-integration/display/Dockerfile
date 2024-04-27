FROM node:alpine

WORKDIR /var/www/microfrontend-coursework/iframe-integration/display

COPY public public
COPY src src
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .env.example .env.local

RUN npm install

CMD ["npm", "run", "build"]