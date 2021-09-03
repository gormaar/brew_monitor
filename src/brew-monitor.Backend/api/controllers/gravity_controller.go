package controllers

import (
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/gormaar/brew-monitor/api/repositories"
	response "github.com/gormaar/brew-monitor/api/responses"
)


func (server *Server) GetGravity(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	vars := mux.Vars(r)

	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}

	gravityModel := repositories.Gravity{}
	gravity, err := gravityModel.GetGravity(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, gravity)
}