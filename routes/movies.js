const express = require("express")
const router = express.Router()
const moviesController = require("../controllers/moviesController")

// index -> get
router.get("/", moviesController.index)


// show -> get
router.get("/:id", moviesController.show)


// store -> post
router.post("/", moviesController.store)


// update -> put
router.put("/:id", moviesController.update)


// modify -> patch
router.patch("/:id", moviesController.modify)


// destroy -> delete
router.delete("/:id", moviesController.destroy)

module.exports = router