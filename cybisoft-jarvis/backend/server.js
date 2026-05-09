const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    status: "Jarvis Online"
  })
})

app.listen(5000, () => {
  console.log("Jarvis running on port 5000")
})