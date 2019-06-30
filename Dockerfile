FROM node:lts
WORKDIR /app

RUN npm i -g --unsafe-perm now

ENTRYPOINT [ "now", "dev", "--token", "fake" ]
