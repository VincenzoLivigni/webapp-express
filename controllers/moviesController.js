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
    const sqlReviews = "SELECT reviews.* FROM movies JOIN reviews ON reviews.movie_id = movies.id WHERE reviews.movie_id = ?"

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
        const movie = results[0]

        connection.query(sqlReviews, [id], (reviewsErr, reviewsResults) => {
            if (reviewsErr) {
                return res.status(500).json({
                    error: true,
                    message: reviewsErr.message
                })
            }

            console.log(reviewsResults)

            if (reviewsResults.length === 0)
                return res.status(404).json({
                    error: true,
                    message: "review not found"
                })
            movie.reviews = reviewsResults
            res.json(movie)
        })
    })
}


const storeReview = (req, res) => {
    const { id } = req.params
    const { name, vote, text } = req.body

    if (!name || !vote || !text) {
        return res.status(400).json({
            err: true,
            message: "missing data"
        })
    }

    const sql = "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)"

    if (vote < 1 || vote > 5) {
        return res.status(400).json({
            error: true,
            message: "the vote must be between the numbers 1 and 5"
        })
    }

    connection.query(sql, [id, name, vote, text], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: "query failed"
            })
        }

        res.status(201).json({
            message: "review added",
            reviewId: result.insertId,
            movie_id: id,
            name,
            vote,
            text
        })
    })
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
    storeReview,
    update,
    modify,
    destroy
}