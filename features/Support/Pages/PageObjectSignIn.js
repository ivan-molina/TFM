import { Selector } from 'testcafe';

export default class SignIn {
    constructor () {
        this.emailAddress = Selector('input').withAttribute('name','email_address');
        this.password = Selector('input').withAttribute('name','password');
        this.signInButton = Selector('#tdb1');
    }
}   