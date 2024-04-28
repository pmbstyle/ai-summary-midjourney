import { Ollama } from "@langchain/community/llms/ollama"
import { getSummaryAndPrompt } from './tools/summarizer.js'

const llm = new Ollama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
})

const url = '' // your url here

const {contentSummary, midjourneyPrompt} = await getSummaryAndPrompt(url,llm)

console.log(contentSummary)
console.log(midjourneyPrompt)