const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

const moviesRouter = require("./routes/movies")

app.use(express.static("public"))

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())


app.get("/", (req, res) => {
    res.send("api attiva")
})

app.use("/movies", moviesRouter)


app.use((req, res) => {
    res.status(404).json({
        error: "404",
        message: "endpoint not found"
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        error: "internal server error",
        message: err.message
    })
})

app.listen(port, () => {
    console.log(`server attivo su http://localhost:${port}`)
})

