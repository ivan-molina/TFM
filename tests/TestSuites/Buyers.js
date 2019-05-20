import Principal from '../Screens/PageObjecHome';

const principal = new Principal();

fixture('Prueba Tests')
    .page(principal.url);

test('Buy Product', async t => {
    await t
    .click(principal.samsungGalaxyTab);
});