const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
//const { Selector } = require('testcafe');

Given('Navigate to url {string}', function (string) {
    return testController
        .navigateTo('http://www.globalsqa.com/samplepagetest/');
});


When('I click the product Samsung Galaxy Tab', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click add to cart', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I edit cart Quantity to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click update button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click the checkout button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I edit {string} in the email field', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click the Sign In button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click Continue in delivery Information Screen', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I edit {string} in the message field on the submission form', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});