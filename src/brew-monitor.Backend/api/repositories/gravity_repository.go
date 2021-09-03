package repositories

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Gravity struct {
	GravityId           uint `gorm:"primary_key; not_null; auto_increment;" json:"id"`
	GravityCurrentValue float32 `json:"realTimeValue"`
	GravityOriginal     float32 `json:"originalGravity"`
	GravitySpecific     float32 `json:"specificGravity"`
	GravityFinal        float32 `json:"finalGravity"`
	GravityTargetOG     float32 `gorm:"column:gravity_target_OG" json:"targetOG"`
	GravityTargetSG     float32 `gorm:"column:gravity_target_SG" json:"targetSG"`
	GravityTargetFG     float32 `gorm:"column:gravity_target_FG" json:"targetFG"`
	CreatedAt			time.Time	`json:"createdAt"`
	UpdatedAt   		time.Time	`json:"updatedAt"`
	BrewId				uint `json:"brewId"`
}

func (g *Gravity) GetGravity(db *gorm.DB, brewId uint) (*Gravity, error) {
	var err error

	err = db.Debug().Model(&Gravity{}).Where("brew_id = ?", brewId).Last(&g).Error
	if err != nil {
		return &Gravity{}, err
	}
	return g, nil
}

func (Gravity) TableName() string {
	return "Gravity"
}