import { Selector } from 'testcafe';

export default class ProductSheet {
    constructor () {
        this.samsungGalaxyTab = Selector('a').withText('Samsung Galaxy Tab');
    }
}