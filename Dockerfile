FROM node:9.2.0-alpine

RUN apk update && \
    apk add perl perl-lingua-translit

ADD input.txt /tmp

RUN mkdir -p /opt/app
WORKDIR /opt/app
ADD package.json .

RUN npm install

ADD server.js .
ADD app app

CMD ["node", "server"]
