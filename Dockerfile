FROM jonthdiaz/base
MAINTAINER jhonny <jonthdiaz@gmail.com>


ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 4.4.7

# workdir tutorya
WORKDIR /app

ADD /docker/node/setup_6.x /tmp/setup_6.x
RUN bash /tmp/setup_6.x

RUN apt-get install -y build-essential
RUN apt-get install -y nodejs


RUN /usr/bin/npm install -g gulp
RUN /usr/bin/npm install -g typescript
RUN /usr/bin/npm install -g webpack
RUN /usr/bin/npm install -g typings
RUN /usr/bin/npm install -g node-inspector
RUN /usr/bin/npm install -g forever
RUN /usr/bin/npm install -g vue-cli

ENV PORT 3000
ENV NODE_ENV dev
EXPOSE 3000 35729 5858 8011 9229

CMD ["npm", "start"]
