const connection = require("../database/movies_db")


const index = (req, res) => {

    const sql = "SELECT * FROM movies"
    connection.query(sql, (err, results) => {
        if (err)
            return res.status(500).json({
                error: true,
                message: err.message
            })
        console.log(results);
        res.json(results)
    })
}


const show = (req, res) => {
    res.send(`show the movie with id: ${req.params.id}`)
}


const store = (req, res) => {
    res.send("store a new movie")
}


const update = (req, res) => {
    res.send(`update the movie with id: ${req.params.id}`)
}


const modify = (req, res) => {
    res.send(`modify the movie with id: ${req.params.id}`)
}


const destroy = (req, res) => {
    res.send(`delete the movie with id: ${req.params.id}`)
}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}