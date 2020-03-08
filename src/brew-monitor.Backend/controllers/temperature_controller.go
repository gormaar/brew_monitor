package controllers

import (
repository "../repositories"
"encoding/json"
"log"
"net/http"
"../models"
)

type Temperature models.Temperature

func GetRecentTemperatureData(w http.ResponseWriter, r *http.Request) {
	temp := repository.GetRespiration()
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(temp)
	if err != nil {
		log.Fatal(err)
	}
}

func GetHourlyTemperatureData(w http.ResponseWriter, r *http.Request) {
	hourlyTemp := repository.GetHourlyTemperature()
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(hourlyTemp)
	if err != nil {
		log.Fatal(err)
	}
}

func PostTemperature(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var temp repository.Respiration
	err :=  json.NewDecoder(r.Body).Decode(&temp)

	repository.PostRespiration(temp)
	err = json.NewEncoder(w).Encode(temp)
	if err != nil {
		log.Fatal(err)
	}
}

func DeleteTemperature(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var temp Temperature
	err :=  json.NewDecoder(r.Body).Decode(&temp)

	repository.DeleteRespiration(temp.TempId)
	err = json.NewEncoder(w).Encode(temp)
	if err != nil {
		log.Fatal(err)
	}
}

func PutTemperature(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var temp Temperature
	err :=  json.NewDecoder(r.Body).Decode(&temp)

	//repository.PutTemperature(temp)
	err = json.NewEncoder(w).Encode(temp)
	if err != nil {
		log.Fatal(err)
	}
}
