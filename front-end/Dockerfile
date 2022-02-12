FROM node:alpine as base
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000


#FROM base as prod
#RUN npm ci
#COPY . .
CMD ["npm", "start"]

#FROM base as test
#RUN npm ci
#COPY . .
#CMD [ "npm", "run", "test", "--", "--watchAll=false", "--verbose"  ]

