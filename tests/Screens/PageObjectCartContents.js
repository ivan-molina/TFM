import { Selector } from 'testcafe';

export default class CardContents {
    constructor () {
        //FindElement.by(name = "cart_quantity[]");
        this.cartQuantity = Selector('input').withAttribute('name','cart_quantity[]');
        this.updateCartQuantity = Selector('#tdb4');
        this.checkoutButton = Selector('#tdb5');
    }
}