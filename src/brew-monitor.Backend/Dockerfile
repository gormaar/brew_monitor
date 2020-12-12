FROM golang:latest

WORKDIR .
COPY . .
ENV PATH=$PATH:./
RUN go get -u github.com/gorilla/mux
RUN go get -u github.com/jinzhu/gorm
RUN go get -u github.com/go-sql-driver/mysql
RUN go get -u github.com/joho/godotenv
RUN go build -o brew-monitor.Backend .

EXPOSE 8080
CMD ["brew-monitor.Backend"]