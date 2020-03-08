package repositories

import (
	"../models"
)

func GetSingleBrew() models.Brew{
	return models.Brew{BrewId: 001, BrewName: "Ægir IPA", BrewType: "IPA"}
}

func GetAllBrews() models.Brew{
	return models.Brew{}
}

func CreateBrew(b models.Brew) {

}

func DeleteBrew(brewId uint) {

}

func PutBrew(b models.Brew) {

}
