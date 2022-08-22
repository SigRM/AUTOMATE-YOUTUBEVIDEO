const puppeteer = require('puppeteer');

function main(){
    automateSearch();
}

async function automateSearch(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.setViewport({width: 1288, height:800});
    await page.goto('https://google.com');//'Link youtube video: https://youtu.be/PS5vBJELtj4'
    await page.type('.gLFyf.gsfi', 'https://youtu.be/PS5vBJELtj4');
    await page.click('input.gNO89b');
    
}

main()