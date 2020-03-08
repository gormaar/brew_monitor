package controllers

import (
	controller "./"
)

func (server *Server) initializeRoutes() {
	s.router.HandleFunc("/api/respiration", controller.GetRecentRespirationData).Methods("GET")
	s.router.HandleFunc("/api/hourlyRespiration", controller.GetHourlyRespirationData).Methods("GET")
	s.router.HandleFunc("/api/respiration", controller.CreateRespiration).Methods("POST")
	s.router.HandleFunc("api/respiration", controller.PutRespiration).Methods("PUT")
	s.router.HandleFunc("api/respiration", controller.DeleteRespiration).Methods("DELETE")
}