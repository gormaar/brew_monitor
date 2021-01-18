package api

import (
	"./controllers"
	_ "github.com/go-sql-driver/mysql"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
	"log"
	"os"
)

var server = controllers.Server{}

func Run() {
	var err error
	err = godotenv.Load()
	if err != nil {
		log.Fatalf("Error when loading .env file %v", err)
	}

	server.Initialize("mysql", os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), "3306", "127.0.0.1" , os.Getenv("DB_NAME"))

	server.Run()
}