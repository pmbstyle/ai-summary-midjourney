import express from 'express'
import { getSummaryAndPrompt } from './tools/summarizer.js'
import { Ollama } from "@langchain/community/llms/ollama"

const llm = new Ollama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
})

const app = express()

app.listen(3000, () => {
  console.log('Server listening on port 3000') 
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})

app.get('/summarize', async (req, res) => {
    const { url } = req.query
    
    const { contentSummary, midjourneyPrompt } = await getSummaryAndPrompt(url, llm)
    
    res.json({
      contentSummary,
      midjourneyPrompt
    })
})