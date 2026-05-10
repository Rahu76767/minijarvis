const fs = require("fs")
const path = require("path")

const filePath = path.join(
  __dirname,
  "../data/leads.json"
)

const saveLeads = (newLeads) => {

  let existing = []

  if (fs.existsSync(filePath)) {

    existing = JSON.parse(
      fs.readFileSync(filePath, "utf-8")
    )
  }

  const updated = [
    ...existing,
    ...newLeads
  ]

  fs.writeFileSync(
    filePath,
    JSON.stringify(updated, null, 2)
  )
}

const getLeads = () => {

  if (!fs.existsSync(filePath)) {
    return []
  }

  return JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  )
}

module.exports = {
  saveLeads,
  getLeads
}