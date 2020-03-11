package controllers

import (
	"encoding/json"
	"log"
	"net/http"
	repository "../repositories"
)

func GetRecentRespirationData(w http.ResponseWriter, r *http.Request) {
	respiration := repository.GetRespiration()
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(respiration)
	if err != nil {
		log.Fatal(err)
	}
}

func GetHourlyRespirationData(w http.ResponseWriter, r *http.Request) {
	hourlyRespiration := repository.GetHourlyRespiration()
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(hourlyRespiration)
	if err != nil {
		log.Fatal(err)
	}
}

func CreateRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var respiration repository.Respiration
	err :=  json.NewDecoder(r.Body).Decode(&respiration)

	repository.CreateRespiration(respiration)
	err = json.NewEncoder(w).Encode(respiration)
	if err != nil {
		log.Fatal(err)
	}
}

func DeleteRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var respiration repository.Respiration
	err :=  json.NewDecoder(r.Body).Decode(&respiration)

	repository.DeleteRespiration(respiration.ResId)
	err = json.NewEncoder(w).Encode(respiration)
	if err != nil {
		log.Fatal(err)
	}
}

func PutRespiration(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var respiration repository.Respiration
	err :=  json.NewDecoder(r.Body).Decode(&respiration)

	repository.PutRespiration(respiration)
	err = json.NewEncoder(w).Encode(respiration)
	if err != nil {
		log.Fatal(err)
	}
}