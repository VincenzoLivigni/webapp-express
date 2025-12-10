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

    const id = Number(req.params.id)
    const sql = "SELECT * FROM movies WHERE id = ?"

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            })
        }
        console.log(results)

        if (results.length === 0)
            return res.status(404).json({
                error: true,
                message: "movie not found"
            })
        res.json(results[0])
    })
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