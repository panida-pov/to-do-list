# Image source
FROM node:21-alpine

# Docker working directory
WORKDIR /server

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json ./

# Then install the NPM module
RUN npm install

# Copy current directory to APP folder
COPY . /server/

EXPOSE 3000
CMD ["npm", "run", "start:dev"]