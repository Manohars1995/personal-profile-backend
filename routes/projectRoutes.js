const router = require("express").Router()

const {addProject,getProjects} = require("../controllers/projectController")

const auth = require("../middleware/authMiddleware")

router.post("/",auth,addProject)

router.get("/",getProjects)

module.exports = router