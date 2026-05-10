const express = require("express")
const router = express.Router()

const { getLeads } = require("../services/leadMemory")

router.get("/", (req, res) => {

  const leads = getLeads()

  res.json({
    success: true,
    leads
  })
})

module.exports = router