package repositories

import (
"../models"
)

func GetRespiration() models.Respiration{
	return models.Respiration{ResId: 001, Bubbles: 100, Time: 1, BrewId: 001}

}

func GetHourlyRespiration() models.Respiration{
	return models.Respiration{}
}

func CreateRespiration(r models.Respiration) {

}

func DeleteRespiration(resId uint) {

}

func PutRespiration(r models.Respiration) {

}