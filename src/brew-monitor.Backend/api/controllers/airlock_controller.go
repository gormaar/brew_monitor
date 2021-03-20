package controllers

import (
	repository "../repositories"
	response "../responses"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func (server *Server) GetAirlock(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	respModel := repository.Airlock{}
	resp, err := respModel.GetAirlock(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, resp)
}

func (server *Server) GetAirlocks(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	respModel := repository.Airlock{}
	resp, err := respModel.GetAirlocks(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, resp)
}

func (server *Server) CreateAirlock(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	respModel := repository.Airlock{}
	resp, err := respModel.CreateAirlock(server.DB, r)
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, resp)
}

func (server *Server) DeleteAirlock(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	respModel := repository.Airlock{}
	resp, err := respModel.DeleteAirlock(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
	}
	response.JSON(w, http.StatusOK, resp)
}

func (server *Server) PutAirlock(w http.ResponseWriter, r *http.Request) {
	setCors(&w)

	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	respModel := repository.Airlock{}
	resp, err := respModel.PutAirlock(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, resp)
}
