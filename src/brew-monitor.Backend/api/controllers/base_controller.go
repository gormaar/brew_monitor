package controllers

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"net/http"
	repository "../repositories"
)

type Server struct {
	DB 		*gorm.DB
	Router  *mux.Router
}

func (server *Server) Initialize(DbDriver, DbUser, DbPassword, DbPort, DbHost, DbName string) {

	var err error
	DbUrl := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", DbUser, DbPassword, DbHost, DbPort, DbName)
	server.DB, err = gorm.Open(DbDriver, DbUrl)
	if err != nil {
		fmt.Printf("Cannot connect to database: %s \n", DbName)
		log.Fatal("Error: ", err)
	} else {
		fmt.Printf("Successfully connected to database: %s \n", DbName)
	}
	server.DB.Debug().AutoMigrate(&repository.Brew{}, &repository.Temperature{}, &repository.Respiration{})
	server.Router = mux.NewRouter()
	server.initializeRoutes()
}

func (server *Server) Run() {
	log.Fatal(http.ListenAndServe(":8080", server.Router))
}