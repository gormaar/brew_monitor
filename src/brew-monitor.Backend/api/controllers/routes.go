package controllers


func (server *Server) initializeRoutes() {

	//Routes for respiration
	server.Router.HandleFunc("/respiration/{brew_id}", server.GetRecentRespirationData).Methods("GET")
	server.Router.HandleFunc("/respirations/{brew_id}", server.GetAllRespirations).Methods("GET")
	server.Router.HandleFunc("/respiration/hour/{brew_id}", server.GetHourlyRespirationData).Methods("GET")
	server.Router.HandleFunc("/respiration/create/{brew_id}", server.CreateRespiration).Methods("POST")
	server.Router.HandleFunc("/respiration/update/{brew_id}/{resp_id}", server.PutRespiration).Methods("PUT")
	server.Router.HandleFunc("/respiration/delete/{brew_id}/{resp_id}", server.DeleteRespiration).Methods("DELETE")

	//Routes for temperature
	server.Router.HandleFunc("/temp/{brew_id}", server.GetRecentTemperatureData).Methods("GET")
	server.Router.HandleFunc("/temps/{brew_id}", server.GetAllTemperatureData).Methods("GET")
	server.Router.HandleFunc("/temp/create/{brew_id}", server.CreateTemperature).Methods("POST")
	server.Router.HandleFunc("/temp/update/{brew_id}/{temp_id}", server.PutTemperature).Methods("PUT")
	server.Router.HandleFunc("/temp/delete/{brew_id}/{temp_id}", server.DeleteTemperature).Methods("DELETE")

	//Routes for brews
	server.Router.HandleFunc("/brew/{brew_id}", server.GetSingleBrew).Methods("GET", "OPTIONS")
	server.Router.HandleFunc("/brews", server.GetAllBrews).Methods("GET", "OPTIONS")
	server.Router.HandleFunc("/brew/create", server.CreateBrew).Methods("POST")
	server.Router.HandleFunc("/brew/update/{brew_id}", server.PutBrew).Methods("PUT")
	server.Router.HandleFunc("/brew/delete/{brew_id}", server.DeleteBrew).Methods("DELETE")
}