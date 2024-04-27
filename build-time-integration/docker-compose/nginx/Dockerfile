FROM nginx:stable-alpine

# ADD Custom Config
ADD nginx.conf /etc/nginx/nginx.conf
ADD default.conf /etc/nginx/conf.d/default.conf

# Make Directory - Workspace
RUN mkdir -p /var/www/microfrontend-coursework/web-component-integration

# ADD and set Group
RUN addgroup -g 1000 node && adduser -G node -g node -s /bin/sh -D node

# Set Group to Workspace
RUN chown node:node /var/www/microfrontend-coursework/web-component-integration