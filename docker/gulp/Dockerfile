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
RUN /usr/bin/npm install -g typescript@next


ENV PORT 35729
EXPOSE 35729

CMD ["gulp", "watch"]
