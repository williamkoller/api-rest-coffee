FROM node:16.15.0-alpine3.15

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . . 

EXPOSE 3000

CMD [ "yarn", "start:dev" ]