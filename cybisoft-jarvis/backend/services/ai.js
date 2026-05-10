require("dotenv").config()

const fs = require("fs-extra")
const path = require("path")

const Groq = require("groq-sdk")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

const memoryPath = path.join(
  __dirname,
  "../memory/chatMemory.json"
)

async function loadMemory() {
  try {
    const data = await fs.readJson(memoryPath)
    return data
  } catch {
    return []
  }
}

async function saveMemory(memory) {
  await fs.writeJson(memoryPath, memory, {
    spaces: 2
  })
}

async function askJarvis(message) {
  const memory = await loadMemory()

  memory.push({
    role: "user",
    content: message
  })

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
You are CYRA, an advanced AI executive assistant for CybiSoft.

You are:
- intelligent
- futuristic
- professional
- concise
- helpful

You remember previous conversations and maintain continuity.
`
      },

      ...memory
    ],

    model: "llama-3.3-70b-versatile"
  })

  const reply =
    completion.choices[0].message.content

  memory.push({
    role: "assistant",
    content: reply
  })

  if (memory.length > 20) {
    memory.splice(0, memory.length - 20)
  }

  await saveMemory(memory)

  return reply
}

module.exports = {
  askJarvis
}