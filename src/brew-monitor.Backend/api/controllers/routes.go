package controllers



func (server *Server) initializeRoutes() {

	//Routes for respiration
	server.Router.HandleFunc("/api/respiration", GetRecentRespirationData).Methods("GET")
	server.Router.HandleFunc("/api/hourlyRespiration", GetHourlyRespirationData).Methods("GET")
	server.Router.HandleFunc("/api/respiration", CreateRespiration).Methods("POST")
	server.Router.HandleFunc("api/respiration", PutRespiration).Methods("PUT")
	server.Router.HandleFunc("api/respiration", DeleteRespiration).Methods("DELETE")

	//Routes for temperature
	server.Router.HandleFunc("/api/respiration", GetRecentTemperatureData).Methods("GET")
	server.Router.HandleFunc("/api/hourlyRespiration", GetHourlyTemperatureData).Methods("GET")
	server.Router.HandleFunc("/api/respiration", CreateTemperature).Methods("POST")
	server.Router.HandleFunc("api/respiration", PutTemperature).Methods("PUT")
	server.Router.HandleFunc("api/respiration", DeleteTemperature).Methods("DELETE")

	//Routes for brews
	server.Router.HandleFunc("/api/respiration", GetSingleBrew).Methods("GET")
	server.Router.HandleFunc("/api/hourlyRespiration", GetAllBrews).Methods("GET")
	server.Router.HandleFunc("/api/respiration", CreateBrew).Methods("POST")
	server.Router.HandleFunc("api/respiration", PutBrew).Methods("PUT")
	server.Router.HandleFunc("api/respiration", DeleteBrew).Methods("DELETE")
}