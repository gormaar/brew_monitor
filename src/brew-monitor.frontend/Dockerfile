FROM node:14.17.6 AS builder
WORKDIR /app
RUN chmod -R 600 /etc/nginx/ssl

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.17-alpine
WORKDIR /app
COPY --from=builder /app/build /app
COPY ./server/nginx.conf /etc/nginx/conf.d/default.conf
