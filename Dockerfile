FROM node:20-bullseye

# INSTALL NPM
RUN npm install -g npm@latest
RUN npm --version

# ENVIRONMENT VARIABLES
# good colors for most applications
ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true


# Chrome dependencies
RUN apt-get update
RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils
RUN apt-get install oracle-java8-installer
RUN sudo nano /etc/enviroment
ENV JAVA_HOME "/usr/lib/jvm/java-8-oracle"
RUN JAVA_HOME "/usr/lib/jvm/java-8-oracle"
RUN echo $JAVA_HOME
RUN javac -version

ENV CHROME_VERSION 114.0.5735.90
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb" && \
  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN google-chrome --version

# INSTALL PACKAGES
WORKDIR /usr/wdiowithoutgrid/
COPY package*.json ./
COPY . .
EXPOSE 8080
RUN npm install

# Display versions of local tools
RUN echo  " node version:    $(node -v) \n" \
  "npm version:     $(npm -v) \n"

RUN ls

# ON RUNNING THE IMAGE THIS COMMAND WILL BE TRIGGERED BY DEFAULT
ENTRYPOINT ["npm", "run", "test_docker"]
