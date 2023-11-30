/// <reference types="cypress" />

it ('Iniciar Google', function(){
    cy.visit('https://www.google.com')
    cy.get('.spoKVd > :nth-child(1)').click()
    cy.get('#APjFqb').type('Youtube{enter}')
    cy.contains('Videos').click({ force: true }) 
})

it.only('login test',function(){
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.contains('Test login')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.contains('Logged In Successfully')
    cy.contains('Congratulations student. You successfully logged in!')
    cy.contains('Log out').click()
    cy.contains('This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.')
})