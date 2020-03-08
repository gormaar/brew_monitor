package repositories

import (
	"../models"
)

type Temperature models.Temperature

func GetTemperature() Temperature{
	return Temperature{TempId: 001, Temperature: 30, BrewId: 001}

}

func GetHourlyTemperature() Temperature{
	return Temperature{}
}

func PostTemperature(r Temperature) {

}

func DeleteTemperature(resId uint) {

}

func PutTemperature(r Temperature) {

}