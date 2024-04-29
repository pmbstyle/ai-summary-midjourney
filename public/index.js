const urlInput = document.getElementById('urlInput')
const generateBtn = document.getElementById('generateBtn')
const btnText = document.getElementById('btnText')
const spinner = document.getElementById('spinner')
const summaryWrapper = document.getElementById('summary')
const promptWrapper = document.getElementById('prompt')
const summaryText = document.getElementById('summaryText')
const promptText = document.getElementById('promptText')

generateBtn.addEventListener('click', async () => {
    btnText.classList.add('hidden')
    spinner.classList.remove('hidden')
    spinner.classList.add('inline')

    const url = urlInput.value
  
    const response = await fetch(`/summarize?url=${url}`)
    const data = await response.json()

    spinner.classList.remove('inline')
    spinner.classList.add('hidden')
    btnText.classList.remove('hidden')
  
    summaryText.innerText = data.contentSummary
    promptText.innerText = data.midjourneyPrompt

    summaryWrapper.classList.remove('hidden')
    promptWrapper.classList.remove('hidden')
})
