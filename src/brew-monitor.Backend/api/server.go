package api

import (
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gormaar/brew-monitor/api/controllers"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
)

var server = controllers.Server{}

func Run() {
	godotenv.Load()
	server.Initialize(os.Getenv("DB_DRIVER"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_PORT"), os.Getenv("DB_HOST") , os.Getenv("DB_NAME"))
	server.Run()
}


