const express = require("express")
const app = express()
const port = 3000

const moviesRouter = require("./routes/movies")

app.use(express.static("public"))

app.use(express.json())


app.get("/", (req, res) => {
    res.send("api attiva")
})

app.use("/movies", moviesRouter)

app.listen(port, () => {
    console.log(`server attivo su http://localhost:${port}`)
})

