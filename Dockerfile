FROM alpine:3.17.1
RUN apk add nodejs npm
WORKDIR /app
COPY package.json ./
RUN npm install --global yarn
RUN yarn install
COPY . .
EXPOSE 80 
EXPOSE 8080
CMD ["yarn","dev"]