package repositories

import (
	"../models"
)

type Respiration models.Respiration

func GetRespiration() Respiration{
	return Respiration{ResId: 001, Bubbles: 100, Time: 1, BrewId: 001}

}

func GetHourlyRespiration() Respiration{
	return Respiration{}
}

func PostRespiration(r Respiration) {

}

func DeleteRespiration(resId uint) {

}

func PutRespiration(r Respiration) {

}