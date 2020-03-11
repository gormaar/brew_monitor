package repositories

type Temperature struct {
	TempId			uint		`json:"id"`
	Temperature		int			`json:"temperature"`
	BrewId			uint		`json:"brewid"`
}

func GetTemperature() Temperature{
	return Temperature{TempId: 001, Temperature: 30, BrewId: 001}

}

func GetHourlyTemperature() Temperature{
	return Temperature{}
}

func CreateTemperature(t Temperature) {

}

func DeleteTemperature(tempId uint) {

}

func PutTemperature(t Temperature) {

}