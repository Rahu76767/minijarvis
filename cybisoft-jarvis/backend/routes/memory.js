const express = require("express")
const router = express.Router()

const fs = require("fs-extra")
const path = require("path")

const memoryPath = path.join(
  __dirname,
  "../memory/chatMemory.json"
)

router.get("/", async (req, res) => {
  try {
    const memory = await fs.readJson(memoryPath)

    res.json({
      success: true,
      memory
    })
  } catch (error) {
    res.json({
      success: false,
      memory: []
    })
  }
})

module.exports = router