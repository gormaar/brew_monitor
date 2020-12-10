package repositories

import (
	"errors"
	"github.com/jinzhu/gorm"
	"time"
)

type Airlock struct {
	AirlockId			uint			`gorm:"primary_key; not null; auto_increment; "json:"airlock_id"`
	AirlockActivity 	int 			`json:"airlock_activity"`
	CreatedAt			time.Time		`json:"created_at"`
	UpdatedAt			time.Time		`json:"updated_at"`
	BrewId				uint			`json:"brew_id"`
}

func (r *Airlock) GetAirlock(db *gorm.DB, brewId uint) (*Airlock, error){
	var err error
	err = db.Debug().Model(&Airlock{}).Where("brew_id = ?", brewId).Last(&r).Error
	if err != nil{
		return &Airlock{}, err
	}
	return r, nil
}

func (r *Airlock) GetAirlocks(db *gorm.DB, brewId uint) (*[]Airlock, error){
	var err error
	respirations := []Airlock{}
	err = db.Debug().Model(&Airlock{}).Where("brew_id = ?", brewId).Find(&respirations).Error
	if err != nil{
		return &[]Airlock{}, err
	}
	return &respirations, nil
}

func (r *Airlock) CreateAirlock(db *gorm.DB) (*Airlock, error) {
	var err error
	err = db.Debug().Model(&Airlock{}).Create(&r).Error
	if err != nil {
		return &Airlock{}, err
	}
	return r, nil
}

func (r *Airlock) DeleteAirlock(db *gorm.DB, respId uint) (int64, error) {
	db = db.Debug().Model(&Airlock{}).Where("airlock_id = ?", respId).Take(&Airlock{}).Delete(&Airlock{})
	if db.Error != nil {
		if gorm.IsRecordNotFoundError(db.Error) {
			return 0, errors.New("Respiration not found")
		}
		return 0, db.Error
	}
	return db.RowsAffected, nil
}

func (r *Airlock) PutAirlock(db *gorm.DB, airlockId uint) (*Airlock, error) {
	var err error
	err = db.Debug().Model(&Airlock{}).Where("airlock_id = ?", airlockId).Update(Airlock{AirlockActivity: r.AirlockActivity, CreatedAt: r.CreatedAt, UpdatedAt: r.UpdatedAt, BrewId: r.BrewId}).Error
	if err != nil {
		return &Airlock{}, err
	}
	return r, nil
}