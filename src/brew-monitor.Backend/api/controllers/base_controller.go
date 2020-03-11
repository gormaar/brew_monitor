package controllers

import (
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"log"
	"net/http"
)

type Server struct {
	Database *gorm.DB
	Router   *mux.Router
}

func (server *Server) Initialize() {
	server.Router = mux.NewRouter()
	server.initializeRoutes()
}

func (server *Server) Run() {
	log.Fatal(http.ListenAndServe(":8000", server.Router))
}