package repositories

import (
	"errors"
	"github.com/jinzhu/gorm"
	"time"
)

type Brew struct {
	BrewId			uint		`gorm:"primary_key; not_null; auto_increment;" json:"brew_id"`
	BrewName		string		`json:"brew_name"`
	BrewType		string		`json:"brew_type"`
	CreationTime	time.Time	`gorm: "default: current_timestamp" json:"creation_timestamp"`
}

func (b *Brew) GetSingleBrew(db *gorm.DB, brewId uint) (*Brew, error) {
	var err error
	err = db.Debug().Model(&Brew{}).Where("brew_id = ?", brewId).Take(&b).Error
	if err != nil{
		return &Brew{}, err
	}
	return b, nil
}

func (b *Brew) GetAllBrews(db *gorm.DB) (*[]Brew, error){
	var err error
	brews := []Brew{}
	err = db.Debug().Model(&Brew{}).Limit(100).Find(&brews).Error
	if err != nil {
		return &[]Brew{}, err
	}

	return &brews, nil
}

func (b * Brew) CreateBrew(db *gorm.DB) (*Brew, error) {
	var err error
	err = db.Debug().Model(&Brew{}).Create(&b).Error
	if err != nil {
		return &Brew{}, err
	}
	return b, nil
}

func (b * Brew) DeleteBrew(db *gorm.DB, brewId uint) (int64, error){
	db = db.Debug().Model(&Brew{}).Where("brew_id = ?", brewId).Take(&Brew{}).Delete(&Brew{})
	if db.Error != nil {
		if gorm.IsRecordNotFoundError(db.Error) {
			return 0, errors.New("Post not found")
		}
		return 0, db.Error
	}
	return db.RowsAffected, nil
}

func (b *Brew) PutBrew(db *gorm.DB, brewId uint) (*Brew, error) {
	var err error
	err = db.Debug().Model(&Brew{}).Where("id = ?", brewId).Update(Brew{BrewName: b.BrewName, BrewType: b.BrewType}).Error
	if err != nil {
		return &Brew{}, err
	}
	return b, nil
}
