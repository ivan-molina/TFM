import { Selector } from 'testcafe';

export default class CardContents {
    constructor () {
        this.cartQuantity = Selector('input').withAttribute();
        this.productName = Selector('h1').withText(text);
    }
}