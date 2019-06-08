import { Selector } from 'testcafe';

export default class ProductSheet {
    constructor (text) {
        this.addToCartButton = Selector('#tdb4');
        this.productName = Selector('h1').withText(text);
    }
}