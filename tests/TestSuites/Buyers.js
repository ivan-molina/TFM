import Principal from '../Screens/PageObjecHome';
import ProductSheet from '../Screens/PageObjectProductSheet';

const principal = new Principal();
const productSheet = new ProductSheet("Samsung Galaxy Tab");

fixture('Prueba Tests')
    .page(principal.url);

test('Buy Product', async t => {
    await t
    .click(principal.samsungGalaxyTab);
    await t
    .expect((productSheet.productName).innerText).eql('Samsung Galaxy Tab');
});