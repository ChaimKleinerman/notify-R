FROM node:18.19.0


WORKDIR /app

COPY ./app/package*.json .


COPY ./app .
RUN npm install 

CMD ["npm", "start"]
