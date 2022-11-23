
//const { default: $ } = require("webdriverio/build/commands/browser/$")

class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $$('ul') }
    get childElements() { return this.parent.$$('li') }
    //specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }

    
    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }
}
module.exports = new Internet()

/*
const { default: $ } = require("webdriverio/build/commands/browser/$")

class Internet {
    get pageHeader() { return $('h1.heading')}
    get subHeading() { return $('h2')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get childElements() { return this.parent.$$('li') }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }
}
module.exports = new Internet()
*/