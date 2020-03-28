package controllers



func (server *Server) initializeRoutes() {

	//Routes for respiration
	server.Router.HandleFunc("/api/respiration/{brew_id}", server.GetRecentRespirationData).Methods("GET")
	server.Router.HandleFunc("/api/allRespirations/{brew_id}", server.GetAllRespirations).Methods("GET")
	server.Router.HandleFunc("/api/hourlyRespiration/{brew_id}", server.GetHourlyRespirationData).Methods("GET")
	server.Router.HandleFunc("/api/respiration{brew_id}", server.CreateRespiration).Methods("POST")
	server.Router.HandleFunc("api/respiration/{brew_id}/{id}", server.PutRespiration).Methods("PUT")
	server.Router.HandleFunc("api/respiration/{brew_id}/{id}", server.DeleteRespiration).Methods("DELETE")

	//Routes for temperature
	server.Router.HandleFunc("/api/temp/{brew_id}", server.GetRecentTemperatureData).Methods("GET")
	server.Router.HandleFunc("/api/allTemps/{brew_id}", server.GetAllTemperatureData).Methods("GET")
	server.Router.HandleFunc("/api/temp/{brew_id}", server.CreateTemperature).Methods("POST")
	server.Router.HandleFunc("api/temp/{brew_id}/{id}", server.PutTemperature).Methods("PUT")
	server.Router.HandleFunc("api/temp/{brew_id}/{id}", server.DeleteTemperature).Methods("DELETE")

	//Routes for brews
	server.Router.HandleFunc("/api/brews/{brew_id}", server.GetSingleBrew).Methods("GET")
	server.Router.HandleFunc("/api/brews", server.GetAllBrews).Methods("GET")
	server.Router.HandleFunc("/api/brews", server.CreateBrew).Methods("POST")
	server.Router.HandleFunc("api/brews/{brew_id}", server.PutBrew).Methods("PUT")
	server.Router.HandleFunc("api/brews/{brew_id}", server.DeleteBrew).Methods("DELETE")
}