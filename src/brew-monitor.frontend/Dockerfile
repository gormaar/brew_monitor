FROM node:14.17.6 AS builder
WORKDIR /app
RUN mkdir /home/certs

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.17-alpine
WORKDIR /app
COPY --from=builder /app/build /app
COPY ./server/nginx.conf /etc/nginx/conf.d/default.conf
