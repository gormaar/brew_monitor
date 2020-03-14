package controllers

import (

repository "../repositories"
"encoding/json"
"log"
"net/http"

)

func GetSingleBrew(w http.ResponseWriter, r *http.Request) {
	brew := repository.GetSingleBrew()
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(brew)
	if err != nil {
		log.Fatal(err)
	}
}

func GetAllBrews(w http.ResponseWriter, r *http.Request) {
	brews := repository.GetAllBrews()
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(brews)
	if err != nil {
		log.Fatal(err)
	}
}

func CreateBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var brew repository.Brew
	err :=  json.NewDecoder(r.Body).Decode(&brew)
	repository.CreateBrew(brew)
	err = json.NewEncoder(w).Encode(brew)
	if err != nil {
		log.Fatal(err)
	}
}

func DeleteBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var brew repository.Brew
	err :=  json.NewDecoder(r.Body).Decode(&brew)

	repository.DeleteBrew(brew.BrewId)
	err = json.NewEncoder(w).Encode(brew)
	if err != nil {
		log.Fatal(err)
	}
}

func PutBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var brew repository.Brew
	err :=  json.NewDecoder(r.Body).Decode(&brew)
	repository.PutBrew(brew)
	err = json.NewEncoder(w).Encode(brew)
	if err != nil {
		log.Fatal(err)
	}
}
