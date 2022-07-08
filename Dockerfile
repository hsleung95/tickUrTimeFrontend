FROM node:13.12.0-alpine

# set working directory
WORKDIR /tickUrTime/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /timeUrTime/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "install"]
CMD ["npm", "start"]