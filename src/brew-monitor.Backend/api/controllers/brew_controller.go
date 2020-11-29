package controllers

import (
	repository "../repositories"
	response "../responses"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func (server *Server) GetBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)

	brewId, err := strconv.ParseUint(vars["ID"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	brewModel := repository.Brew{}
	brew, err := brewModel.GetBrew(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, brew)
}

func (server *Server) GetBrews(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	brewModel := repository.Brew{}
	brews, err := brewModel.GetBrews(server.DB)
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, brews)
}

func (server *Server) CreateBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	brewModel := repository.Brew{}
	brew, err := brewModel.CreateBrew(server.DB)
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, brew)
}

func (server *Server) DeleteBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["ID"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	brewModel := repository.Brew{}
	brew, err := brewModel.DeleteBrew(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, brew)
}

func (server *Server) PutBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	brewId, err := strconv.ParseUint(vars["ID"], 10, 32)
	if err != nil {
		response.ERROR(w, http.StatusBadRequest, err)
		return
	}
	brewModel := repository.Brew{}
	brew, err := brewModel.PutBrew(server.DB, uint(brewId))
	if err != nil {
		response.ERROR(w, http.StatusInternalServerError, err)
		return
	}
	response.JSON(w, http.StatusOK, brew)
}

func setCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}