package controllers

import (
	"net/http"

	response "github.com/gormaar/brew-monitor/api/responses"
)

func (server *Server) Redeploy(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	response.JSON(w, http.StatusOK, "redeploy")
}