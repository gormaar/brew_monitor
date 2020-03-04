package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"log"
	"math/rand"
	"net/http"
	"strconv"
)

// Brew Struct (Model)
type Brew struct {
	Id			string			`json:"id"`
	Name		string			`json:"name"`
	Type		string			`json:"type"`
	Ingredients	*Ingredients	`json:"ingredients"`
}

//Another Struct
type Ingredients struct {
	Yeast	string	`json:"yeast"`
	Hops	string	`json:"hops"`
	Barley	string	`json:"barley"`
}

//Init brews var as a slice Brew struct
var brews []Brew

// Get All Brews
func getBrews(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(brews)
}

//Get Single Brew
func getBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) //Get params
	//Loop through brews and find with id
	for _, item := range brews {
		if item.Id == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Brew{})
}

//Create Brew
func createBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var brew Brew
	_ = json.NewDecoder(r.Body).Decode(&brew)
	brew.Id = strconv.Itoa(rand.Intn(10000000)) //Mock ID - not safes
	brews = append(brews, brew)
	json.NewEncoder(w).Encode(brew)

}

//Update Brew
func updateBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range brews {
		if item.Id == params["id"] {
			brews = append(brews[:index], brews[index+1:]...)
			var brew Brew
			_ = json.NewDecoder(r.Body).Decode(&brew)
			brew.Id = params["id"]
			brews = append(brews, brew)
			json.NewEncoder(w).Encode(brew)
			return
		}
	}
	json.NewEncoder(w).Encode(brews)
}

//Delete Brew
func deleteBrew(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range brews {
		if item.Id == params["id"] {
			brews = append(brews[:index], brews[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(brews)
}

func main() {
	router := mux.NewRouter()

	//Mock Data - @todo - implement DB
	brews = append(brews, Brew{Id: "1", Name: "SuperSonic", Type: "India Pale Ale", Ingredients: &Ingredients {Yeast: "California Yeast", Hops: "Golden Hops", Barley: "Regular"}})
	brews = append(brews, Brew{Id: "2", Name: "Ægir Apa", Type: "American Pale Ale", Ingredients: &Ingredients {Yeast: "California Yeast", Hops: "Caramount", Barley: "Bayer"}})

	//Route Handlers / Endpoints
	router.HandleFunc("/api/brews", getBrews).Methods("GET")
	router.HandleFunc("/api/brews/{id}", getBrew).Methods("GET")
	router.HandleFunc("/api/brews", createBrew).Methods("POST")
	router.HandleFunc("/api/brews/{id}", updateBrew).Methods("PUT")
	router.HandleFunc("/api/brews/{id}", deleteBrew).Methods("DELETE")
	log.Fatal(http.ListenAndServe(":8000", router))

}
