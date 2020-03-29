package repositories

import (
	"errors"
	"github.com/jinzhu/gorm"
	"time"
)

type Respiration struct {
	RespId			uint		`gorm:"primary_key; not null; auto_increment; "json:"resp_id"`
	RespValue 		int 		`json:"resp_value"`
	RespHourValue  	int			`json:"resp_hour_value"`
	RespTimestamp	time.Time	`gorm:"default: current_timestamp"json:"resp_timestamp"`
	BrewId			uint		`json:"brew_id"`
}

func (r *Respiration) GetRecentRespiration(db *gorm.DB, brewId uint) (*Respiration, error){
	var err error
	err = db.Debug().Model(&Respiration{}).Where("brew_id = ?", brewId).Last(&r).Error
	if err != nil{
		return &Respiration{}, err
	}
	return r, nil
}

func (r *Respiration) GetHourlyRespiration(db *gorm.DB, brewId uint) (*Respiration, error) {
	var err error
	err = db.Debug().Model(&Respiration{}).Where("brew_id = ?", brewId).Last(&r).Error
	if err != nil{
		return &Respiration{}, err
	}
	return r, nil
}

func (r *Respiration) GetAllRespirations(db *gorm.DB, brewId uint) (*[]Respiration, error){
	var err error
	respirations := []Respiration{}
	err = db.Debug().Model(&Respiration{}).Where("brew_id = ?", brewId).Find(&respirations).Error
	if err != nil{
		return &[]Respiration{}, err
	}
	return &respirations, nil
}

func (r *Respiration) CreateRespiration(db *gorm.DB) (*Respiration, error) {
	var err error
	err = db.Debug().Model(&Respiration{}).Create(&r).Error
	if err != nil {
		return &Respiration{}, err
	}
	return r, nil
}

func (r *Respiration) DeleteRespiration(db *gorm.DB, respId uint) (int64, error) {
	db = db.Debug().Model(&Respiration{}).Where("resp_id = ?", respId).Take(&Respiration{}).Delete(&Respiration{})
	if db.Error != nil {
		if gorm.IsRecordNotFoundError(db.Error) {
			return 0, errors.New("Respiration not found")
		}
		return 0, db.Error
	}
	return db.RowsAffected, nil
}

func (r *Respiration) PutRespiration(db *gorm.DB, respId uint) (*Respiration, error) {
	var err error
	err = db.Debug().Model(&Respiration{}).Where("resp_id = ?", respId).Update(Respiration{RespValue: r.RespValue, RespHourValue: r.RespHourValue}).Error
	if err != nil {
		return &Respiration{}, err
	}
	return r, nil
}