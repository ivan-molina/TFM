import { Selector } from 'testcafe';

export default class Principal {
    constructor () {
        this.url = "https://demo.oscommerce.com/";
        this.samsungGalaxyTab = Selector('a').withText('Samsung Galaxy Tab');
        this.checkOutButton = Selector('#tdb2');
    }
}
