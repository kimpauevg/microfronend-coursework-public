FROM nginx:stable-alpine

# ADD Custom Config
ADD nginx/nginx.conf /etc/nginx/nginx.conf
ADD nginx/default.conf /etc/nginx/conf.d/default.conf

# Make Directory - Workspace
RUN mkdir -p /var/www/microfrontend-coursework/server-side-includes

# Copy files
COPY display /var/www/microfrontend-coursework/server-side-includes/display
COPY main /var/www/microfrontend-coursework/server-side-includes/main

# ADD and set Group
RUN addgroup -g 1000 node && adduser -G node -g node -s /bin/sh -D node

# Set Group to Workspace
RUN chown node:node /var/www/microfrontend-coursework/server-side-includes