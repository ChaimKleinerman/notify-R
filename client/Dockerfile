FROM node:18.19.0

WORKDIR /app

COPY ./vite-project/package*.json .
RUN npm i

COPY ./vite-project .


EXPOSE 3000

CMD ["npm", "run", "dev"]
