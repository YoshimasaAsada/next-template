FROM node:20.12.0

WORKDIR /app

COPY /app/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]