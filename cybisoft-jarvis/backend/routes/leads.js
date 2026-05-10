const express = require("express")
const router = express.Router()

const {
  saveLeads
} = require("../services/leadMemory")

router.post("/", async (req, res) => {

  try {

    const { niche } = req.body

    const leads = [
      {
        company: "OpenAI",
        founder: "Sam Altman",
        email: "contact@openai.com",
        linkedin: "https://openai.com"
      },
      {
        company: "Anthropic",
        founder: "Dario Amodei",
        email: "contact@anthropic.com",
        linkedin: "https://anthropic.com"
      },
      {
        company: "Perplexity",
        founder: "Aravind Srinivas",
        email: "contact@perplexity.ai",
        linkedin: "https://perplexity.ai"
      }
    ]

    saveLeads(leads)

    res.json({
      success: true,
      niche,
      leads
    })

  } catch (error) {

    console.log(error)

    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router