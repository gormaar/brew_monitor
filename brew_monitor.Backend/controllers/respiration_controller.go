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
	json.NewEncoder(w).Encode(respiration)

}
//Method with receiver argument
func PostRespiration(r repository.Respiration) {
	repository.PostRespiration(r)
}

func DeleteRespiration(resId uint) {
	repository.DeleteRespiration(resId)
}

func PutRespiration(resId uint) {
	repository.PutRespiration(resId)
}