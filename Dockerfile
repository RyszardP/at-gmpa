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

RUN apt-get update \
 && apt-get install -y wget \
 && mkdir -p /usr/share/man/man1 \
 && apt-get install -y openjdk-11-jdk
ENV JAVA_HOME /opt/jdk-11

ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64/
ENV PATH $JAVA_HOME/bin:$PATH

#ENV CHROME_VERSION 114.0.5735.90
#RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb" && \
#  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
#  apt-get install -f -y && \
#  rm -f /usr/src/google-chrome-stable_current_amd64.deb
#RUN google-chrome --version
RUN apt-get update \
 && apt-get install -y curl gnupg2 \
 # Устанавливаем ключ GPG для репозитория Chromium
 && curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
 # Добавляем репозиторий Chromium в источники APT
 && echo "deb https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
 # Устанавливаем Chromium и связанные пакеты
 && apt-get update \
 && apt-get install -y chromium-browser \
 && rm -rf /var/lib/apt/lists/*

RUN chromium-browser --version

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
