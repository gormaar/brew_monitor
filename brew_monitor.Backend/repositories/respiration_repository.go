package repositories

import(
	"time"
)

type Brew struct {
	BrewId			uint		`json:"id"`
	BrewName	string		`json:"brewName"`
	BrewType	string		`json:"brewType"`
}

type Respiration struct {
	ResId		uint		`json:"id"`
	Bubbles 	uint 		`json:"bubbles"`
	Time 		time.Time	`json:"time"`
	BrewId		Brew		`json:"brewId"`
}

func getRespirationData() Respiration {
	return Respiration{}
}