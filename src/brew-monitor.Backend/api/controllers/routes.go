package controllers


func (server *Server) initializeRoutes() {

	//Routes for respiration
	server.Router.HandleFunc("/airlock/{brew_id}", server.GetAirlock).Methods("GET")
	server.Router.HandleFunc("/airlocks/{brew_id}", server.GetAirlocks).Methods("GET")
	server.Router.HandleFunc("/airlock/create/{brew_id}", server.CreateAirlock).Methods("POST")
	server.Router.HandleFunc("/airlock/update/{brew_id}/{resp_id}", server.PutAirlock).Methods("PUT")
	server.Router.HandleFunc("/airlock/delete/{brew_id}/{resp_id}", server.DeleteAirlock).Methods("DELETE")

	//Routes for temperature
	server.Router.HandleFunc("/temp/{brew_id}", server.GetRecentTemperatureData).Methods("GET")
	server.Router.HandleFunc("/temps/{brew_id}", server.GetAllTemperatureData).Methods("GET")
	server.Router.HandleFunc("/temp/create/{brew_id}", server.CreateTemperature).Methods("POST")
	server.Router.HandleFunc("/temp/update/{brew_id}/{temp_id}", server.PutTemperature).Methods("PUT")
	server.Router.HandleFunc("/temp/delete/{brew_id}/{temp_id}", server.DeleteTemperature).Methods("DELETE")

	//Routes for brews
	server.Router.HandleFunc("/brew/{brew_id}", server.GetBrew).Methods("GET", "OPTIONS")
	server.Router.HandleFunc("/brews", server.GetBrews).Methods("GET", "OPTIONS")
	server.Router.HandleFunc("/brew/create", server.CreateBrew).Methods("POST")
	server.Router.HandleFunc("/brew/update/{brew_id}", server.PutBrew).Methods("PUT")
	server.Router.HandleFunc("/brew/delete/{brew_id}", server.DeleteBrew).Methods("DELETE")

	//Redeploy application
	server.Router.HandleFunc("/redeploy", server.Redeploy).Methods("GET", "OPTIONS")
}