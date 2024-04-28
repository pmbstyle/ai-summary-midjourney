import puppeteer from 'puppeteer'

async function getSummaryAndPrompt(url, llm) {
    const browser = await puppeteer.launch({
        headless: 'new',
    })
    const page = await browser.newPage()

    await page.goto(url, {waitUntil: 'networkidle0'})

    await page.waitForFunction(() => {
        return document.readyState === 'complete'
    })

    const textContent = await page.evaluate(() => {

        const textElements = document.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6')
    
        let textContent = ''
    
        textElements.forEach(element => {
            textContent += element.innerText
        })
    
        return textContent
    
    })

    const summarize_query = `You need to summarize only text content of the page source code. You MUST only return summary text, don't include anything else in your response. If you cannot summarize - return 'Cannot summarize page content.'. Source code: ${textContent}`
    const contentSummary = await llm.invoke(summarize_query)

    if(contentSummary === 'Cannot summarize page content.') {
        return {
            contentSummary,
            midjourneyPrompt: 'Cannot summarize page content.'
        }
    }

    const midjourney_query = `Create Midjourney prompt from the content, make sure it's a complete prompt and starting with 'Imagine'. You MUST return only prompt text. Don't say anything else. Content: ${contentSummary}`
    const midjourneyPrompt = await llm.invoke(midjourney_query)

    await browser.close()

    return {
        contentSummary,
        midjourneyPrompt
    }
}

export { getSummaryAndPrompt }