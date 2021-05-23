FROM golang:latest

WORKDIR .
COPY . .
RUN GO111MODULE=on
ENV PATH=$PATH:./
ENV GOPATH=$HOME/brew-monitor.Backend

RUN go mod download
RUN go build -o brew-monitor.Backend .

EXPOSE 8080
CMD ["brew-monitor.Backend"]