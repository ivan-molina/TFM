import { Selector } from 'testcafe'

fixture('Prueba Tests')
    .page('http://devexpress.github.io/testcafe/example');

/*
    t: test controller object--> Es necesario para tener acceso al test run API
    await: Sentencia para esperar a que las acciones se ejecuten
    #{text} identifica un id en concreto
    typeText: se usa para escribir en un cuadro de texto
    click: Hace click en el elemento referenciado 
*/

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
    /*
        Se puede buscar un elemento usando el comando 'Selector':
        await Selector('SELECTOR PADRE').find('SELECTOR HIJO');
        await Selector('#{id del selector}');
    */
    const articleHeader = await Selector('.result-content').find('h1');
    const articleHeader2 = await Selector('#article-header');
    
    /*
        innerText: extrae el texto de un selector
    */

    let headerText = await articleHeader.innerText;
    let headerText2 = await articleHeader2.innerText;
    console.log(headerText);
    console.log(headerText2);

    /*
        expect: es el assert de toda la vida
    */
    await t
        .expect(headerText).eql('Thank you, John Smith!');
    await t
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  
});
    