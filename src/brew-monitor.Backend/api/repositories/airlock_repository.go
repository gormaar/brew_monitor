package repositories

import (
	"encoding/json"
	"errors"
	"github.com/jinzhu/gorm"
	"io/ioutil"
	"net/http"
	"time"
)

type Airlock struct {
	AirlockId			uint			`gorm:"primary_key; not null; auto_increment; "json:"id"`
	AirlockActivity 	int 			`json:"activity"`
	CreatedAt			time.Time		`json:"createdAt"`
	UpdatedAt			time.Time		`json:"updatedAt"`
	BrewId				uint			`json:"brewId"`
}

func (a *Airlock) GetAirlock(db *gorm.DB, brewId uint) (*Airlock, error){
	var err error
	err = db.Debug().Model(&Airlock{}).Where("brew_id = ?", brewId).Last(&a).Error
	if err != nil{
		return &Airlock{}, err
	}
	return a, nil
}

func (a *Airlock) GetAirlocks(db *gorm.DB, brewId uint) (*[]Airlock, error){
	var err error
	respirations := []Airlock{}
	err = db.Debug().Model(&Airlock{}).Where("brew_id = ?", brewId).Find(&respirations).Error
	if err != nil{
		return &[]Airlock{}, err
	}
	return &respirations, nil
}

func (a *Airlock) CreateAirlock(db *gorm.DB, r *http.Request) (*Airlock, error) {
	var err error
	body, _ := ioutil.ReadAll(r.Body)
	requestErr := json.Unmarshal(body, &a)
	if requestErr != nil {
		return &Airlock{}, err
	}
	err = db.Debug().Model(&Airlock{}).Create(&a).Error
	if err != nil {
		return &Airlock{}, err
	}
	return a, nil
}

func (a *Airlock) DeleteAirlock(db *gorm.DB, respId uint) (int64, error) {
	db = db.Debug().Model(&Airlock{}).Where("airlock_id = ?", respId).Take(&Airlock{}).Delete(&Airlock{})
	if db.Error != nil {
		if gorm.IsRecordNotFoundError(db.Error) {
			return 0, errors.New("Respiration not found")
		}
		return 0, db.Error
	}
	return db.RowsAffected, nil
}

func (a *Airlock) PutAirlock(db *gorm.DB, airlockId uint) (*Airlock, error) {
	var err error
	err = db.Debug().Model(&Airlock{}).Where("airlock_id = ?", airlockId).Update(Airlock{AirlockActivity: a.AirlockActivity, CreatedAt: a.CreatedAt, UpdatedAt: a.UpdatedAt, BrewId: a.BrewId}).Error
	if err != nil {
		return &Airlock{}, err
	}
	return a, nil
}