# Summarizer

This is a simple application to summarize web page content and generate a Midjourney prompt from it.

## Usage

1. Install dependencies:


`npm install`


2. Open app.js and provide a url to summarize

3. Run the script:

`node ./app.js`

4. The summarized content and Midjourney prompt will be logged to the console

## Functionality

The main functionality is in tools/summarizer.js. It uses Puppeteer to:

- Fetch the page content 
- Extract all text elements
- Summarize the text content using the Ollama API
- Generate a Midjourney prompt from the summary

## Dependencies

- @langchain/community/llms/ollama - For text summarization
- Puppeteer - For scraping page content

