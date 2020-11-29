package controllers

import (
	repository "../repositories"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mssql"
	"log"
	"net/http"
)

type Server struct {
	DB 		*gorm.DB
	Router  *mux.Router
}

func (server *Server) Initialize(DbConnectionString, DbName string) {

	var err error
	server.DB, err = gorm.Open("mssql", DbConnectionString)
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