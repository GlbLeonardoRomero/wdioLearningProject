const LoginPage = require('./pageobjects/login.page');
const SecurePage = require('./pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await wdioExpect(SecurePage.flashAlert).toBeExisting();
        await wdioExpect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        await wdioExpect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
        await wdioExpect(browser).toHaveUrlContaining('secure');
    });
});


