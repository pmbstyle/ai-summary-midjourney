# Summarizer Web App

This is a simple web app that summarizes the content of a web page and generates a prompt for creating a Midjourney image based on the summary.

## Features

- Summarize article content from a user-input URL
- Generate a Midjourney prompt based on the summary
- Simple web UI to input a URL and view the generated summary and prompt  
- Node.js backend with Express server
- Puppeteer web scraping to extract page content
- Ollama API for text summarization

## Usage

### Install

`npm install`

### Run Server 

`node server.js`

This will start the Express server on port 3000.

### Use App

Navigate to `http://localhost:3000`

Enter a URL and click "Generate" to summarize the content and generate a Midjourney prompt.

The summary and prompt will be displayed on the page.

## Code Overview

- `server.js` - Express server
- `public/index.html` - Frontend UI 
- `public/index.js` - Frontend logic
- `tools/summarizer.js` - Scrapes content and generates summary + prompt

## Built With

- [Express](https://expressjs.com/) - Web framework
- [Puppeteer](https://pptr.dev/) - Headless browser for scraping  
- [Ollama API](https://olllama.com/) - Text summarization
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## License

This project is open source and available under the [MIT License](LICENSE).
