FROM node:14
WORKDIR /usr/src/api1
COPY ./package.json .
RUN npm install --only=prod