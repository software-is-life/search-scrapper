import {Browser, ElementHandle} from "puppeteer";

type Company = {
    name: string | null
    industry: string | null
    headquarters: string | null
    phoneNumber: string | null
    contact: string | null
    ein: string | null
    numberOfEmployees: number | null
    planProvider: ProviderPlan
}

type ProviderPlan = {
    companyName: string | null
    provider: string | null
    website: string | null
    planName: string | null
    phoneNumber: string | null
    faxNumber: string | null
    hoursOfOperation: string | null
    address: string | null

}

const scrapedCompanyInfo = {
    url: 'https://www.hicapitalize.com/find-my-401k/',
    async scraper(browser: Browser) {
        let companies: Company[] = [];
        console.log(this.url);
        let page = await browser.newPage();
        await page.goto(this.url);
        // @ts-ignore
        let planLinks = await page.$$eval('a.underline', (links: any) => {
            links = links.map((a: any) => a.href);
            return links;
        });
        console.log(planLinks);
        const scrapCurrentCompanyPage = async (link: string) => {
            let newPage = await browser.newPage();
            await newPage.goto(link);
            // @ts-ignore
            let providerPlanObj: ProviderPlan = {
                companyName: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div.mt-2.pb-4.flex.flex-row.justify-between > h5', text => text.textContent),
                provider: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div.pt-2.mb-4 > div.Home_beigePaper__mWVW2 > div.flex.items-center.justify-between.flex-col.md\\:flex-row > div.mt-3.flex.items-center.flex-col.md\\:flex-row > div.ml-0.md\\:ml-4.mt-3.md\\:mt-0', text => text.textContent),
                website: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div.pt-2.mb-4 > div.Home_beigePaper__mWVW2 > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(2) > div > a', text => text.href),
                planName: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div.pt-2.mb-4 > div.Home_beigePaper__mWVW2 > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(2)', text => text.textContent),
                phoneNumber: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div.pt-2.mb-4 > div.Home_beigePaper__mWVW2 > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(2) > a', text => text.textContent),
                faxNumber: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div.pt-2.mb-4 > div.Home_beigePaper__mWVW2 > div:nth-child(3) > div > div:nth-child(4) > div:nth-child(2) > a', text => text.textContent),
                hoursOfOperation: await newPage.$eval('.p-4.Home_bgWhite__tjsxl.Home_borderBottom__W0nf4.flex.justify-between.items-center:nth-child(5) > div:nth-child(2)', text => text.textContent),
                address: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div.pt-2.mb-4 > div.Home_beigePaper__mWVW2 > div:nth-child(3) > div > div:nth-child(6)', text => text.textContent),
            };
            // @ts-ignore
            let companyObj: Company = {
                name: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div.mt-2.pb-4.flex.flex-row.justify-between > h5', text => text.textContent),
                industry: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div.Home_borderBottom__W0nf4.mt-8.pb-4.flex.flex-row.justify-between > div.Home_chip__UtiSK.max-w-\\[50\\%\\]', text => text.textContent),
                headquarters: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div:nth-child(4) > div.max-w-\\[50\\%\\].text-right', text => text.textContent),
                phoneNumber: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div:nth-child(5) > div.max-w-\\[50\\%\\]', text => text.textContent),
                contact: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div:nth-child(6) > div.max-w-\\[50\\%\\]', text => text.textContent),
                ein: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-1\\/3.flex-col.flex > div > div:nth-child(7) > div.max-w-\\[50\\%\\]', text => text.textContent),
                numberOfEmployees: await newPage.$eval('#__next > div.Home_bgWhite__tjsxl.w-full.pt-8.pb-8 > div > div.flex-row.w-full.justify-between.hidden.invisible.md\\:flex.md\\:visible > div.w-full.md\\:w-2\\/3.flex-col.flex.ml-0.md\\:ml-8 > div:nth-child(4) > div.py-4 > p', text => {
                    let currText = text.textContent;
                    // @ts-ignore
                    let strippedText = currText.substring(currText.indexOf("Their plan covers ") + 1, currText.lastIndexOf(" employees."));
                    return Number(strippedText);
                }),
                planProvider: providerPlanObj

            };
            await newPage.close();
            return companyObj;
        }
        let data = planLinks.map(async (link: string) => await scrapCurrentCompanyPage(link));
        console.log(data);
        await page.close();
        return data;
    }
}
module.exports = scrapedCompanyInfo;