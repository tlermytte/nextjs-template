FROM node:17-alpine3.15

WORKDIR /usr/src/app

COPY package*.json .
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev"]