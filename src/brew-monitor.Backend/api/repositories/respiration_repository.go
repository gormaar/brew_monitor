package repositories

import (
	"time"
)

type Respiration struct {
	ResId		uint			`json:"id"`
	Bubbles 	uint 			`json:"bubbles"`
	Time 		time.Duration	`json:"time"`
	BrewId		uint			`json:"brewId"`
}

func GetRespiration() Respiration{
	return Respiration{ResId: 001, Bubbles: 100, Time: 1, BrewId: 001}

}

func GetHourlyRespiration() Respiration{
	return Respiration{}
}

func CreateRespiration(r Respiration) {

}

func DeleteRespiration(resId uint) {

}

func PutRespiration(r Respiration) {

}