package controllers

import (
	repository "../repositories"
)

type Respiration repository.Respiration

func GetRecentRespirationData() repository.Respiration {
	respirationData := repository.GetRespiration()
	return respirationData
}
//Method with receiver argument
func PostRespiration(r repository.Respiration) {
	repository.PostRespiration(r)
}

func DeleteRespiration(resId uint) {
	repository.DeleteRespiration(resId)
}

func PutRespiration(resId uint) {
	repository.PutRespiration(resId)
}