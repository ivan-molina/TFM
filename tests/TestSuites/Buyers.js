import Principal from '../Screens/PageObjecHome';
import ProductSheet from '../Screens/PageObjectProductSheet';
import CartContents from '../Screens/PageObjectCartContents';

const principal = new Principal();
const productSheet = new ProductSheet("Samsung Galaxy Tab");
const cartContents = new CartContents();

fixture('Prueba Tests')
    .page(principal.url);

test('Buy Product', async t => {
    await t
    .click(principal.samsungGalaxyTab)
    .click(productSheet.addToCartButton)
    .click(cartContents.cartQuantity)
    .pressKey('ctrl+a delete')
    .typeText(cartContents.cartQuantity, '5')
    .click(cartContents.updateCartQuantity)
    .click(cartContents.checkoutButton);
    //.expect(cartContents.cartQuantity).eql('5');
});