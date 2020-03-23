package controllers

import (
	repository "../repositories"
	response "../responses"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func (server *Server) GetRecentRespirationData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	resp := repository.Respiration{}
	foundResp, err := resp.GetRecentRespiration(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, foundResp)

}

func (server *Server) GetHourlyRespirationData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	resp := repository.Respiration{}
	foundResp, err := resp.GetHourlyRespiration(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, foundResp)
}

func (server *Server) CreateRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	respModel := repository.Respiration{}
	resp, err := respModel.CreateRespiration(server.DB)
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, resp)
}

func (server *Server) DeleteRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	respModel := repository.Respiration{}
	resp, err := respModel.DeleteRespiration(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
	}
	response.JSON(w, http.StatusOK, resp)
}

func (server *Server) PutRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["brew_id"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	respModel := repository.Respiration{}
	resp, err := respModel.PutRespiration(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, resp)
}