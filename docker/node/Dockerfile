FROM jonthdiaz/base
MAINTAINER jhonny <jonthdiaz@gmail.com>


ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 4.4.7

# workdir tutorya
WORKDIR /app

ADD setup_6.x /tmp/setup_6.x
RUN bash /tmp/setup_6.x



# mount volumen for tutorya folder
#VOLUME /Users/tutorya/projects/tutoryaweb:/tutoryaweb


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


# VOLUME ["/Users/tutorya/projects/tutoryaweb:/tutoryaweb:/tutoryaweb"]
#CMD ["gulp", "watch"]
#ADD package.json /tutoryaweb/package.json

# Install nvm with node and npm
#RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.20.0/install.sh | bash \
#    && . $NVM_DIR/nvm.sh \
##    && nvm install $NODE_VERSION \
#   && nvm alias default $NODE_VERSION \
#    && nvm use default


#ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
#ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH


# install gulp
#RUN /usr/local/nvm/v4.4.7/bin/npm install -g gulp


# install dependencies
#RUN /usr/local/nvm/v4.4.7/bin/npm install
