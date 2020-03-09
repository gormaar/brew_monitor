package api

import (
	"./controllers"
)

var server = controllers.Server{}

func Run() {
	server.Run()
}