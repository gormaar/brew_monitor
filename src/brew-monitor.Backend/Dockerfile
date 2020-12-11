FROM golang:latest

WORKDIR .
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...

EXPOSE 8080
CMD ["brew-monitor.Backend"]