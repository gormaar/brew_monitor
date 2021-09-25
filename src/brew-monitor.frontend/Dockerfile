FROM node:14.17.6 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.17-alpine

RUN usermod -u 1000 www-data

WORKDIR /app
COPY --from=builder /app/build /app
COPY ./server/nginx.conf /etc/nginx/conf.d/default.conf
