FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

CMD ["serve","-s","build"]