const express = require("express")
const app = express()
const port = 3000
const connection = require("./database/movies_db")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("api attiva")
})

app.listen(port, () => {
    console.log(`server attivo su http://localhost:${port}`)
})

