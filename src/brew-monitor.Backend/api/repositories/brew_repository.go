package repositories

import (
	"errors"
	"github.com/jinzhu/gorm"
	"time"
)

type Brew struct {
	ID			uint		`gorm:"primary_key; not_null; auto_increment;" json:"ID"`
	Name		string		`json:"Name"`
	Type		string		`json:"Type"`
	Status		string		`json:"Status"`
	FermentationTime uint 	`json:"FermentationTime"`
	CreatedDate	time.Time	`gorm:"default: current_timestamp" json:"CreatedDate"`
	ModifiedDate time.Time 	`json:"ModifiedDate"`

	table string `gorm:"Brew"`
}

func (b *Brew) GetBrew(db *gorm.DB, brewId uint) (*Brew, error) {
	var err error
	err = db.Debug().Model(&Brew{}).Where("ID = ?", brewId).Take(&b).Error
	if err != nil{
		return &Brew{}, err
	}
	return b, nil
}

func (b *Brew) GetBrews(db *gorm.DB) (*[]Brew, error){
	var err error
	brews := []Brew{}
	err = db.Debug().Table(b.table).Find(&brews).Error
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
	db = db.Debug().Model(&Brew{}).Where("ID = ?", brewId).Take(&Brew{}).Delete(&Brew{})
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
	err = db.Debug().Model(&Brew{}).Where("ID = ?", brewId).Update(Brew{Name: b.Name, Type: b.Type, Status: b.Status, FermentationTime: b.FermentationTime}).Error
	if err != nil {
		return &Brew{}, err
	}
	return b, nil
}
