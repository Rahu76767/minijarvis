const express = require("express")
const router = express.Router()

const { askJarvis } = require("../services/ai")

router.post("/", async (req, res) => {
  try {
    const { message } = req.body

    const reply = await askJarvis(message)

    res.json({
      success: true,
      reply
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router