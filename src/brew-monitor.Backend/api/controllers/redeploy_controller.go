package controllers

import
(
	response "../responses"
	"net/http"
)

func (server *Server) Redeploy(w http.ResponseWriter, r *http.Request) {
	setCors(&w)
	response.JSON(w, http.StatusOK, "redeploy")
}
