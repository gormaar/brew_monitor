package repositories

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Barley struct {
	BarleyId      uint 		`gorm:"primary_key; not_null; auto_increment;" json:"id"`
	BarleyType    string 	`json:"type"`
	BarleyAmount  int 		`json:"amount"`
	IngredientsId uint 		`json:"ingredientsId"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt	  time.Time `json:"updatedAt"`
}

type Hops struct {
	HopId 			uint 		`gorm:"primary_key; not_null; auto_increment;" json:"id"`
	HopType 		string 		`json:"type"`
	HopAmount 		int 		`json:"amount"`
	IngredientsId 	uint 		`json:"ingredientsId"`
	CreatedAt 		time.Time 	`json:"createdAt"`
	UpdatedAt 		time.Time 	`json:"updatedAt"`
}

type Ingredients struct {
	IngredientsId 	uint 		`gorm:"primary_key; not_null; auto_increment;" json:"id"`
	BrewId 			uint 		`json:"brewId"`
	Barley 			Barley 		`json:"barley"`
	Hops 			Hops 		`json:"hops"`
	CreatedAt 		time.Time 	`json:"createdAt"`
	UpdatedAt 		time.Time 	`json:"updatedAt"`
}

type Tabler interface {
	TableName() string
}

func (i *Ingredients) GetIngredients(db *gorm.DB, brewId uint, ingredientsId uint) (*Ingredients, error) {
	var err error
	var barley Barley 
	var hops Hops
	err = db.Debug().Model(&Ingredients{}).Where("brew_id = ?", brewId).Where("ingredients_id = ?", ingredientsId).Take(&i).Error
	if err != nil {
		return &Ingredients{}, err
	}
	err = db.Debug().Model(&Barley{}).Where("ingredients_id = ?", i.IngredientsId).Take(&barley).Error
	if err != nil {
		i.Barley = barley
		return i, err
	}
	err = db.Debug().Model(&Hops{}).Where("ingredients_id = ?", i.IngredientsId).Take(&hops).Error
	if err != nil {
		i.Hops = hops
		return i, err
	}

	i.Barley = barley
	i.Hops = hops
	return i, nil
}

func (Barley) TableName() string {
	return "Barley"
}