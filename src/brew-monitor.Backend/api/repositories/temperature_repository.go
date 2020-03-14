package repositories

import (
	"errors"
	"github.com/jinzhu/gorm"
	"time"
)

type Temperature struct {
	TempId			uint		`gorm:"primary_key; not null; auto_increment; "json:"temp_id"`
	TempValue		int			`json:"temp_value"`
	TempTimestamp	time.Time	`gorm: "default: current_timestamp" json:"temp_timestamp"`
	BrewId			uint		`json:"brewid"`
}

func (t *Temperature) GetTemperature(db *gorm.DB, brewId uint) (*Temperature, error){
	var err error
	err = db.Debug().Model(&Temperature{}).Where("brew_id = ?", brewId).Take(&t).Error
	if err != nil {
		return &Temperature{}, err
	}
	return t, nil

}

func (t *Respiration) GetAllTemperatures(db *gorm.DB, brewId uint) (*[]Temperature, error){
	var err error
	temps := []Temperature{}
	err = db.Debug().Model(&Temperature{}).Find(&t).Error
	if err != nil {
		return &[]Temperature{}, err
	}
	return &temps, nil
}

func (t *Temperature) CreateTemperature(db *gorm.DB, brewId uint) (*Temperature, error) {
	var err error
	err = db.Debug().Model(&Temperature{}).Where("brew_id = ?", brewId).Create(&t).Error
	if err != nil {
		return &Temperature{}, err
	}
	return t, nil
}

func (t *Temperature) DeleteTemperature(db *gorm.DB, tempId uint) (int64, error) {
	db = db.Debug().Model(&Temperature{}).Where("temp_id = ?", tempId).Take(&Temperature{}).Delete(&Temperature{})
	if db.Error != nil {
		if gorm.IsRecordNotFoundError(db.Error) {
			return 0, errors.New("Temperature not found")
		}
		return 0, db.Error
	}
	return db.RowsAffected, nil
}

func (t *Temperature) PutTemperature(db *gorm.DB, tempid uint) (*Temperature, error) {
	var err error
	err = db.Debug().Model(&Temperature{}).Where("temp_id = ?", tempid).Update(Temperature{TempValue: t.TempValue}).Error
	if err != nil {
		return &Temperature{}, err
	}
	return t, nil
}