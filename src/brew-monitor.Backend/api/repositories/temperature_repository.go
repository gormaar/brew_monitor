package repositories

import (
	"../models"
)

func GetTemperature() models.Temperature{
	return models.Temperature{TempId: 001, Temperature: 30, BrewId: 001}

}

func GetHourlyTemperature() models.Temperature{
	return models.Temperature{}
}

func CreateTemperature(t models.Temperature) {

}

func DeleteTemperature(tempId uint) {

}

func PutTemperature(t models.Temperature) {

}