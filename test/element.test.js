//const { default: $ } = require("webdriverio/build/commands/element/$")
const internetPage = require("../pages/internet.page")

describe("interacting with elements", function() {
    it ("Get text for element", async () => {
        await browser.url('/');
        let text = await $("//*[@id='page-footer']").getText();
        console.log(text);
        internetPage.getLiText();
    })
    it ("Is footer Displayed", async () =>{
       let awaitForFooter = await $('#page-footer');
       let footerDisplayedResult = await awaitForFooter.isDisplayed();
       console.log("And the result of the isDisplayed footer is " + footerDisplayedResult); // This WORKS.
    })
    it("Does the header exist?", async() => {
        let pageHeaderElement = await internetPage.pageHeader;
        console.log(pageHeaderElement);
        let headerDisplayedResult = await pageHeaderElement.isDisplayed();
        console.log("And the result of the isDisplayed header is " + headerDisplayedResult);
    })
})