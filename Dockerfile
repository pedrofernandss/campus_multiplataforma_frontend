FROM node:22

# Set node environment (default to production)
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Default ports
ARG PORT=19006
ENV PORT $PORT
EXPOSE 19006 19001 19002 8081 8082

# add in your own IP that was assigned by EXPO for your local machine
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.0.15"

# Install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm install --unsafe-perm -g npm@latest expo-cli@latest

# Install qemu-user-static for multi-arch support
RUN apt-get update && apt-get install -y qemu-user-static

# Add ngrok for Expo tunneling
RUN yarn add @expo/ngrok

# Install dependencies (Python, g++, make, curl, bash)
RUN apt-get update && apt-get install -y \
    g++ \
    make \
    curl \
    bash \
    && apt-get clean && rm -rf /var/lib/apt/lists/*



# Change permissions for /opt/my-app
RUN mkdir /opt/my-app && chown root:root /opt/my-app
WORKDIR /opt/my-app
ENV PATH /opt/my-app/.bin:$PATH
USER root

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN yarn install

WORKDIR /opt/my-app

# Copy the rest of the project files
COPY . /opt/my-app/

# Start the Expo app
# CMD ["npx", "expo", "start"]
ENTRYPOINT [ ".docker/entrypoint.sh" ]