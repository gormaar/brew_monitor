package controllers



func (server *Server) initializeRoutes() {

	//Routes for respiration
	server.Router.HandleFunc("/api/respiration", server.GetRecentRespirationData).Methods("GET")
	server.Router.HandleFunc("/api/hourlyRespiration", server.GetHourlyRespirationData).Methods("GET")
	server.Router.HandleFunc("/api/respiration", server.CreateRespiration).Methods("POST")
	server.Router.HandleFunc("api/respiration", server.PutRespiration).Methods("PUT")
	server.Router.HandleFunc("api/respiration", server.DeleteRespiration).Methods("DELETE")

	//Routes for temperature
	server.Router.HandleFunc("/api/respiration", server.GetTemperatureData).Methods("GET")
	server.Router.HandleFunc("/api/hourlyRespiration", server.GetAllTemperatureData).Methods("GET")
	server.Router.HandleFunc("/api/respiration", server.CreateTemperature).Methods("POST")
	server.Router.HandleFunc("api/respiration", server.PutTemperature).Methods("PUT")
	server.Router.HandleFunc("api/respiration", server.DeleteTemperature).Methods("DELETE")

	//Routes for brews
	server.Router.HandleFunc("/api/brews/{id}", server.GetSingleBrew).Methods("GET")
	server.Router.HandleFunc("/api/brews", server.GetAllBrews).Methods("GET")
	server.Router.HandleFunc("/api/brews", server.CreateBrew).Methods("POST")
	server.Router.HandleFunc("api/brews/{id}", server.PutBrew).Methods("PUT")
	server.Router.HandleFunc("api/brews/{id}", server.DeleteBrew).Methods("DELETE")
}