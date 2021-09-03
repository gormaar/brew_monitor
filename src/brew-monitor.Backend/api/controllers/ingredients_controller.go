package controllers

import (
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	repository "github.com/gormaar/brew-monitor/api/repositories"
	response "github.com/gormaar/brew-monitor/api/responses"
)

func (server *Server) GetIngredients(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	vars := mux.Vars(r)

	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	
	ingredientsModel := repository.Ingredients{}
	ingredients, err := ingredientsModel.GetIngredients(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, ingredients)
}