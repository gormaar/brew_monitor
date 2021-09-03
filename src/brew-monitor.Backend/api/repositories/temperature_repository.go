package repositories

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/jinzhu/gorm"
)

type Temperature struct {
	TempId				uint		`gorm:"primary_key; not_null; auto_increment;" json:"id"`
	TempValue			int			`json:"value"`
	TempValueLongterm 	int			`json:"longTermValue"`
	CreatedAt			time.Time	`json:"createdAt"`
	UpdatedAt   		time.Time	`json:"updatedAt"`
	BrewId				uint		`json:"brewId"`
}

func (t *Temperature) GetRecentTemperature(db *gorm.DB, brewId uint) (*Temperature, error){
	var err error
	err = db.Debug().Model(&Temperature{}).Where("brew_id = ?", brewId).Last(&t).Error
	if err != nil {
		return &Temperature{}, err
	}
	return t, nil
}

func (t *Temperature) GetAllTemperatures(db *gorm.DB, brewId uint) (*[]Temperature, error){
	var err error
	temps := []Temperature{}
	err = db.Debug().Model(&Temperature{}).Where("brew_id = ?", brewId).Find(&temps).Error
	if err != nil {
		return &[]Temperature{}, err
	}
	return &temps, nil
}

func (t *Temperature) CreateTemperature(db *gorm.DB,r *http.Request, brewId uint) (*Temperature, error) {
	var err error
	body, _ := ioutil.ReadAll(r.Body)

	jsonErr := json.Unmarshal(body, &t)
	if jsonErr != nil {
		return &Temperature{}, err
	}
	err = db.Debug().Model(&Temperature{}).Where("brew_id = ?", brewId).Create(&t).Error
	if err != nil {
		return &Temperature{}, err
	}
	return t, nil
}

func (t *Temperature) DeleteTemperature(db *gorm.DB, brewId uint, tempId uint) (int64, error) {
	db = db.Debug().Model(&Temperature{}).Where("brew_id = ?", brewId).Where("temp_id = ?", tempId).Take(&Temperature{}).Delete(&Temperature{})
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