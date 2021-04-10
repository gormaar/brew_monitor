package controllers

import (
	repository "../repositories"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"net/http"
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
	server.DB.DB().SetMaxIdleConns(1)
	server.DB.Debug().AutoMigrate(&repository.Brew{}, &repository.Temperature{}, &repository.Airlock{})
	server.Router = mux.NewRouter()
	server.initializeRoutes()
}

func (server *Server) Run() {
	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"*"})
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(headers, methods, origins)(server.Router)))
}


func setCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
    (*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    (*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}