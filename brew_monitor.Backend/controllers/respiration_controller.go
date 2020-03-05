package controllers

import (
	repository "../repositories"
	"encoding/json"
	"net/http"
)

type Respiration repository.Respiration

func GetRecentRespirationData(w http.ResponseWriter, r *http.Request) {
	respiration := repository.GetRespiration()
	w.Header().Set("Content-Type", "application/json")
	_= json.NewEncoder(w).Encode(respiration)

}
//Method with receiver argument
func PostRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var respiration repository.Respiration
	_ =  json.NewDecoder(r.Body).Decode(&respiration)

	repository.PostRespiration(respiration)
	_ = json.NewEncoder(w).Encode(respiration)

}

func DeleteRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var respiration repository.Respiration
	_ =  json.NewDecoder(r.Body).Decode(&respiration)

	repository.DeleteRespiration(respiration.ResId)
	_ = json.NewEncoder(w).Encode(respiration)
}

func PutRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var respiration repository.Respiration
	_ =  json.NewDecoder(r.Body).Decode(&respiration)

	repository.PutRespiration(respiration)
	_ = json.NewEncoder(w).Encode(respiration)
}