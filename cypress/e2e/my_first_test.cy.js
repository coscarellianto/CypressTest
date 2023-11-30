/// <reference types="cypress" />

it ('Iniciar Google', function(){
    cy.visit('https://www.google.com')
    cy.get('.spoKVd > :nth-child(1)').click()
    cy.get('#APjFqb').type('Youtube{enter}')
    cy.contains('Videos').click({ force: true }) 
})