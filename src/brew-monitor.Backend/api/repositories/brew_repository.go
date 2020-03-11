package repositories

type Brew struct {
	BrewId			uint		`json:"id"`
	BrewName		string		`json:"brewName"`
	BrewType		string		`json:"brewType"`
}

func GetSingleBrew() Brew{
	return Brew{BrewId: 001, BrewName: "Ægir IPA", BrewType: "IPA"}
}

func GetAllBrews() Brew{
	return Brew{}
}

func CreateBrew(b Brew) {

}

func DeleteBrew(brewId uint) {

}

func PutBrew(b Brew) {

}
