const express = require("express")
const cors = require("cors")

const chatRoute = require("./routes/chat")
const memoryRoute = require("./routes/memory")
const leadsRoute = require("./routes/leads")
const savedLeadsRoute = require("./routes/savedLeads")

const app = express()

app.use(cors())
app.use(express.json())

// ROUTES
app.use("/chat", chatRoute)
app.use("/memory", memoryRoute)
app.use("/leads", leadsRoute)
app.use("/saved-leads", savedLeadsRoute)

// HOME
app.get("/", (req, res) => {
  res.json({
    status: "CYRA Online"
  })
})

// SERVER
app.listen(5000, () => {
  console.log("CYRA running on port 5000")
})