FROM node:12.13-alpine

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package.json ./    

# COPY . .

# RUN npm install

# COPY dist /usr/src/app/dist
# CMD ["node", "dist/apps/api/main"]

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "start" ]