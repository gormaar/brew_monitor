FROM golang:latest

WORKDIR /app
COPY . .
RUN GO111MODULE=on
ENV PATH=$PATH:./
ENV GOPATH=$HOME/brew-monitor.Backend

RUN go mod download
RUN go build -o brew-monitor.Backend .

EXPOSE 8080
CMD ["brew-monitor.Backend"]

FROM nginx:1.17-alpine

RUN chmod -R 600 /etc/nginx

WORKDIR /app
COPY --from=builder /app/build /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf