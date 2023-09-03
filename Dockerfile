FROM node:18.17.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5175
CMD ["npm", "run", "dev"]
