FROM node:latest AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN make app/ssl/private

COPY . .

RUN npm run build

FROM nginx:1.17-alpine
WORKDIR /app
COPY --from=builder /app/build /app
COPY ./server/nginx.conf /etc/nginx/conf.d/default.conf
