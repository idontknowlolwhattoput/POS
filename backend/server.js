import express from "express"
const app = express()
const port = 5000
import bodyParser from "body-parser"

app.get("/test", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`)
})