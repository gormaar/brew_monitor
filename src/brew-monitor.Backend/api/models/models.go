package models

import "time"

type Temperature struct {
	TempId			uint		`json:"id"`
	Temperature		int			`json:"temperature"`
	BrewId			uint		`json:"brewid"`
}

type Brew struct {
	BrewId			uint		`json:"id"`
	BrewName		string		`json:"brewName"`
	BrewType		string		`json:"brewType"`
}

type Respiration struct {
	ResId		uint			`json:"id"`
	Bubbles 	uint 			`json:"bubbles"`
	Time 		time.Duration	`json:"time"`
	BrewId		uint			`json:"brewId"`
}