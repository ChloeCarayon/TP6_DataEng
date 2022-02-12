FROM node:alpine as base
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
ENV CI=true
RUN npm run test
RUN npm run build
CMD ["npm", "start"]