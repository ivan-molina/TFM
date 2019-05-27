import Principal from '../Screens/PageObjecHome';
import ProductSheet from '../Screens/PageObjectProductSheet';
import CartContents from '../Screens/PageObjectCartContents';
import SignIn from '../Screens/PageObjectSignIn';
import DeliveryInformation from '../Screens/PageObjectDeliveryInformation';

const principal = new Principal();
const productSheet = new ProductSheet("Samsung Galaxy Tab");
const cartContents = new CartContents();
const signIn = new SignIn();
const deliveryInformation = new DeliveryInformation();

fixture('OSCommerce Demo')
    .page(principal.url);

test('Buy Product', async t => {
    await t
    //Se puede escoger el tamaño específico de lapantalla según el dispositivo
    /*.resizeWindowToFitDevice('Sony Xperia Z', {
        portraitOrientation: true
    })*/
    .maximizeWindow()
    .click(principal.samsungGalaxyTab)
    .click(productSheet.addToCartButton)
    .click(cartContents.cartQuantity)
    .pressKey('ctrl+a delete')
    .typeText(cartContents.cartQuantity, '5')
    .click(cartContents.updateCartQuantity)
    .click(cartContents.checkoutButton)
    .typeText(signIn.emailAddress, 'ivanmolmar@outlook.es')
    .typeText(signIn.password, 'paswordfalso123')
    .click(signIn.signInButton)
    .click(deliveryInformation.continue);
    //.expect(cartContents.cartQuantity).eql('5');
});